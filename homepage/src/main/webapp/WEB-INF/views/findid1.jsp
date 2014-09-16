<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
	<span style="font-size: xx-large;"><b style="font-weight: bold;">${param.irum}</b>님의 아이디는 <b style="font-weight: bold;">${sessionScope.findid }</b>입니다.</span>
</c:when>
<c:otherwise>
	<span style="font-size: xx-large;">인증번호가 다릅니다.</span>
</c:otherwise>
</c:choose>
<div align="right">
<a href="/homepage/index.html" style="font-size: 25px;color: hotpink">메인으로 이동</a>
</div>
			</div>
		</div>
	</div>
	<!-- FOOTER -->
	<footer class="box">
		<jsp:include page="/footer.html"/>
	</footer>
</body>
</html>