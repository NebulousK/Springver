<%@page import="homepage.board.BoardDto"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="dto" class="homepage.someDto"/>

<%

	String num=request.getParameter("num");
	//System.out.println("num: "+num);
	
	String result_id=dao.keyCompare(num);
	//System.out.println("result:"+result_id);
	
	out.println("<check>");
	out.println("<id>"+result_id+"</id>");
	out.println("</check>");
	
	dao.deleteKey(result_id);
%>