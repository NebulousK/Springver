<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <jsp:useBean id="dao" class="homepage.someDao"/>
 <jsp:useBean id="dto" class="Member.AMemberDto"/>
 <jsp:setProperty property="*" name="dto"/>
<%

	String email1=request.getParameter("email1");
	String email2=request.getParameter("email2");
	String email_result=dao.emailcheck(email1, email2);
	System.out.println("email1: "+email1);
	System.out.println("email2: "+email2);
	System.out.println("이메일 체크:"+email_result);
	
	String id=request.getParameter("id");
	System.out.println("id"+id);
	String id_result=dao.idcheck(id);
	System.out.println("아이디체크: "+id_result);
	
	String password=request.getParameter("password");
	System.out.println("password"+password);
	String check_password=request.getParameter("check_password");
	System.out.println("check_password"+check_password);
	String password_result=dao.passwordcheck(password, check_password);
	
	System.out.println("비밀번호 체크:"+password_result);	

	out.println("<check>");
	out.println("<email>"+email_result+"</email>");
	out.println("<id>"+id_result+"</id>");
	out.println("<password>"+password_result+"</password>");
	out.println("</check>");
%>
