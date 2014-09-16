<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script>
function ref(){
	topFrame.location.href="/homepage/member.admin";
}
function ref2(){
	topFrame.location.href="/homepage/board.admin";
}
</script>
</head>

<frameset rows="0,100%" frameborder="NO" border="0" framespacing="0">
	<frame src=""  name="mainFrame" id="mainFrame" scrolling="NO" noresize>
	<frame src="login.jsp" name="topFrame" id="topFrame">
</frameset>

<noframes>
	<body></body>
</noframes>
</html>