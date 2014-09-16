<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
		setTimeout("top.ref()", 1000);
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
				$.get("/homepage/re.admin?num="+cnt,
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
<body bgcolor="white" text="black" link="blue" vlink="purple" alink="red" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<center>
<br>
<script> document.write(menu());</script>
<form name="search" id="search" method="post" action="memberse.admin">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr height="40">
		<td align="left"  width="400" valign="bottom">&nbsp 회원수 : <font color="#FF0000">${fn:length(g)}명</font></td>
		<td align="right">
		<select name="option">
				<option value="id" selected>ID검색</option>
				<option value="name" >이름으로</option>
		</select>
		<input type="text" name="text1" id="text1" size="10" value="">&nbsp</td>
		</td>
		<td align="left" width="150" valign="bottom">
			<input type="button" value="검색" onclick="searchff();">
			<input type="button" value="전체맴버보기" onclick="javascript:location.href='/homepage/member.admin';">
		</td>
</table>
</form>
<div style="width:100%;margin-left: 30px">
   <div style="float:left;background:#F2F2F2;width:5%;border:1px solid black;">no</div>
   <div style="float:left;background:#F2F2F2;width:10%;border:1px solid black;">ID</div>
   <div style="float:left;background:#F2F2F2;width:5%;border:1px solid black;">이름</div>
   <div style="float:left;background:#F2F2F2;width:5%;border:1px solid black;">성별</div>
   <div style="float:left;background:#F2F2F2;width:10%;border:1px solid black;">생년월일</div>
   <div style="float:left;background:#F2F2F2;width:13%;border:1px solid black;">E-mail</div>
   <div style="float:left;background:#F2F2F2;width:22%;border:1px solid black;">주소</div>
   <div style="float:left;background:#F2F2F2;width:10%;border:1px solid black;">전화번호</div>
   <div style="float:left;background:#F2F2F2;width:10%;border:1px solid black;">회원 사진</div>
   <div style="float:left;background:#F2F2F2;width:5%;border:1px solid black;">삭제</div>
</div>
   <c:if test="${requestScope.g2 != null }">
   <div id="start2" name="start2" style="width:100%;margin-left: 30px">
   <form id="form1" name="form1" method="post" target="dummy" action="/homepage/memberdel.admin">   
     	<div class="style1">${requestScope.g2.no}<input type="hidden" name="no" id="no" value="${requestScope.g2.no}"/></div>
   		<div class="style2">${requestScope.g2.id}</div>
   		<div class="style1">${requestScope.g2.name}</div>
   		<div class="style1">${requestScope.g2.sex}</div>
   		<div class="style2">${requestScope.g2.birthday}</div>
   		<div class="style3">${requestScope.g2.email}</div>
   		<div class="style4">${requestScope.g2.addr}</div>
   		<div class="style2">${requestScope.g2.tel }</div>
   		<div class="style2"><img alt="" src="/homepage/profile/${requestScope.g2.photo}" style="max-width:100px;height:100px;"></div>
   		<div class="style1"><span style="position:relative; float:center; width:45px; height:18px; overflow:hidden; cursor:pointer; background-image:url('/homepage/images/b_delete1.gif');">
		<input type="button" onclick="del(this.form)" style='position：absolute; margin-left:-10px; width:50px; height:18px; filter:alpha(opacity=0); opacity:0; -moz-opacity:0; cursor:pointer;'></span></div>
    </form>  		
    </div>
   </c:if>
   
   <c:if test="${requestScope.g2 == null }">
   <c:forEach var="dto" items="${requestScope.g}" begin="0" end="10" step="1">
   <div id="start" name="start" style="width:100%;margin-left: 30px">
   <form id="form1" name="form1" method="post" target="dummy" action="/homepage/memberdel.admin">   
     	<div class="style1">${dto.no}<input type="hidden" name="no" id="no" value="${dto.no}"/></div>
   		<div class="style2">${dto.id}</div>
   		<div class="style1">${dto.name}</div>
   		<div class="style1">${dto.sex}</div>
   		<div class="style2">${dto.birthday}</div>
   		<div class="style3">${dto.email}</div>
   		<div class="style4">${dto.addr}</div>
   		<div class="style2">${dto.tel }</div>
   		<div class="style2"><img alt="" src="/homepage/profile/${dto.photo}" style="max-width:100px;height:100px;"></div>
   		<div class="style1"><span style="position:relative; float:center; width:45px; height:18px; overflow:hidden; cursor:pointer; background-image:url('/homepage/images/b_delete1.gif');">
		<input type="button" onclick="del(this.form)" style='position：absolute; margin-left:-10px; width:50px; height:18px; filter:alpha(opacity=0); opacity:0; -moz-opacity:0; cursor:pointer;'></span></div>
    </form>  		
    </div>
	</c:forEach>
	</c:if>
<%-- </center> --%>
<iframe src="" name="dummy" id="dummy" hidden=""></iframe>
</body>
</html>