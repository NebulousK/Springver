<%@page import="java.util.Date"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.ArrayList"%>
<%@page import="homepage.someDto"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="dto" class="homepage.someDto"/>
<body>
<%
	SimpleDateFormat mSimpleDateFormat = new SimpleDateFormat ( "yyyy.MM.dd", Locale.KOREA );
	Date currentTime = new Date ( );
	String mTime = mSimpleDateFormat.format ( currentTime );
%>
<div id="cont" name="cont">
<div id="date_area">
		<%=mTime%> <!-- 2014년 6월 17일 (화요일) -->
	</div>
	<%
		ArrayList g = new ArrayList();
		String id2 = request.getParameter("id2");
		g = dao.getmessage((String)session.getAttribute("id"), id2);
		if(g.size()>0){
			for(int i=0; i<g.size(); i++){
				dto = (someDto)g.get(i);
				if(dto.getSender().equals((String)session.getAttribute("id"))){
	%>
	<div id="memo_area" class="me">
		<div class="nick_area">
			<table border="0" cellpadding="5" cellspacing="0">
				<tr>
					<td align="right"><img class='hu_icon' src="/homepage/profile/<%=dto.getPhoto() %>" width="25" height="25" style='width:25px;height:25px;' /></td>
					<td width="5"></td>
					<td align="left" valign="center">
											<%=session.getAttribute("id") %>
											<br>
						<span class="date">
							<%=dto.getDay() %>
						</span>
					</td>
				</tr>
			</table>
		</div>
					<div class="tri"> </div>
				<span class="memotext">
							<%=dto.getContent() %>
					</span>
		<span class="singo">
			<a href="javascript:memo_del('<%=dto.getNo() %>');" onclick="return confirm_del();"><img src="/homepage/images/memo_del.gif" title="쪽지삭제" width="11" height="11" ></a>
				</span>
	</div>
	<% 				
				}
				if(dto.getSender().equals(id2)){
	%>
	<div id="memo_area" class="you">
		<div class="nick_area">
			<table border="0" cellpadding="5" cellspacing="0">
				<tr>
					<td align="right"><img class='hu_icon' src="/homepage/profile/<%=dto.getPhoto() %>" width="25" height="25" style='width:25px;height:25px;' /></td>
					<td width="5"></td>
					<td align="left" valign="center">
											<%=id2 %>
											<br>
						<span class="date">
							<%=dto.getDay() %>
						</span>
					</td>
				</tr>
			</table>
		</div>
					<div class="tri"> </div>
				<span class="memotext">
							<%=dto.getContent() %>
					</span>
		<span class="singo">
			<a href="javascript:memo_del('<%=dto.getNo() %>');" onclick="return confirm_del();"><img src="/homepage/images/memo_del_gray.gif" title="쪽지삭제" width="11" height="11" ></a>
					<br>
			<a href="javascript:singo('<%=dto.getNo() %>');" onclick="return confirm_singo();"><img src="/homepage/images/memo_singo.gif" title="쪽지신고" width="11" height="11" ></a>
			</span>
	</div>		
	<%				
				}
			}
		}
	%>
</div>
</body>
</html>