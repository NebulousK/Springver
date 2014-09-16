<%@page import="homepage.board.ReplyDto"%>
<%@page import="java.util.Vector"%>
<%@page import="homepage.board.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	int no = Integer.parseInt(request.getParameter("no"));
	String id = request.getParameter("id");
	int index = Integer.parseInt(request.getParameter("index"));
	BoardDao Bdao = new BoardDao();
	Vector rlist = Bdao.getReplyList(no);
%>
<!-- 댓글쓰는 부분  -->
	<form method="post" action="/homepage/REPLYPOST.board" target="junsong">
			<input type="hidden" name="action" id="action" value="/REPLYPOST.board"> 
			<input type="hidden" name="no" id="reno" value="<%=no%>"/>
			<input type="hidden" name="id" id="reid" value="<%=id%>"/>
			<input type="hidden" name="index" id="reindex" value="<%=index %>"/>
				<hr/>
					<div class="_3dp _29k" ">
						<div>
							<div class="_6a">
								<div class="_6a _6b" style="margin-left: 7px" >
									<h5 class="_5pbw">
										<div class="fwn fcg">
										<span class="fwb fcg">
										<a href="#" style="font-size: 14px;"><%=id%></a>&nbsp;&nbsp;
										<textarea name="content" cols="" rows="1" class="DOMControl_placeholder uiTextareaAutogrow input autofocus mentionsTextarea textInput" onKeyDown="setLine(this)" style="width: 393px; resize:none;"></textarea>&nbsp;&nbsp;
										<button value="1" class="_42ft _4jy0 _11b _4jy3 _4jy1 selected" type="button" onclick="replypostJS(this.form)" id="replyPost">댓글</button>
										</span>
										<br/><br/>
										</div></h5>
										</div>
			</form>
<%
	for(int i = 0; i<rlist.size();i++){
		ReplyDto Rdto = (ReplyDto) rlist.get(i);
%>
		<div style="height: 50px;margin-left: 7px" >
								<a class="_5pb8 _5v9u _29h _303" href="https://www.facebook.com/jooj.kim?fref=nf">
					<!-- 프로필 이미지  -->
					<img class="_s0 _5xib _5sq7 _rw img" src="/homepage/profile/<%=Rdto.getPhoto() %>" alt="" align="middle" style="width: 40px;height: 40px" /></a>
										<span class="fwb fcg">
										<a href="/homepage/how.board?id=<%= Rdto.getId() %>" style="font-size: 14px;"><%= Rdto.getId() %></a>&nbsp;&nbsp;</span><span><%=Rdto.getContent() %></span>&nbsp;&nbsp;&nbsp;&nbsp;
<%
	//댓글 작성자 아이디 접속 아이디와 비교
	if(Rdto.getId().equals(id)){
%>
										<span onclick="replyDelete(<%=Rdto.getNo()%>, '<%=id %>', <%=index %>, <%=no %>)" style="cursor: pointer;">...삭제</span>
<%
	}
%>							
										<br/>
										<div class="_5pcp" style="margin-top: 5px">
										<span><%=Rdto.getRegist_day() %></span>
										</div>
									</h5>
									</div>
<%		
	}
%>
