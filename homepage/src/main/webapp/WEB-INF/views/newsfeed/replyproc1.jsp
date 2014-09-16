<%@page import="homepage.board.ReplyDto"%>
<%@page import="java.util.Vector"%>
<%@page import="homepage.board.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	int no = Integer.parseInt(request.getParameter("no"));
	String id = request.getParameter("id");
	int index = Integer.parseInt(request.getParameter("index"));
	BoardDao Bdao = new BoardDao();
	Vector rlist = Bdao.getReplyList(no);
%>
<!-- 댓글쓰는 부분  -->
<form method="post" action="http://54.178.192.82/homepage/REPLYPOST.board" target="junsong">
	<input type="hidden" name="action" id="action" value="/REPLYPOST.board">
	<input type="hidden" name="no" id="reno" value="<%=no%>" /> <input
		type="hidden" name="id" id="reid" value="<%=id%>" /> <input
		type="hidden" name="index" id="reindex" value="<%=index %>" />
	<hr />

	<div>
		<div style="margin-left: 7px;">


			<span><a style="font-size: 14px;"><%=id%></a></span>&nbsp;&nbsp;
			<table width="100%" style="background-color: #E6FFFF; border: none;">
				<tr align="center">
					<td width="85%" style="height: 20px"><textarea name="content"
							cols="" rows="1" onKeyDown="setLine(this)"
							style="width: 100%; resize: none; vertical-align: middle;"></textarea>&nbsp;&nbsp;</td>
					<td width="15%" style="height: 20px"><button value="1"
							class="btn-custom" style="width: auto;" type="button"
							onclick="replypostJS(this.form)" id="replyPost">댓글</button></td>
				</tr>
			</table>

			<!-- 
										<textarea name="content" cols="" rows="1" class="DOMControl_placeholder uiTextareaAutogrow input autofocus mentionsTextarea textInput" onKeyDown="setLine(this)" style="width: 100%; resize:none;"></textarea>&nbsp;&nbsp;
										<button value="1" class="_42ft _4jy0 _11b _4jy3 _4jy1 selected" type="button" onclick="replypostJS(this.form)" id="replyPost">댓글</button>
										 -->
			<br />
		</div>
	</div>
</form>
<%
	for(int i = 0; i<rlist.size();i++){
		ReplyDto Rdto = (ReplyDto) rlist.get(i);
%>
<!-- 	<div style="height: 50px;margin-left: 7px" > -->
<table>
	<!-- 프로필 이미지  -->
	<tr>
		<td rowspan="2"><img
			src="http://54.178.192.82/homepage/profile/<%=Rdto.getPhoto() %>" alt="" align="middle"
			style="width: 40px; height: 40px;margin-right: 10px" /></td>
		<td><a href="http://54.178.192.82/homepage/how.board?id=<%= Rdto.getId() %>"
			style="font-size: 14px;"><%= Rdto.getId() %></a>&nbsp;&nbsp;</td>
		<td><span><%=Rdto.getContent() %></span>&nbsp;&nbsp;&nbsp;&nbsp;
		</td>
		<%
	//댓글 작성자 아이디 접속 아이디와 비교
	if(Rdto.getId().equals(id)){
%>
		<td><span
			onclick="replyDelete(<%=Rdto.getNo()%>, '<%=id %>', <%=index %>, <%=no %>)"
			style="cursor: pointer;">...삭제</span></td>
		<%
	}
%>
	</tr>
	<td colspan="4"><span style="font-size: x-small;"><%=Rdto.getRegist_day() %></span></td>
</table>

<!-- 		</div> -->
<%		
	}
%>
