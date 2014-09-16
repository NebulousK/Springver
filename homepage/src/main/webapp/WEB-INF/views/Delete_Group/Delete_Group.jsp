<%@page import="Group.GroupDao"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	int no=Integer.parseInt(request.getParameter("groupNo"));
	String myid=request.getParameter("myid");
	String group=request.getParameter("group");
	GroupDao dao=new GroupDao();
	//dao.
	dao.delete_Friend_Gruoup(myid,group);
	dao.delete_Group(no);
	response.sendRedirect("../main.jsp");
%>
<b>Delete_Group.jsp</b>
