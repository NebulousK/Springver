<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:useBean id="dao" class="homepage.someDao"></jsp:useBean>
<%
	String name2 = request.getParameter("name");
	String name[] = name2.split("/| ");
	dao.someplusdel(name[3]);
%>
<script>
	self.close();
</script> 