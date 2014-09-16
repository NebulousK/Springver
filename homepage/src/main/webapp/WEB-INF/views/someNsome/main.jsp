<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
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
<link href="/homepage/css/bootstrap2.css" rel="stylesheet" type="text/css"/> 
<link href="/homepage/css/1.css" rel="stylesheet" type="text/css"/>
<script>
	function like(this_form,set) {
		if(set == 1){
			this_form.state.value = 1;
		}else{
			this_form.state.value = 2;
		}
		this_form.submit();
	}
</script>
</head>
<c:set var="g" value="${requestScope.g }"></c:set>
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
					<c:if test="${fn:length(g) > 0}">
						<c:forEach var="dto" items="${g}">
					<form action="/homepage/callup.some" method="post">
						<div align="center">
							<div style="width: 530px; text-align: left;">
								<div class="row">
									<input type="hidden" name="userID" id="userID" value="${dto.userID}"/>
									<input type="hidden" name="itemID" id="itemID" value="${dto.itemID}"/>
									<input type="hidden" name="state" id="state" value=""/>
									<h1>나에게 대쉬한 이성</h1>
									<p>&nbsp;</p>
									<div style="float: left;"> 
									<img src="/homepage/profile/${dto.photo}" style="max-width: 263px; max-height: 368px; width: auto; height: auto; text-align: center" />
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
									<div style="clear: both; height: 10px"></div>
									
									<div style="float: left;">
									<textarea name="coment" style="width: 500px; height: 150px; resize: none;" readonly="readonly">${dto.coment}</textarea>
									</div>
									<div style="clear: both;"></div>
								</div>
							</div>
						</div>
						<p>&nbsp;</p>
						<div align="center">
							<input type="button"style="width: 250px; height: 50px; font-size: 15pt; resize: none;" class="btn-custom" value="좋아!!!" onclick="like(this.form,1)"/> &nbsp;&nbsp; 
							<input type="button" style="width: 250px; height: 50px; font-size: 15pt; resize: none;" class="btn-custom" value="싫어!!!" onclick="like(this.form,2)" />
						</div>
					</form> 
					</c:forEach>
					</c:if>
					<c:if test="${fn:length(g) == 0}">
						<div align="center">
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
							<font size="5">온라인 상에서도 인기가 없네 하아....</font><br/><br/> 
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