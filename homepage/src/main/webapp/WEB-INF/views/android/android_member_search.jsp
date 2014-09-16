<%@page import="homepage.board.BoardDto"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="dto" class="homepage.someDto"/>
<jsp:useBean id="gmail" class="mail.Gmail"/>
<%
	request.setCharacterEncoding("utf-8");
	response.setCharacterEncoding("utf-8");
	
	//이름, 이메일, 번호
	String email=request.getParameter("email");
	String name=request.getParameter("name");
	String id=request.getParameter("id");
	
	//System.out.println("name: "+name);

	//아이디찾기
	dto=dao.getId(name, email);	
	String id_search=dto.getId();
	//System.out.println("id_search: "+id_search);
	
	//비밀번호 찾기
	dto=dao.getPw(id,email);
	String name2=dto.getName();
	
	System.out.println("id: "+ id+"email: "+email);

	
	int flag=0;
	//이메일 보내기
	if(name!=null){
		if(id_search != null){
			gmail.Gmail1(email, id_search);
			flag=1;
		}else{
			flag=0;
		} 
	}
	else if(id!=null){
	 if(name2 != null){
		gmail.Gmail1(email, id);
		flag = 3;
	 }
	 else{
		flag = 2;
	 }
	}
	
	out.println("<check>");
	out.println("<flag>"+flag+"</flag>");
	out.println("</check>");

%>