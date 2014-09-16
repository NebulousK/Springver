<%@page import="homepage.someDao"%>
<%@page import="Group.GroupDao"%>
<%@page import="Group.GroupDto"%>
<%@page import="Member.FriendDto" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<jsp:useBean id="dao2" class="homepage.someDao" />
<jsp:useBean id="dao" class="Group.GroupDao"/>
<script>
$(document).on("click",function(e) { 
	if($(e.target).parents(".aside-nav").size() == 0) { 
		var layer = document.getElementById("popup_layer"); 
		layer.style.visibility="hidden"; 
		} 
	}); 

function getMousePosition(evt, currentObj, userID){
	var x, y;
	if(evt.pageX){
    	x = evt.pageX - currentObj.offsetLeft;
    	y = evt.pageY - currentObj.offsetTop;
	}
	else if (evt.clientX){
    	x = evt.clientX + document.body.scrollLeft - document.body.clientLeft - currentObj.offsetLeft;
    	y = evt.clientY + document.body.scrollTop - document.body.clientTop - currentObj.offsetTop;
	}
	if(document.body.parentElement && document.body.parentElement.clientLeft){
    	var b = document.body.parentElement;
    	x += b.scrollLeft - b.clientLeft;
    	y += b.scrollTop - b.clientTop;
	}
	var layer = document.getElementById("popup_layer"); 
	layer.innerHTML = "<a href='#' onclick=goPOPUP(\'"+ userID +"\')><img src='/homepage/images/messagesend.png'></a><a href='/homepage/how.board?id="+ userID +"'><img src='/homepage/images/viewmember.png'></a>";
	layer.style.left =  x + 70 + "px"; //레이어팝업의 좌측으로부터의 거리값을 마우스로 클릭한곳의 위치값으로 변경. 
	layer.style.top = y + 15 +"px"; //레이어팝업의 상단으로부터의 거리값을 마우스로 클릭한곳의 위치값으로 변경. 
	layer.style.visibility="visible";  
}

function goPOPUP(id) { 
 	 window.open('','target_name','scrollbars=yes,toolbar=yes,resizable=yes,width=500,height=800');
 	 formex.action = "/homepage/memseage.me"; // 팝업화면을 호출할 페이지 또는 파일명 
  	 formex.id.value = id;                      // form에서 넘겨주는 seq값 
 	 formex.target = "target_name";             // window.open 에서 선언한 target name 
 	 formex.submit(); 
} 
</script>
<%
	boolean check=false;
	//회원번호와 아이디 가상으로 설정()
	int num=Integer.parseInt((String)session.getAttribute("no"));
	String myid=(String) session.getAttribute("id");
	Vector fList=(Vector)dao.getFriends(myid);
%>
<div class="aside-nav">
 <TABLE width="115" border="0" cellspacing="1" cellpadding="1" height="1">
  <TR>
    <TD align="center" valign="center" height="0">친구목록<hr/></TD>
    <form name="formex" id="formex" method="post">
    <input type="hidden" name="id" id="id">
    </form>
  </TR>
  	<%	
  		for(int i=0;i<fList.size();i++){
  			FriendDto dto=(FriendDto)fList.get(i);	
  	%>
  			<TR> 
    			<TD align="center" valign="center" height="0"> 
    			<%if(dto.getUserid1().equals(myid)){%>
      			<b><P align="center"><span  onclick="getMousePosition(event, this,'<%=dto.getUserid2()%>' )" style="cursor:pointer"><%=dto.getUserid2()%></span>
      			<%if(dao2.news(dto.getUserid2()) != 0){ 
      				int cnt = dao2.news(dto.getUserid2());
      			%>
      			<span class="count-number" style="color:red;background-color:pink"> <%=cnt %></span></P></b>
      			<%}}else{%>
      			<b><P align="center"><span  onclick="getMousePosition(event, this, '<%=dto.getUserid1()%>' )" style="cursor:pointer"><%=dto.getUserid1()%></span>
      			<%if(dao2.news(dto.getUserid1()) != 0){ 
      				int cnt = dao2.news(dto.getUserid1());
      			%>
      			<span class="count-number" style="color:red;background-color:pink"> <%=cnt %></span></P></b>
      			<%}} %>
    			</TD>
  		  	</TR>
  	<% 
  		}
  	%>
  <TR>
   	<TD align="center"> 
  
    </TD>
  </TR>
 
</TABLE>
</div>




