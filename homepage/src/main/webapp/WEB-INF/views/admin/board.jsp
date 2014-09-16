<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/homepage/admin/common.js"></script>
<link rel="stylesheet" href="/homepage/admin/font.css"/>
<script type="text/javascript" src="/homepage/js/jquery-2.1.1.min.js"></script>
<script>
function searchff(){
	if(document.getElementById("text1").value == ""){
		alert("검색 내용을 입력하세요");
		return;
	}else{
	search.submit();
	}
}
function del(this_form){
	if(confirm("정말 삭제 하시겠습니까?")){
		this_form.submit();
		setTimeout("top.ref2()", 1000);
	}else{
		return false;
	}
}
<c:if test="${requestScope.g2 == null }">
$(document).ready(function() {
	var cnt = 10;
	//스크롤 이벤트 발생 시
	$(window).scroll(function() {
		var scrollHeight = $(window).scrollTop() + $(window).height();
		var documentHeight = $(document).height(); 
        if (scrollHeight == documentHeight) { 
		 			cnt++;
		 			$('div#lastPostsLoader').html('<img src="/homepage/images/cc.png">');
				$.get("/homepage/boardre.admin?num="+cnt,
						function(data){
							if (data != "") {$("div#start:last").after(data); }
							$('div#lastPostsLoader').empty();
			}); 
		 	} 
	});
});
</c:if>
</script>
</head>
<body bgcolor="white" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<center>
<br>
<script> document.write(menu());</script>
<table width="1400" border="0" cellspacing="0" cellpadding="0">
	<form name="search" id="search" method="post" action="/homepage/boardse.admin">
	<tr height="40">
		<td align="left"  width="150" valign="bottom">&nbsp 게시글수 : <font color="#FF0000">${fn:length(g)}건</font></td>
		<td align="right" width="550" valign="bottom">
			<select name="option">
				<option value="id" >회원ID</option>
				<option value="content" >내용</option>
				<option value="day" >작성일</option>
			</select> 
			<input type="text" name="text1" id="text1" size="10" value="">&nbsp
		</td>
		<td align="left" width="100" valign="bottom">
			<input type="button" value="검색" onclick="searchff()"> &nbsp;&nbsp;
			<input type="button" value="전체보기" onclick="javascript:location.href='/homepage/board.admin';">
		</td>
	</tr>
	<tr><td height="5"></td></tr>
</form></table>

<div style="width:100%;margin-left: 30px">
   <div style="float:left;background:#F2F2F2;width:8%;border:1px solid black;">작성자</div>
   <div style="float:left;background:#F2F2F2;width:70%;border:1px solid black;">내용</div>
   <div style="float:left;background:#F2F2F2;width:8%;border:1px solid black;">작성일</div>
   <div style="float:left;background:#F2F2F2;width:8%;border:1px solid black;">삭제</div>
</div>
	<c:if test="${requestScope.g2 != null }">
	<c:forEach var="dto" items="${requestScope.g2}">
	<div id="start" name="start" style="width:100%;margin-left: 30px;height: auto;float:left;">
    <form name="form1" method="post" target="dummy" action="/homepage/boarddel.admin">	   
     	<div class="style5">${dto.id}<input type="hidden" name="no" id="no" value="${dto.no}"/></div>
   		<div class="style6">${dto.content}</div>
   		<div class="style5">${dto.day}</div>
   		<div class="style5"><span style="position:relative; float:center; width:45px; height:18px; overflow:hidden; cursor:pointer; background-image:url('/homepage/images/b_delete1.gif');">
		<input type="button" onclick="del(this.form)" style='position：absolute; margin-left:-10px; width:50px; height:18px; filter:alpha(opacity=0); opacity:0; -moz-opacity:0; cursor:pointer;'></span></div>
    </form>  		
    </div>
    </c:forEach>
	</c:if>
	
	<c:if test="${requestScope.g2 == null }">
	<c:forEach var="dto" items="${requestScope.g}" begin="0" end="10" step="1">
	<div id="start" name="start" style="width:100%;margin-left: 30px;height: auto;float:left;">
    <form name="form1" method="post" target="dummy" action="/homepage/boarddel.admin">	   
     	<div class="style5">${dto.id}<input type="hidden" name="no" id="no" value="${dto.no}"/></div>
   		<div class="style6">${dto.content}</div>
   		<div class="style5">${dto.day}</div>
   		<div class="style5"><span style="position:relative; float:center; width:45px; height:18px; overflow:hidden; cursor:pointer; background-image:url('/homepage/images/b_delete1.gif');">
		<input type="button" onclick="del(this.form)" style='position：absolute; margin-left:-10px; width:50px; height:18px; filter:alpha(opacity=0); opacity:0; -moz-opacity:0; cursor:pointer;'></span></div>
    </form>  		
    </div>
	</c:forEach>
	</c:if>
<br/>
<%-- </center> --%>
<iframe src="" name="dummy" id="dummy" hidden=""></iframe>
</body>
</html>