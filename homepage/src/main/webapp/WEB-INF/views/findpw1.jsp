<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,600,700" rel="stylesheet" />
		<script src="js/jquery.min.js"></script>
		<script src="js/config.js"></script>
		<script src="js/skel.min.js"></script>
		<link rel="stylesheet" href="css/skel-noscript.css" />
		<link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="css/style-desktop.css" />
<link type="text/css" rel="stylesheet" href="/homepage/css/alert.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/skin.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/components.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/responsee.css"> 
<link type="text/css" rel="stylesheet" href="/homepage/css/template-style.css">  

 <link type="text/css" rel="stylesheet" href="/homepage/css/luYzpvna9qk.css" />  
<link type="text/css" rel="stylesheet" href="/homepage/css/oBwXKrMsLPd.css" />  
<link type="text/css" rel="stylesheet" href="/homepage/css/k4p1J0mZLFW.css" />
 <link type="text/css" rel="stylesheet" href="/homepage/css/u4n0TOW16uV.css" />  
 <link type="text/css" rel="stylesheet" href="/homepage/css/aO5MXY7tAfJ.css" />  
<script type="text/javascript" src="/homepage/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/homepage/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/homepage/js/modernizr.js"></script>
<script type="text/javascript" src="/homepage/js/responsee.js"></script>
<script type="text/javascript" src="/homepage/js/jquery.jcarousel.js"></script>
<script type="text/javascript">
	function updatePwCancel(){
		location.href = "/homepage/index.html";
	}
	
	function updatePw(){
		var id = document.getElementById("id").value;
		var pw = document.getElementById("pw").value;
		var pw1 = document.getElementById("pw1").value;
		var email = document.getElementById("email").value;
		//alert(id == "");
		if(id == ""){
			alert("아이디를 입력해주세요");
			document.getElementById("id").focus();
			return false;
		}
		else if(pw == ""){
			alert("새로운 비밀번호를 입력해주세요");
			document.getElementById("pw").focus();
			return false;
		}
		else if(pw1 == ""){
			alert("비밀번호 확인을 입력해주세요");
			document.getElementById("pw1").focus();
			return false;
		}
		else if(pw != pw1){
			alert("비밀번호가 서로 다릅니다. 정확히 입력해주세요");
			document.getElementById("pw").focus();
			return false;
		}
		alert("비밀번호가 변경되었습니다.");
		document.updatepw.submit();
	}

</script>
</head>
<body class="size-1140">
	<!-- TOP NAV WITH LOGO -->
	<header>
		<nav style="background-color: #212121;">
			<div class="line" >
				<div class="s-12 l-2" >
					<img class="s-5 l-12 center" src="/homepage/images/IMG_004.png" style="width: 100px; height: 100px;margin-top: 7px;margin-bottom: 7px"/>
				</div>
				
			</div>
		</nav>
	</header>
	<div class="line">
		<div class="box  margin-bottom" style="margin-top: 13px;">
			<div class="margin">


<c:choose>
<c:when test="${key eq param.pwkey}">
	<div>
							<div class="12u">
								<form name="updatepw" method="post" action="/homepage/UPDATEPW.me">
									<input type="hidden" name="action" value="/UPDATEPW.me" />
								<table>
									<div>
										<div class="row half">
											<div class="12u">
												<br/><br/><br/>
											</div>
										</div>
										<div class="row half">
											<div class="12u">
												<input type="text" name="id" id="id" placeholder="아이디 :" 
													style="background-color: white; border: solid 1px;height: 50px;width: 500px;font-size: medium;"/>
											</div>
										</div>
										<div class="row half">
											<div class="12u" style="margin-bottom: 0px">
												<input type="text" name="email" id="email" placeholder="가입시 등록 메일 :" 
													style="background-color: white; border: solid 1px;height: 50px;width: 500px;font-size: medium;"/>
											</div>
										</div>
										<div class="row half">
											<div class="12u">
												<input type="password" name="pw" id="pw" placeholder="새로운 비밀번호 입력 :" 
													style="background-color: white; border: solid 1px;height: 50px;width: 500px;font-size: medium;"/>
											</div>
										</div>
										<div class="row half">
											<div class="12u">
												<input type="password" name="pw1" id="pw1" placeholder="비밀번호 확인 :" 
													style="background-color: white; border: solid 1px;height: 50px;width: 500px;font-size: medium;"/>
											</div>
										</div>
										<div class="row">
											<div class="12u">
												<button class="button" type="button" onclick="updatePw()"  
													style="width:150px;font-size: medium;color: white; height: 50px;padding: 1px;">비밀번호 변경</button>
												<button class="button" type="button" onclick="updatePwCancel()"  
													style="width:150px;font-size: medium;color: white; height: 50px;">취소</button>
											</div>
										</div>
									</div>
									</table>
								</form>
							</div>
						</div>
</c:when>
<c:otherwise>
	<span style="font-size: xx-large;">인증번호가 다릅니다.</span>
</c:otherwise>
</c:choose>
			</div>
		</div>
	</div>
	<!-- FOOTER -->
	<footer class="box">
		<jsp:include page="/footer.html"/>
	</footer>
</body>
</html>