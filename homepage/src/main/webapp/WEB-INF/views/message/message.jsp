<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/homepage/css/mess.css" rel="stylesheet" type="text/css" />
<link href="/homepage/css/meme.css" rel="stylesheet" type="text/css" />
<script src="/homepage/js/default.js"></script>
<script src="/homepage/js/jquery-2.1.1.min.js"></script>
<script src="/homepage/js/jquery.tools.min.js"></script>
<script src="/homepage/js/path.js"></script>
</head>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<body id="note_bg">
	<!-- div -->
	<div align="center">
		<!-- contents_section01 -->
		<div id="contents_section01">
			<!--note_title-->
			<div id="note_tile">
				<p class="note_title">
					<a href="/zboard/member_memo.php">
					<img src="/homepage/images/title_03.gif" width="98px" height="23px" /></a>
				</p>
				<p class="text_title">
					받은쪽지함&nbsp;<font style="font-weight: bold; color: #F00;">0</font> /
					<font style="color: #536FE5;">3</font>
				</p>
			</div>
			<div class="note_section01">
				<div class="tab">
					<ul class="tabs">
						<li class="tabMenu1"><a href="/zboard/member_memo.php"class="current"><span>받은쪽지 
							<font style="font-weight: bold; color: #F00;">0</font></span></a></li>
						<li class="tabMenu2"><a href="/zboard/member_memo.php?memo_type=sent"><span>보낸쪽지</span></a></li>
					</ul>
					<div id="text_info">
						<div class="panes">
							<div class="tabCon">
								<div class="table_accordion01">
									<table summary="">
										<colgroup>
											<col width="20px" />
											<col width="320px;" />
											<col width="120px" />
											<col width="34px" />
											<col width="34px" />
										</colgroup>
										<thead>
											<tr>
												<th scope="col">
												<input type="checkbox" onClick="reverse();" /></th>
												<th scope="col" class="sub_title">제목</th>
												<th scope="col" class="sub_title">보낸사람</th>
												<th scope="col" class="sub_title">날짜</th>
												<th scope="col" class="sub_title">확인</th>
											</tr>
										</thead>
										<form name="memolist" id="memolist" method="post" action="/zboard/member_memo.php">
											<input type="hidden" name="exec" value="del_all" /> 
											<input type="hidden" name="memo_type" value="inbox" /> 
											<input type="hidden" name="search_type" value="" /> 
											<input type="hidden" name="keyword" value="" /> 
											<input type="hidden" name="page" value="1" /> 
											<input type="hidden" name="slave" value="" /> 
											<input type="hidden" name="move_no" value="" />
											<tbody>
											<c:if test="${fn:length(g) > 0}">
											<c:forEach var="dto" items="${requestScope.g}">
												<tr class="list_line">
													<td><input type="checkbox" name=del[] value="43631469" /></td>
													<td class="note_info" title="네~^^">
														<p class="note_old">
															<a href="/homepage/memseage.me?id=${dto.sender}" class="btn_show">
															<div style="width:200px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">
															${dto.content}	
															</div>
															</a>
														</p>
													</td>
													<td class="user_old">
													<a href="/zboard/member_memo.php?search_type=name&memo_type=inbox&keyword=%BA%B0%B5%B9%C0%CC">
															<img src="/homepage/images/note_search_icon.gif" width="8px" height="8px" />
													</a> 
													<a href="javascript:void(window.open('/zboard/view_info2.php?member_no=6574','view_info','width=400,height=510,toolbar=no,scrollbars=yes'))">
													${dto.sender}
													</a>
													<td class="date" width="60px">${dto.day.substring(5)}</td>
													<td class="user_old" width="39px">${dto.state }</td>
												</tr>
												<tr>
													<td colspan="4" class="board-line"></td>
												</tr>
											</c:forEach>
											</c:if>
											</tbody>
									</table>
								</div>
								<!-- //table_accordion -->
								</form>
								<div class="note_msg">
									<div class="btns">
										<a href="#" onClick="move_save(); return false;" class="btn_keep"> 
										<span><img src="/homepage/images/keep_icon.gif" alt="보관" /></span></a> 
										<a href="javascript:doDeleteMemo();" class="btn_keep"> <span>
											<img src="/homepage/images/delete_icon.gif" alt="삭제" /></span></a>
									</div>
									<!--page-->
									<div id="page_list">
										<font class="han"> <font class="page_inert">1</font>
										</font>
									</div>
									<!--//page-->
								</div>
								<!-- search_box -->
								<div class="search_box01">
									<form method="get" name="search" action="/zboard/member_memo.php">
										<input type="hidden" name="memo_type" value="inbox" />
										<table border=0 cellspacing=0 cellpadding=0>
											<tr>
												<td style="width: 150px; text-align: right;"><nobr>
														<select name="search_type" style="height: 21px;">
															<option value="sub_memo">제목+본문</option>
															<option value="subject">제목만</option>
															<option value="name">이름으로</option>
														</select>
													</nobr></td>
												<td style="width: 110px; text-align: right;">
												<input type=text name=keyword value="" size=15 class='input'></td>
												<td style="width: 20px; text-align: right;">
												<input type=image src="/homepage/images/btn_search_new.gif" onFocus="blur()"></td>
												<td style="width: 5px;">&nbsp;</td>
											</tr>
										</table>
									</form>
								</div>
								<!-- search_box -->
							</div>
							<!-- //tabCon -->
							<!--//받은 쪽지-->
						</div>
						<!-- panes -->
					</div>
					<!-- text_info -->
				</div>
				<!-- //tab -->
			</div>
			<!-- //note_section -->
		</div>
		<!-- contents_section01 -->
	</div>
	<!--div-->
</body>
</html>