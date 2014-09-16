<%@page import="Group.GroupDto"%>
<%@page import="Group.GroupDao"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<jsp:useBean id="GroupDto" class="Group.GroupDto"/>
<jsp:useBean id="dao" class="Group.GroupDao"/>


<%
	
	String myid=request.getParameter("myid");
	String userid=request.getParameter("userid");
	String group=request.getParameter("group");
	
	GroupDto dto=new GroupDto();
	dto.setGroup(group);
	dto.setMyid(myid);
	dto.setUserid(userid);
	
	System.out.println("Delete_Friend_Proc.jsp myid:"+dto.getMyid());
	System.out.println("Delete_Friend_Proc.jsp group:"+dto.getGroup());
	System.out.println("Delete_Friend_Proc.jsp userid:"+dto.getUserid());

	dao.friend_Delete(dto);
%>