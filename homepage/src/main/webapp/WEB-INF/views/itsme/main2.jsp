<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
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
<link rel="stylesheet" href="/homepage/css/jaesung.css" type="text/css" charset="utf-8" />
<script src="/homepage/js/editor_loader2.js" type="text/javascript" charset="utf-8"></script>
<script src="/homepage/js/ajax1.js"></script>
<script>
//좋아요 ajax
function like(no, id, index){
	var params = "no="+ no +"&id="+id+"&action=/LIKE.board";
	$("#inlikeunlike"+index).remove();"<span id=inlikeunlike"+index+"></span>";
	$("#likeunlike"+index).append("<span id=inlikeunlike"+index+"><a href='javascript:unlike("+no+", \"${sessionScope.id}\", "+index+")' class='default_message' name='unlike' id='unlike'>좋아요 취소</a></span>");
	var cnt = $("#likecnt"+index).text() * 1 + 1;
	document.getElementById("likecnt"+index).innerHTML = cnt;
	sendRequest("/homepage/LIKE.board", params, callback, "GET");
}
//좋아요 취소 ajax
function unlike(no, id, index){
	var params = "no="+ no +"&id="+id+"&action=/UNLIKE.board";
	$("#inlikeunlike"+index).remove();
	$("#likeunlike"+index).append("<span id=inlikeunlike"+index+"><a href='javascript:like("+no+", \"${sessionScope.id}\", "+index+")' class='default_message' name='like' id='like'>좋아요</a></span>");
	var cnt = $("#likecnt"+index).text() * 1 - 1;
	document.getElementById("likecnt"+index).innerHTML = cnt;
	sendRequest("/homepage/UNLIKE.board", params, callback, "GET");
}
//좋아요 callback
function callback(){
	if(XMLreq.readyState == 4){
		if(XMLreq.status == 200){
			//alert(XMLreq.status);
		}
		else{
			alert(XMLreq.status);
		}
	}
}
//댓글 리스트 불러오기
function getreplylist(no, id, index){
	$("#replydiv"+index).load("/homepage/newsfeed/replyproc.jsp?no="+no+"&id="+id+"&index="+index);
}

//댓글 등록
function replypostJS(form){
	var no = form.no.value;
	var id = form.id.value;
	var index = form.index.value;
	form.submit();
	setTimeout("getreplylist("+no+"," +"'"+id+"',"+ index+")", 1000*0.2);
	
}

//댓글지우기
function replyDelete(Rno, id, index, Bno){
	if (confirm("정말 삭제하시겠습니까??") == true){ //확인
		
		document.Raction.no.value = Rno;
		document.Raction.submit();
		
		setTimeout("getreplylist("+Bno+"," +"'"+id+"',"+ index+")", 1000*0.2);
		
	}
	else{
		return;
	}
}


//글삭제 자바 스크립트
function Bdelete(no, index){
	if (confirm("정말 삭제하시겠습니까??") == true){    //확인
		
		var params = "no="+no+"&command=DELETE";
		$("#maindiv"+index).remove();
		sendRequest("/homepage/DELETE.board", params, callback, "GET");
	}else{   //취소
	    return;
	}
}

//글 수정 자바스크립트
function Bupdate(form, id, no){
	document.updatewindow.postbox1.value = form.postbox1.value;
	document.updatewindow.no.value = no;
	document.updatewindow.id.value = id;
	document.updatewindow.submit();
}

//댓글창 엔터시 row늘리기
function setLine( txa ){
       var line = 0;
       var new_line = txa.value.split( "\n" ).length + 1 -1;
       if( new_line < line ) new_line = line;
       txa.rows = new_line;
}
var cnt = 5;
function addup(num){
	$("div#sujung" + num).load("/homepage/itsme/update.jsp?no=" + num);
}

$(document).ready(function() {
	//스크롤 이벤트 발생 시
	$(window).scroll(function() {
		var scrollHeight = $(window).scrollTop() + $(window).height();
		var documentHeight = $(document).height(); 
        if (scrollHeight == documentHeight) { 
		 			cnt++;
		 			$('div#lastPostsLoader').html('<img src="/homepage/images/cc.png">');
				$.get("/homepage/re.board?num="+cnt,
						function(data){
							if (data != "") {$("div#start:last").after(data); }
							$('div#lastPostsLoader').empty();
			}); 
		 	} 
	});
});
</script>
</head>
<c:set var="dto" value="${requestScope.dto }"></c:set>
<%-- <body class="size-1140" onload="onload(<%=position%>)"> --%>
<body class="size-1140" onload="document.body.scrollTop=document.cookie" onunload="document.cookie=document.body.scrollTop">
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
						<div style="float: left;width: 280px;height: 290px;"> 
							<img src="/homepage/profile/${dto.photo}" style="max-width:270px;max-height:290px" align="middle" />
						</div>
						<div style="float: left;width: 280px;height: 290px;display:table-cell;vertical-align:middle;text-align:center;">
							
<p><table class="txc-table" width="280px" cellspacing="0" cellpadding="0" border="0" style="border:none;border-collapse:collapse;;font-family:굴림;font-size:13px"><tbody><tr><td style="width: 272px; height: 29px; border: 1px solid rgb(255, 255, 255);"><p style="text-align: center;"><span style="font-size: 14pt;">ID :&nbsp;</span></p></td>
<td style="width: 50%; height: 29px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); border-top-width: 1px; border-top-style: solid; border-top-color: rgb(255, 255, 255);"><p style="text-align: center;"><span style="font-size: 14pt;">${dto.id}</span></p></td>
</tr>
<tr><td style="width: 50%; height: 24px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); border-left-width: 1px; border-left-style: solid; border-left-color: rgb(255, 255, 255); background-color: rgb(255,255,255)"><p style="text-align: center;"><span style="font-size: 14pt;">이름 :</span></p></td>
<td style="width: 50%; height: 24px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); background-color: rgb(255,255,255)"><p style="text-align: center;"><span style="font-size:14pt;">${dto.name}</span></p></td>
</tr>
<tr><td style="width: 50%; height: 30px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); border-left-width: 1px; border-left-style: solid; border-left-color: rgb(255, 255, 255);"><p style="text-align: center;"><span style="font-size: 14pt;">나이 :</span></p></td>
<td style="width: 50%; height: 30px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255);"><p style="text-align: center;"><span style="font-size: 14pt;">${dto.age}</span></p></td>
</tr>
<tr><td style="width: 50%; height: 24px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); border-left-width: 1px; border-left-style: solid; border-left-color: rgb(255, 255, 255); background-color: rgb(255,255,255)"><p style="text-align: center;"><span style="font-size: 14pt;">생일 :</span></p></td>
<td style="width: 50%; height: 24px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); background-color: rgb(255,255,255)"><p style="text-align: center;"><span style="font-size: 14pt;">${dto.birthday.substring(5,7)}월 ${dto.birthday.substring(8)}일</span></p></td>
</tr>
<tr><td style="width: 50%; height: 24px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255); border-left-width: 1px; border-left-style: solid; border-left-color: rgb(255, 255, 255);"><p style="text-align: center;"><span style="font-size: 14pt;">Mail :</span></p></td>
<td style="width: 50%; height: 24px; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(255, 255, 255);"><p style="text-align: center;"><span style="font-size:14pt;">${dto.email}</span></p></td>
</tr>
</tbody></table></p>

						</div>
				<!--============================================================================= 글쓰기 시작 -->
				<div class="_4-u2 mbm" style="border: 0px;height:300px"></div>
<!-- ------------------------------------------------------------------글 쓰기 끝------------------------------------------------------------------------- -->
	<!-- ==================================================================내용 시작=========================================================================== -->
<!-- jstl DB연결 -->
<sql:setDataSource var="ds"
     url="jdbc:mysql://127.0.0.1:3306/sns?dbname?useUnicode=true&characterEncoding=utf8&&characterSetResults=utf8&autoReconnect=true"
     driver="com.mysql.jdbc.Driver"
     user="scott" password="tiger"/>

<!-- 리스트 반복문 시작 -->
<c:forEach var="list" varStatus="status" items="${boardlist}" begin="0" end="5" step="1">
	<div id="start" name="start">
	<div id="maindiv${status.index }">
		<div class="_4-u2 mbm _5jmm _5pat _5v3q _5sq8 _5x16" id="u_ps_0_0_m">
			<div class="userContentWrapper _5pcr _3ccb">
				<div class="_4r_y">
					<div class="_6a uiPopover _5pbi _5puc _5v56" id="u_ps_0_0_n">
						
					</div>
				</div>
				<div class="clearfix _5x46">
					<div class="_3dp _29k">
						<div>
							<div class="_6a">
								<div class="_6a _6b">
									<h5 class="_5pbw">
										<div class="fwn fcg">
							<table style="border: 0px;width: 554px">
								<tr>
									<td style="border: 0px;width: 55px; padding: 0px;margin: 0px;">
								<a class="_5pb8 _5v9u _29h _303" href="/homepage/itsme/main2.jsp?id=${list.id}">
									<!-- 프로필 이미지  -->
								<img class="_s0 _5xib _5sq7 _rw img" src="/homepage/profile/${list.photo}" alt="" align="middle" /></a>
									</td>
									<td style="border: 0px;text-align: left;">
										<span class="fwb fcg">
										<a href="/homepage/how.board?id=${list.id}" style="font-size: 14px;">${list.id}</a></span><br/>
										<div class="_5pcp" style="margin-top: 5px">
										<span>${list.day}</span>
										</div>
									</td>
							<!-- 수정 드롭다운 메뉴-->
									<td style="border: 0px;text-align: right;">
<!-- 수정권한있는지 여부 -->
<c:if test="${list.id.equals(sessionScope.id)}">
										<div class="dropdown">
  											<a class="dropdown-toggle" id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="/page.html">
    										<b class="caret"></b>
  											</a>
 											<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
												<li style="text-align: center;font-size: 12px;line-height: 25px;">
												<span id="updateclick${list.no}" onclick="addup(${list.no})">수&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정</span></li>
												<mcjsjs><input type="hidden" id="divNoCheck${status.index}" value="${status.index}"/></mcjsjs>
												<input type="hidden" id="boardId" value="${list.id}" />
												<input type="hidden" id="connectId" value="${sessionScope.id}>" />
												<li style="text-align: center;font-size: 12px;line-height: 25px">
												<span onclick="Bdelete(${list.no},${status.index})">삭&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제</span></li>
											</ul>
										</div>
</c:if>
									</td>
											</tr>
							</table>
										</div>
									</h5>
									<div class="_5pcp">
										<span>${list.day}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
<!-- 수정창 생성  -->		
<div id="sujung${list.no}" name="sujung${list.no}">

</div>
<!-- </form> --> 
<!-- =========================================================================끝 --> 
				
				
				<div class="_5pbx userContent">
					<p>${list.content}</p>
				</div>
				<div>
					<div>
					</div>
				</div>
					<div class="clearfix">
						<div class="_5pcp _5vsi lfloat _ohe">

<!-- 좋아요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  -->
<span id="likeunlike${status.index}">
<span id="inlikeunlike${status.index}">
<sql:query var="likeboard" dataSource="${ds}">
 select id from board_like where board_no=?
<sql:param value="${list.no}"/>
</sql:query>

<c:set var="doneLoop" value="false"/>
<c:set var="flag" value="0"/>

<!-- 좋아요 판별 flag변경  -->
<c:forEach var="like" items="${likeboard.rows}">
	<c:if test="${not doneLoop}"> 
		<c:choose>
			<c:when test="${like.id.equals(sessionScope.id)}">
				<c:set var="flag" value="1"/>
				<c:set var="doneLoop" value="true"/>
			</c:when>
			<c:otherwise>
				<c:set var="flag" value="0"/>
			</c:otherwise>
		</c:choose>
	</c:if>
</c:forEach>

<!-- flag이용한 좋아요 판별  -->
<c:if test="${1 == flag}">
	<a href="javascript:unlike(${list.no}, '${sessionScope.id}', ${status.index})" class="default_message" name="unlike" id="unlike${status.index}">좋아요 취소</a>
</c:if>
<c:if test="${0 == flag}">
	<a href="javascript:like(${list.no}, '${sessionScope.id}', ${status.index})" class="default_message" name="like" id="like${status.index}">좋아요</a>
</c:if>
</span>
</span>

							· <mcjsjs><span class="default_message" name="reply" id="replyshow${status.index}" style="cursor:pointer;" 
										onclick="getreplylist(${list.no}, '${sessionScope.id}', ${status.index})">
										댓글</span></mcjsjs>
							<mcjsjs><input type="hidden" id="divNoCheck${status.index}" value="${status.index}"/></mcjsjs>
							 · <a class="uiBlingBox feedbackBling">
							 <i class="img sp_p5WkkL41GeK sx_408c76"></i><span class="text" id="likecnt${status.index}">${list.like}</span>
							</a>
						</div>
					</div>
			</div>
<!-- 댓글 디자인  -->
<div id="replydiv${status.index}" style="background-color: #E6FFFF;">
		<!-- 댓글load부분  -->
</div>
					</div>
				</div>
<!--글 리스트div  -->		
	</div>
</c:forEach>

</div>
		
	<!-- 리스트 for문 끝 -->
<div id="lastPostsLoader"></div>

<%-- <div align="center"><span style="cursor: pointer;" onclick="moreboard(<%=numperpage+5%>)">..더보기</span></div> --%>

<!-- 댓글 아이프레임  -->
<iframe name="junsong" width="0" height="0" src=""></iframe>
<iframe name="sakje" width="0" height="0" src=""></iframe>

<!-- 댓글삭제 폼  -->
<form action="/homepage/REPLYDELETE.board" method="post" name="Raction" target="sakje">
	<input type="hidden" name="action" value="/REPLYDELETE.board" />
	<input type="hidden" name="no" />
</form>
<!-- 댓글삭제 폼 끝  -->


				</section>
<!-- -----------------------------=========================================================내용끝 ============================================== -->
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
<div id="popup_layer" style="position:absolute;border:double;top:0px;left:0px;width:100px;height:50px;z-index:1;visibility:hidden;background-color:white;"> 
</div>
</body>
</html>