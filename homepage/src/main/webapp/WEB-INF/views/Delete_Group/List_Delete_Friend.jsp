<%@page import="Group.GroupDao"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	
	//模备格废俊辑 模备 昏力 
	/*int no=0;
	  no =Integer.parseInt(request.getParameter("no"));
	
	*/
	String myid=request.getParameter("myid"); 
	String userid2=request.getParameter("userid2"); 
	//String friends="true";//request.getParameter("friends"); 
	System.out.println("List_Delete_Friend.jsp myid:"+myid);
	System.out.println("List_Delete_Friend.jsp userid2:"+userid2);
	//System.out.println("List_Delete_Friend.jsp no:"+no);
	//System.out.println("friends:"+friends);
	
	
	GroupDao dao=new GroupDao();
	dao.list_Friend_Delete(myid, userid2);
	//dao.get
	response.sendRedirect("../friendList/main.jsp");
%>
