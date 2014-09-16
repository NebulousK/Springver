<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
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
<link href='/homepage/someNsome/menu3/fullcalendar.css' rel='stylesheet' />
<link href='/homepage/someNsome/menu3/fullcalendar.print.css' rel='stylesheet' media='print' />
<script src='/homepage/someNsome/menu3/lib/moment.min.js'></script>
<script src='/homepage/someNsome/menu3/lib/jquery.min.js'></script>
<script src='/homepage/someNsome/menu3/lib/jquery-ui.custom.min.js'></script>
<script src='/homepage/someNsome/menu3/fullcalendar.min.js'></script>
<script src="/homepage/js/ajax.js"></script>
<script type="text/javascript">
	var xhr;
	function createXhr(){
    	if(window.ActiveXObject){   // IE 이전버전
        	xhr = new ActiveXObject("Microsoft.XMLHTTP");
    	}else{
        	xhr = new XMLHttpRequest();
    	}
	}
	function celin(id,title,start,end){
    	var queryString ="id="+id+"&title="+title+"&start="+start.toISOString()+"&end="+end.toISOString();
    	// 1. XMLHttpReqeust 객체 생성
        createXhr();
        // 2. 이벤트 핸들러 등록
        xhr.onreadystatechange = callback;  // callback 함수를 등록
        // 3. open()를 통해 요청관련 설정을 설정
        xhr.open("POST", "/homepage/celin.me", true);
        // 4. Header에 contentType 지정 - post
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // 5. send()를 통해 요청
        xhr.send(queryString);  // 요청 쿼리를 보내준다.
    }
	function celdel(no){
		var queryString ="no="+no;
    	// 1. XMLHttpReqeust 객체 생성
        createXhr();
        // 2. 이벤트 핸들러 등록
        xhr.onreadystatechange = callback;  // callback 함수를 등록
        // 3. open()를 통해 요청관련 설정을 설정
        xhr.open("POST", "/homepage/celdel.me", true);
        // 4. Header에 contentType 지정 - post
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // 5. send()를 통해 요청
        xhr.send(queryString);  // 요청 쿼리를 보내준다. 
    }
	function callback(){
	    if(xhr.readyState==4){      // 응답을 다 받은 경우
	        if(xhr.status == 200){  // 응답코드가 200인 경우 - 정상인 경우
	            var resTxt = xhr.responseText;  // 서버가 보낸 응답 text
	        }else{
	            alert("요청 처리가 정상적으로 되지 않았습니다.\n"+xhr.status);
	        }
	    }
	}
	
	  $(document).ready(function() {
		var calendar = $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: new Date(),
			eventClick: function(event, element) {
				var title = confirm("정말 삭제하시겠습니까??");
				if(title){
					 $('#calendar').fullCalendar('removeEvents',  event._id);
					 celdel(event._id);
				}else{
					event.title = prompt('Event Title:');
		        	$('#calendar').fullCalendar('updateEvent',  event);
				}
		    },
			selectable: true,
			selectHelper: true,
			select: function(start, end, allDay)
			{
				var title = prompt('Event Title:');
				if (title)
				{
					calendar.fullCalendar('renderEvent',
						{
							id: title,
							title: title,
							start: start,
							end: end,
							allDay: allDay
						},
						true // make the event "stick"
					);
					celin(title,title,start,end);
				}
				calendar.fullCalendar('unselect');
			},
			editable: true,
			events: []
		});
		<c:forEach var="dto" items="${requestScope.g}">
		calendar.fullCalendar('renderEvent',
				{
					id: '${dto.no}',
					title: '${dto.title}',
					start: '${dto.start}',
					end: '${dto.end}',
				},
				true // make the event "stick"
			);
		</c:forEach>
	});
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
				
				<!--FullCalendar container div-->
				<div id='calendar'></div>
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
<div id="popup_layer" style="position:absolute;border:double;top:0px;left:0px;width:100px;height:50px;z-index:1;visibility:hidden;background-color:white;"> 
</div>
</body>
</html>