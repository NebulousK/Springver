<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
<script>
	function selfclose(){
		
		window.close();
	}


</script>
<%
	String myid=request.getParameter("myid");
	int num=Integer.parseInt(request.getParameter("num"));
	System.out.println(" Group_Create num:"+num);
	System.out.println(" Group_Create myid:"+myid);
%>
</head>
<body>
	<br/><br/><br/>
	<b>구룹생성을 하시겠습니까?</b>
	<br/><br/><br/>
<!--no, myid, group  -->
	<div>
		<form name="createGroup"action="Group_Create_Proc.jsp" method="post">
			<input type="hidden" name="num" value="<%=num%>">
			<input type="hidden" name="myid" value="<%=myid%>">
			<!--<input type="hidden" name="userid" value="<%-- <%=userid%> --%>">-->
			   
			<table border="1">
				<tr>	
				<td><input type="radio" name="group" value="School">School</td>
				<td><input type="radio" name="group" value="House">House</td><br/>
				<td><input type="radio" name="group" value="Office">Office</td>
				<td><input type="radio" name="group" value="Academy">Academy</td>
				</tr>
		</table>
		<br/><br/><br/><br/><br/>	
				<input align="left" type="submit" value="확인" onClick="selfclose()"/>&nbsp;&nbsp;&nbsp;
				<input align="left" type="reset" value="취소" onClick="selfclose()"/>
		</form>
	</div>
</body>
</html>