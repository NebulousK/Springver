<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Iterator" %>
<%@ page import="java.io.File" %>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.*"%>
<%@ page import="org.apache.commons.io.FilenameUtils"%>
<%@ page import="Member.MemberDto" %>

<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="dto" class="homepage.someDto"></jsp:useBean>

<%
	
	request.setCharacterEncoding("utf-8");
	response.setCharacterEncoding("utf-8");
	
	String keyid=request.getParameter("keyid");
	System.out.println("test:"+keyid);

	dto=dao.PhotoGet(keyid);
	String realpath="http://54.178.192.82/homepage/profile/";
	String filepath=realpath+dto.getPhoto();
	
	System.out.println(dto.getPhoto());
	System.out.println(filepath);

	out.println(filepath);
	
%>


