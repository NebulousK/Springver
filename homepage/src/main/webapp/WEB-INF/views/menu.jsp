<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<jsp:useBean id="dao" class="homepage.someDao" />
<jsp:useBean id="dto" class="homepage.someDao" />
<script>
    $(document).ready(function(){
        $(".menu>a").click(function(){
            var submenu = $(this).next("ul");
            // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
        }).mouseover(function(){
            $(this).next("ul").slideDown();
        });
    });
</script>
<style>
    .menu a{cursor:pointer;}
    .menu .hide{display:none;}
</style>
<%
	int callme = dao.are(Integer.parseInt(((String)session.getAttribute("no"))));
	boolean cc = dao.came(Integer.parseInt(((String)session.getAttribute("no"))));
	int news = dao.news((String) session.getAttribute("id"));
	int friend = dao.fiee((String) session.getAttribute("id"));
	int message = dao.getmessage2((String) session.getAttribute("id"));
	int img = callme + friend + news;
%>
<h3>Navigation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="logout" onclick='location.href="/homepage/logout.me"'/></h3>
<div style="background-color:#e0e0e0">
	<li class="menu">
		${sessionScope.id}님 환영합니다.
		<%if(img != 0){ %>
		<a><img src="/homepage/images/vv.png"/></a>
		<%} %>
			<ul class="hide">
			<%if(img != 0){
			if(cc){%>
				<li><a href="#">Dash에 성공 하셨어요!!<span class="count-number" style="color:red;background-color:pink"><img src="/homepage/images/heart2.png"/></span></a></li>
			<%}%>
				<li style="width:70px;height:20px;float: left;"><a href="/homepage/someNsome/main.jsp">Call me : <span class="count-number" style="color:red;background-color:pink"><%=callme %></span> </a></li>
				<li style="width:60px;height:20px;float: left;"><a href="/homepage/friendList/main.jsp">친구 : <span class="count-number" style="color:red;background-color:pink"><%=friend %></span></a></li>
				<li><a href="/homepage/mesageget.me" target="_blank" onclick="w=window.open(this.href, 'windowName', 'toolbar=no, scrollbars=yes, resizable=yes, width=500, height=600'); w.focus(); return false;">
				쪽지 : <span class="count-number" style="color:red;background-color:pink"><%=message %></span></a></li>
			</ul>
			<%} %>
	</li>
</div>
&nbsp;
<div class="aside-nav">
	<ul>
		<li><a href="/homepage/itsme.board">It's me</a></li>
		<li><a href="/homepage/main.board">뉴스 피드</a></li>
		<li><a href ="/homepage/List.friend">친구 목록</a></li>
		<li><a href ="/homepage/find.friend">친구 찾기</a></li> <!---->
		<li class="aside-submenu">
		<a>Some N Some<!-- <span class="count-number"> 3</span> --></a>
			<%if(dao.some_some(Integer.parseInt((String)session.getAttribute("no")))){ %>
			<ul>
				<li><a href="/homepage/luvstory.some">러브 스토리</a></li>
				<li><a href="/homepage/luvphoto.some">사진첩</a></li>
				<li><a href="/homepage/cel.me">달력</a></li>
			</ul>
			<%}else{ %>
			<ul>
				<li><a href="/homepage/dash.some">Dash</a></li>
				<li><a href="/homepage/call.some">call me</a></li>
			</ul>
			<%} %>
		</li>
	</ul>
</div>
