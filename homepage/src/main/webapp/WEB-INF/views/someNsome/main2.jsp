<%@page import="java.net.URLEncoder"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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
<link href="/homepage/css/bootstrap2.css" rel="stylesheet" type="text/css" />
<link href="/homepage/css/1.css" rel="stylesheet" type="text/css" />
<link href="/homepage/css/rateit.css" rel="stylesheet" type="text/css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
<script src="/homepage/js/jquery.rateit.js" type="text/javascript"></script>
<script type="text/javascript">
	function test() {
		document.getElementById("value").value = $('#rateit').rateit('value');
		var text = $("#coment").val();
		var value = $("#value").val();
		if(value == 0 ){
			document.getElementById("i").innerHTML = "<font color='red'>대쉬를 하기위해서는 별점을 선택하셔야됩니다!!!</font>";
		} else if(text == ""){
			document.getElementById("coment").placeholder="멘트도 안날리고 대쉬 할 생각인가요????";
		}
		else{document.form222.submit();}
	}
</script>
</head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="dto" value="${requestScope.dto}"></c:set>
<c:set var="check" value="${requestScope.check}"></c:set>
<body>
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
	<!-- ASIDE NAV AND CONTENT -->
	<div class="line">
		<div class="box  margin-bottom">
			<div class="margin">
				<!-- ASIDE NAV 2 -->
				<aside class="s-12 l-five">
					<jsp:include page="/menu.jsp" />
				</aside>
				<!-- CONTENT -->
				<section class="s-12 l-7">
				<c:if test="${dto.name != null }">
					<form action="/homepage/dashup.some" name="form222" method="post" >
						<c:if test="${check[0] == 'no' }">
						<input type="hidden" name="action" value="dash" />
						</c:if>
						<c:if test="${check[0] != 'no' }">
						<input type="hidden" name="action" value="dashup" />
						</c:if>
						<input type="hidden" name="userID" value="${sessionScope.no}" />
						<input type="hidden" name="itemID" value="${dto.no}" />
						<div align="center">
							<div style="width: 530px; text-align: left;">
								<div class="row">
									<p style="color: red" align="right">*매일 정오업데이트 됩니다.*</p>
									<h1>오늘의 추천 이성</h1>
									<p>&nbsp;</p>
									<div style="float: left;width: 263px;height: 368px"> 
									<img src="/homepage/profile/${dto.photo }" style="max-width: 263px; max-height: 368px; width: auto; height: auto; text-align: center" />
									</div>
									<div style="float: left;width: 287px;height: 340px">
									
											<ol style="font-size: 13pt;">
												<li class="customLi">이름 : ${dto.name}</li>
												<li class="customLi">나이 : ${dto.age}</li>
												<li class="customLi">혈액형 : ${dto.blood}</li>
												<li class="customLi">키 : ${dto.height}</li>
												<li class="customLi">몸무게 : ${dto.weight}</li>
												<li class="customLi">지역 : ${dto.addr}</li>
												<li class="customLi">성격 : ${dto.style}</li>
												<li class="customLi">스타일 : ${dto.fashion}</li>
												<li class="customLi">취미 : ${dto.hobby}</li>
											</ol>
									</div> 
									<div style="float:left;text-align:left;width:287px">
										&nbsp;&nbsp;&nbsp;&nbsp;
										<div class="rateit" id="rateit"></div><span id="i">&nbsp;&nbsp;: 이상형과 얼마나 일치하나요?</span>
    									 <input type="hidden" name="value" id="value" value="" />
									</div>
									<div style="clear: both; height: 10px"></div>
									<div style="float: left;">
									<c:if test="${check[0] == 'no' }">
								    <textarea name="coment" id="coment" style="width: 500px; height: 150px; resize: none;" placeholder="작업멘트를 날려라"></textarea>
									</c:if>
									<c:if test="${check[0] != 'no' }">							
									<script>
									function test1(){
										 $('#rateit').rateit('value', ${check[1]});
									}
									window.onload=test1</script>
									<textarea name="coment" id="coment" style="width: 500px; height: 150px; resize: none;" >${check[0]}</textarea>
									</c:if>
									</div>
									<div style="clear: both;"></div>
								</div>
							</div>
						</div>
						<p>&nbsp;</p>
						<div align="center">
						<c:if test="${check[0] == 'no' }">
							<input type="button" style="width: 500px; height: 50px; font-size: 15pt;" class="btn-custom" value="대쉬!!!" onclick="test()"/>
						</c:if>
						<c:if test="${check[0] != 'no' }">
							<input type="button" style="width: 500px; height: 50px; font-size: 15pt;" class="btn-custom" value="대쉬 수정" onclick="test()"/>
						</c:if>
						</div>
					</form>
					</c:if>
					<c:if test="${dto.name == null }">
					 <div align="center">
							<div style="width: 530px; text-align: left;">
							</div>
						</div>
						<p>&nbsp;</p>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<div align="center">
							<font size="5">이상형 타입중 원하시는</font><br/><br/> 
							<font size="5">나이와 같거나 작은 이성이 없습니다.</font><br/><br/>
							<font size="5">나이 욕심을 버리세요</font> 
							<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						</div>
					</c:if>
				</section>
				<!-- ASIDE NAV 2 -->
				<aside class="s-12 l-five">
					<jsp:include page="/Friend.jsp" /> 
				</aside>
			</div>
		</div>
	</div>
	<!-- FOOTER -->
	<footer class="box">
		<jsp:include page="/footer.html" />
	</footer>
	<div id="popup_layer" style="position:absolute;border:double;top:0px;left:0px;width:100px;height:50px;z-index:1;visibility:hidden;background-color:white;"> 
</div>
</body>
</html>