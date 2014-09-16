<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width">
<title>Responsive Aside website template</title>
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
<script src="/homepage/js/ajax1.js"></script>
<script type="text/javascript">
	//이메일 전송
	function keysend(){
		var name = document.getElementById("irum").value;
		var email = document.getElementById("email").value;
		var params = "name="+name+"&email="+email+"&command=SENDEMAIL"; 
		if(irum != "" && email != ""){
			sendRequest("/homepage/board.action", params, callback, null);
			document.getElementById("ccccc").disabled=true;
		}
		else{
			alert("이름과 이메일을 입력해주세요");
			return false;
		}
	}
	
	//전송후 callback
	function callback(){
		if(XMLreq.readyState == 4){
			if(XMLreq.status == 200){
				var flag = XMLreq.responseText;
				//alert(flag);
				if(flag == 0){
					alert("가입 정보가 없습니다.");
				}
				else{
					alert("메일이 발송되었습니다.");
				}
			}
			else{
				alert(XMLreq.status);
			}
		}
	}

	
	function findId(){
		var irum = document.getElementById("irum").value;
		var pwkey = document.getElementById("pwkey").value;
		var email = document.getElementById("email").value;

		if(irum != "" && pwkey != "" && email != ""){
			location.href = "/homepage/findid1.jsp?email="+email+"&pwkey="+pwkey+"&irum="+irum;		
		}
		else{
			alert("모두 입력해 주시오");
			return false;
		}
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
				<div class="margin" align="center">		
						<img alt="" src="/homepage/images/error.jpg"><br/><br/><br/><br/>
						<input type="button" style="width:100px" value="홈으로" onclick="location.href='/homepage/index.html'"/>
				</div>
			</div>
		</div>
	<!-- FOOTER -->
	<footer class="box">
		<jsp:include page="/footer.html"/>
	</footer>
</body>
</html>