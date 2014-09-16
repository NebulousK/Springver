<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>::nebulousk님과 쪽지대화::</title>
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Pragma" content="no-cache" />
<script src="/homepage/js/common.js?tmp=20130828-20140617"></script>
<script src="/homepage/js/pong.js"></script>
<script src="/homepage/js/memoajax.js"></script>
<script type="text/javascript" src="/homepage/js/jquery-2.1.1.min.js"></script>
<link rel="stylesheet" href="/homepage/css/memo.css" media="all"/>
<script>
$(document).ready(function() {
	$('input').keyup(function(e){
    	if(e.keyCode == 13){
			document.getElementById("textttt").value = " ";
    	}
	});
});
</script>
</head>
<c:set var="id2" value="${requestScope.id2}" />
<body id="body" style="background-color:#E0F4F8;" onload="ajax_renew_loop()">
<div id="top_area" style="position:relative;">
<table width="98%" bgcolor="#E0F4F8" border="0" cellpadding="0" cellspacing="10" style="border:5px solid #4DB9D0;">
	<tr>
		<td width="140" align="center">
			<img src="/homepage/profile/${requestScope.g.photo}" width="140" height="115" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:1px solid #777;"></img>
		<a href="javascript:memo_deny();"><img src="/homepage/images/memo_deny.gif" width="80" height="22" align="absmiddle" title="쪽지차단"></a>
		</td>
		<td valign="top">
			<table border="0" cellpadding="0" cellspacing="5">
				<tr>
					<td align="right"></td>
					<td align="left" valign="center">
						<b><font color="blue"><span style="cursor:pointer;cursor:hand" onclick="pong2('nebulousk', 'ponnt1234');"><span class=hu_nick_txt>${id2}</span>
						<div id="ponnt1234" name="ponnt1234" style="position:absolute;visibility:visible;z-index:100;"></div></span></font></b>
					</td>
					<td align="left">
						<b><font color="#2D99B0">님과 쪽지대화</font></b>
					</td>
				</tr>
			</table>
			<br><img src="/homepage/images/arrow_right.gif" />남을 상처주지 않는 성숙한 쪽지 부탁 드립니다.
			<br><img src="/homepage/images/arrow_right.gif" />오래된 쪽지는 "쪽지 더보기"를 클릭해주세요.
			<br><img src="/homepage/images/arrow_right.gif" />종료시 [창닫기] 버튼을 눌러 창을 닫아 주세요.
			<br><img src="/homepage/images/arrow_right.gif" />신고는 쪽지옆 작은 신고버튼을 눌러 주세요. <img src="/homepage/images/memo_singo.gif" style="border:2px solid red">
	</td>
</tr>
</table>
</div>


<div id="main">
	<!-- 내용 부분 -->
	<!-- 내용 부분 끝 -->
</div>
<form id="renew" name="renew" method="post" action="/homepage/message/renew.jsp" target="hidden_frame1">
	<input type="hidden" name="id2" id="id2" value="${id2}">
</form>
<form id="end_form" name="end_form" method="get" action="memo_end.html" target="hidden_frame2">
	<input type="hidden" name="you_hex" value="6e6562756c6f75736b">
</form>

<form id="singo_form" name="singo_form" method="get" action="memo_singo.html" target="hidden_frame2">
	<input type="hidden" id="singo_number" name="number" value="">
</form>

<form id="del_form" name="del_form" method="post" action="/homepage/mesagedel.me" target="hidden_frame2">
	<input type="hidden" id="del_number" name="number" value="">
</form>

<form id="deny_form" name="deny_form" method="get" action="memo_deny.html" target="hidden_frame2">
	<input type="hidden" name="you_hex" value="6e6562756c6f75736b">
</form>

<iframe name="hidden_frame1" width="0" height="0" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=0 src=""></iframe> <!-- /homepage/message/renew.jsp?id2=${id2} -->
<iframe name="hidden_frame2" width="0" height="0" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=0 src=""></iframe>


<div id="input_area">
	<input type="radio" id="chat_type2" name="chat_type" value="" checked OnClick="change_chat();" > 
	<label for="chat_type2" style="cursor:pointer;">채팅형 입력창  (엔터키로 내용 바로 전송)</label>
	&nbsp;
	<input type="radio" id="chat_type1" name="chat_type" value="" OnClick="javascript:change_normal();"> <label for="chat_type1" style="cursor:pointer;"> 텍스트형 입력창 </label>
	<form id="form" name="form" method="post" action="/homepage/memseagesend.me" target="hidden_frame2" OnSubmit="return submit_check();" >
		<input type="hidden" name="dear" value="${id2}" AUTOCOMPLETE="off">
		<div id="input_text">
			<input type="text" id="textttt" class="input" name="content" style="ime-mode:active;" AUTOCOMPLETE="off" >
		</div>
		<div id="input_textarea" style="display:none;">
			<textarea id="textarea" class="input" name="content" rows="5" style="ime-mode:active;"></textarea>
		</div>
		<table width="99%" border="0" cellpadding="0" cellspacing="0">
			<tr height="7">
				<td></td>
			</tr>
			<tr>
				<td align="left">
					<a href="javascript:document.form.submit();"><img src="/homepage/images/memo_send.gif" width="80" height="22" title="쪽지전송"></a>
				</td>
				<td align="right">
					<a href="javascript:end_clean_check();"><img src="/homepage/images/memo_close_win.gif" width="68" height="22" title="창닫기"></a>
				</td>
			</tr>
		</table>

	</form>

	<div style="margin-top:10px;">
	※ <span style="font-size:11px;">[창닫기] 버튼을 누르지 않고 그냥 창을 닫으면 새쪽지가 왔을때 늦게 갱신됩니다.</span>
	</div>
</div>
<script>
	var conn_check = 0;
	function end_clean_check(){
		var obj1 = document.getElementById('text');
		var obj2 = document.getElementById('textarea');
		var clean_check = 0;

		if(obj1){
			if(obj1.value){
				clean_check=1;
			}
		}
		if(obj2){
			if(obj2.value){
				clean_check=1;
			}
		}
		if(clean_check == 1){
			if(confirm('작성중인 쪽지가 있을 수 있습니다. 창을 닫으시겠습니까?')){
				end_clean();
			}
		}else{
			end_clean();
		}
	}
	function confirm_del(){
		return confirm('쪽지를 삭제하시겠습니까?');
	}
	function confirm_singo(){
		return confirm('쪽지 신고시 해당 유저와의 대화와 귀하가 보낸 발송내역이 함께 신고됩니다.\n\n 쪽지를 신고하시겠습니까?');
	}
	function memo_deny(){
		if(confirm('[nebulousk]님의 쪽지를 차단하시겠습니까?')){
			document.getElementById('deny_form').submit();
		}
	}
	function more_view(min_number){
		document.getElementById('min_number').value = min_number;
		document.getElementById('renew').submit();

	}
	function end_clean(){
		document.getElementById('end_form').submit();
		window.close();
	}
	function singo(number){
		document.getElementById('singo_number').value = number;
		document.getElementById('singo_form').submit();
	}
	function memo_del(number){
		document.getElementById('del_number').value = number;
		document.getElementById('del_form').submit();
	}
	function move_mini(id) {
		var url = "http://mini.humoruniv.com/admin_set_fr_req.html?nick=" + id;
		aaa = window.open(url,'','left margin=0 top margin=0 width=897,height=657');
	}
	function go_bottom(){
		scrollTo(10,document.body.scrollHeight);
	}
	function submit_check(){
		if(document.getElementById('text').value == "" &&  document.getElementById('textarea').value == ""){
			return false;
		}else{
			return true;
		}
	}
	function ajax_renew_loop(){
		$("#main").load("/homepage/message/renew.jsp?id2=${id2} #cont");
		setTimeout("ajax_renew_loop();",3111);
	}
</script>

<script>
	var result = 0;
	var loop = 0;
	go_bottom();
	setTimeout("ajax_renew_loop();",4111);
</script>

<script>
	var chat_type = 2;
	var chat_opt = hu_getCookie('chat_opt_cook');

	function change_normal(){
		if(chat_type == 2){
			document.getElementById('input_textarea').style.display="inline-block";
			document.getElementById('textarea').value=document.getElementById('text').value;
			document.getElementById('text').value="";
			document.getElementById('input_text').style.display="none";
			document.getElementById('chat_type1').checked = true;
			chat_type = 1;
			go_bottom();
			hu_setCookie("chat_opt_cook","1",100);
		}
	}
	function change_chat(){
		if(chat_type == 1){
			document.getElementById('input_text').style.display="inline-block";
			document.getElementById('text').value=document.getElementById('textarea').value;
			document.getElementById('textarea').value="";
			document.getElementById('input_textarea').style.display="none";
			document.getElementById('chat_type2').checked = true;
			chat_type = 2;
			document.getElementById('input_text').focus();
			go_bottom();
			hu_setCookie("chat_opt_cook","2",100);
		}
	}
			if(chat_opt=="1"){
			change_normal();
		}
		if(chat_opt=="2"){
			change_chat();
		}
	</script>
</body>
</html>