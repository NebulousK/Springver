<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="Member.MemberDto" %>
<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="gmail" class="mail.Gmail"/>
<%
	
	String id=request.getParameter("id");
	String password=request.getParameter("password");
	
	String result=dao.login(id, password);

	System.out.println(result);
	
	out.println(result);
	
%>