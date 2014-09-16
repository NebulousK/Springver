<%@page import="Group.GroupDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	String userid1=request.getParameter("userid1");
	String userid2=request.getParameter("userid2");
	GroupDao dao=new GroupDao();
	dao.accept_Friend(userid2, userid1);
	
	
	response.sendRedirect("../friendList/main.jsp");
	
%>
<B>List_Add_Friend.jsp</B>