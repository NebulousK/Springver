<%@page import="homepage.board.BoardDto"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="dto" class="homepage.someDto"/>
<jsp:useBean id="gmail" class="mail.Gmail"/>
<%
	String id=request.getParameter("id");
	String pw=request.getParameter("pw");
	String pw2=request.getParameter("pw2");
	String email=request.getParameter("email");
	String result="";
	String password_result=dao.passwordcheck(pw, pw2);	
	if(password_result.equals("5")){
		result=dao.updatePwM(id, pw, email);
		System.out.print("CCCCCresult: "+result);
		System.out.print("CCCCCCpassword_result: "+password_result);
	}
	out.println("<check>");
	out.println("<id>"+result+"</id>");
	out.println("<pw>"+password_result+"</pw>");
	out.println("</check>");
%>