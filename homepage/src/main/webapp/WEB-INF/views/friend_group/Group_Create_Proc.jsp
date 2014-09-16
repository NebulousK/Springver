<%-- <%@page import="Group.GroupDto"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<jsp:useBean id="groupdto" class="Group.GroupDto"></jsp:useBean>
<jsp:useBean id="groupdao" class="Group.GroupDao"></jsp:useBean>
<jsp:setProperty property="*" name="groupdto"/>
<%
	//int num=Integer.parseInt(request.getParameter("num"));
	String myid=request.getParameter("myid");
	/* String userid=request.getParameter("userid"); */
	String group=request.getParameter("group");
	System.out.println("myid:"+myid +"group:"+group);
	groupdao.createGroup(groupdto);
	//response.sendRedirect("/homepage/Friend.jsp");
	
%>

	 --%>