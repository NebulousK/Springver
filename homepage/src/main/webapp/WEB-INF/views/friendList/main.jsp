<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width">
<title>Responsive Aside website template</title>
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
<script>
function go_addFriend(this_form){
	this_form.submit();
}
function goPOPUP2(id) { 
	 window.open('','target_name2','scrollbars=yes,toolbar=yes,resizable=yes,width=500,height=800');
	 formex2.action = "/homepage/memseage.me"; // 팝업화면을 호출할 페이지 또는 파일명 
 	 formex2.id.value = id;                      // form에서 넘겨주는 seq값 
	 formex2.target = "target_name2";             // window.open 에서 선언한 target name 
	 formex2.submit(); 
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
	<!-- ASIDE NAV AND CONTENT -->
	<div class="line">
		<div class="box  margin-bottom">
			<div class="margin">
				<!-- ASIDE NAV 2 -->
				<aside class="s-12 l-five">
					<jsp:include page="/menu.jsp"/>
				</aside>
				<!-- CONTENT -->
				<section class="s-12 l-7">
						<div class="move">
						<div class="row">
							<h3>요청된 친구목록</h3>
							<div class="span10" align="center">
								<table
									class="table table-bordered table-hover table-condensed table-striped">
									<tbody>
										<c:forEach var="dto" items="${requestScope.dto}">
										<form method="post" action="/homepage/ListAdd.friend">
											<input type="hidden" name="userid1" value="${sessionScope.id}"/> 
											<input type="hidden" name="userid2" value="${dto.id}"/> 
											 <tr>
												<td width="50" style="word-break: break-all">
												<img src="/homepage/profile/${dto.photo }" alt="그림이 없습니다." style="widht:40px;height:40px;margin-right:10px"/>
													<a href="/homepage/how.board?id=${dto.name}">${dto.name}</a></td>
													<td width="50" style="word-break: break-all">
													 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
													<h6>${dto.addr }</h6></td>
												 	<td width="50" style="word-break: break-all">
												 	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
												<input type="button" value="수락" onclick="go_addFriend(this.form)"/>&nbsp;&nbsp;<input type="button" value="취소"/>								
											</tr>
										</form>
										</c:forEach>
									</tbody>
								</table>
								<br />
								<hr />
							</div>
						</div>
					</div>			
					<div class="move">
						<div class="row">
							<h3>친구목록</h3>
							<div class="span10" align="center">
												
								<!-- 내 아이디 및 친구 아이디 -->				
								<table class="table table-bordered table-hover table-condensed table-striped">
									<tbody>		
									<c:forEach var="g" items="${requestScope.g}">
											<form method="post" action="/homepage/Listdel.friend">
											<c:if test="${!g.id.equals(sessionScope.id)}">
										 	<input type="hidden" name="myid" value="${sessionScope.id}"/>
										 	<input type="hidden" name="userid2" value="${g.id}"/>
												<tr>
												 <td width="50" style="word-break: break-all">
												<img src="/homepage/profile/${g.photo}" alt="그림이 없습니다." style="widht:40px;height:40px;margin-right:10px"/>
											 	<a href="/homepage/itsme/main2.jsp?id=${g.id}">${g.id}</a></td>	
											 <td width="50" style="word-break: break-all" align="right">
											 <input type="submit" value="친구삭제" /> 
												<input type="button" value="쪽지 보내기" onclick="goPOPUP2('${g.id}')"/></td>
										</tr> 
									</form>
									</c:if>
									<c:if test="${g.id.equals(sessionScope.id)}">	
									</c:if>
									</c:forEach>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<!-- ASIDE NAV 2 -->
				<aside class="s-12 l-five">
					<jsp:include page="/Friend.jsp"/>
				</aside>
			</div>
		</div>
	</div>
	<!-- FOOTER -->
	<footer class="box">
		<jsp:include page="/footer.html"/>
	</footer>
	<form name="formex2" id="formex2" method="post">
    <input type="hidden" name="id" id="id">
    </form>
<div id="popup_layer" style="position:absolute;border:double;top:0px;left:0px;width:100px;height:50px;z-index:1;visibility:hidden;background-color:white;"> 
</div>
</body>
</html>