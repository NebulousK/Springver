<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
	function check_id(){
		if(document.getElementById("adminid").value == ""){
			alert("관리자 아이디를 입력하세요");
		}
		else if(document.getElementById("adminpw").value == ""){
			alert("관리자 비밀번호를 입력하세요");
		}
		document.form1.submit();	
	}
</script>
</head>
<body bgcolor="white" text="black" link="blue" vlink="purple" alink="red">
<br><br><br><br><br><br><br><br><br><br>
<center>
<script> document.write(menu());</script>
<form name="form1" action="/homepage/admin.admin" method="post">
<table  bordercolor="purple" border width='330' cellpadding='4' cellspacing='0'>
	<tr>
		<td>
			<table bgcolor="#feffd7" border="0" width="330" cellpadding='0' cellspacing='0'>
				<tr>
					<td width="324" colspan="2" bgcolor='#F0E8C6' height="42" align='center'>
            <b>SomeNsomE&nbsp;&nbsp;운영자 관리</b>
	        </td>
			  </tr>
		    <tr>
					<td width="106" height="5">&nbsp;</td>
					<td width="212" height="5">&nbsp;</td>
		    </tr>
				<tr>
					<td width="106" valign="middle" align="right">&nbsp;<img src="/homepage/images/id.gif" width="20" height="16" border="0"></td>
					<td width="212" valign='center'>&nbsp;<input type="text" name="adminid" id="adminid" maxlength="12" size="14"></td>
				</tr>
		    <tr>
					<td width="106" valign="middle" align="right">&nbsp;<img src="/homepage/images/pw.gif" width="75" height="16" border="0"></td>
					<td width="212" valign='center'>
	                &nbsp;<input type="password" name="adminpw" id="adminpw" maxlength="12" size="14">
					</td>
		    </tr>
				<tr>
					<td width="324" colspan="2" align='center'><a href="javaScript:check_id()"><img src="/homepage/images/login.gif" width="72" height="30" border="0"></a> </td>
				</tr>
			</table>
		</td>
	</tr>
</table>
</form>
</center>
</body>
</html>
