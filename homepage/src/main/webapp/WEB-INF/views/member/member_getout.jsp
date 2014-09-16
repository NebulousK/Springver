<%@page import="homepage.someDto"%>
<%@page import="homepage.board.ReplyDto"%>
<%@page import="homepage.board.BoardDto"%>
<%@page import="homepage.board.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width">
<title>Responsive Aside website template</title>

<link type="text/css" rel="stylesheet" href="/homepage/css/bootstrap.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/components.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/responsee.css"> 
<link type="text/css" rel="stylesheet" href="/homepage/css/template-style.css">  
<link type="text/css" rel="stylesheet" href="/homepage/css/luYzpvna9qk.css" />  
<link type="text/css" rel="stylesheet" href="/homepage/css/oBwXKrMsLPd.css" />  
<link type="text/css" rel="stylesheet" href="/homepage/css/k4p1J0mZLFW.css" />
<link type="text/css" rel="stylesheet" href="/homepage/css/u4n0TOW16uV.css" />  
<link type="text/css" rel="stylesheet" href="/homepage/css/aO5MXY7tAfJ.css" /> 
<script type="text/javascript" src="/homepage/js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="/homepage/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/homepage/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/homepage/js/modernizr.js"></script>
<script type="text/javascript" src="/homepage/js/responsee.js"></script>
<script type="text/javascript" src="/homepage/js/bootstrap.js"></script>  
<link rel="stylesheet" href="/homepage/css/editor.css" type="text/css" charset="utf-8" />
<script src="/homepage/js/editor_loader2.js" type="text/javascript" charset="utf-8"></script>
</head>
<body class="size-1140" > 
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
	<!-- ASIDE NAV AND CONTENT -->
	<div class="line">
		<div class="box  margin-bottom">
			<div class="margin">
				<!-- CONTENT -->
				<section class="s-12 l-7">
<!--============================================================================= 글쓰기 시작 -->
				<form name="a" id="a" action="/homepage/getout.me" method="post">
					<div style="text-align:center;height:500px;width:100%">
						<div style="margin:0 auto;width:750px;text-align:left;">
							본인 확인을 위해 비밀번호를 다시 입력해주세요 : <input type="password" name="password" id="password">
							&nbsp;&nbsp;&nbsp;<input type="submit" value="회원 탈퇴"/>
						</div> 
					</div>
				</form>
				</section>
			</div>
		</div>
	</div>
	<!-- FOOTER -->
	<footer class="box">
		<jsp:include page="/footer.html"/>
	</footer>

</body>
</html>