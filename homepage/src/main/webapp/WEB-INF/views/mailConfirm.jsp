<%@page import="homepage.someDto"%>
<%@page import="homepage.someDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	String id = request.getParameter("id");
	String key = request.getParameter("key");
	String email = request.getParameter("email");
	
	// String key1 = String.valueOf(application.getAttribute(id));
	 
	 someDao Sdao = new someDao();
	 someDto dto = Sdao.selectEmailconfirm(id);
	String id1 = dto.getId();
	String email1 = dto.getEmail();
	String key1 = dto.getKey();
	/* System.out.println(id);
	System.out.println(key);
	System.out.println(key1);
	System.out.println(email); */
	if(key.equals(key1)){
		Sdao.updateMemberState(id);
%>
		<script type="text/javascript">
		alert("이메일 인증 완료");
		window.close();
		</script>
<%
	}
	else{
%>
		<script type="text/javascript">
		alert("인증되지 않습니다. 관리자에게 문의해주세요");
		window.close();
		</script>
<%
	}
%>		

</body>
</html>