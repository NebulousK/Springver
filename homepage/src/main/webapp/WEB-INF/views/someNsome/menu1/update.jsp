<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="dto" class="homepage.someDto"/>
<% 
	int no = Integer.parseInt((String)request.getParameter("no"));
	dto = dao.getsomeboard(no); 
%>
<form name="tx_editor_form10" id="tx_editor_form10" action="/homepage/updatesomeboard.some" method="post" accept-charset="utf-8">
	<div id="board_title">
	</div>
	<input type="hidden" name="num" value="<%=no%>">
	<div id='blnk2' style="height: 0px;">&nbsp;&nbsp;&nbsp;</div>
	<div id="tx_trex_container10" class="tx-editor-container">
		<div id="tx_sidebar10" class="tx-sidebar">
			<div class="tx-sidebar-boundary">
				<ul class="tx-bar tx-bar-left tx-nav-attach">
					<li class="tx-list">
						<div unselectable="on" id="tx_image10"
							class="tx-image tx-btn-trans">
							<a href="javascript:;" title="사진" class="tx-text">사진</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" id="tx_file10"
							class="tx-file tx-btn-trans">
							<a href="javascript:;" title="파일" class="tx-text">파일</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" id="tx_media10"
							class="tx-media tx-btn-trans">
							<a href="javascript:;" title="외부컨텐츠" class="tx-text">외부컨텐츠</a>
						</div>
					</li>
					<li class="tx-list tx-list-extra">
						<div unselectable="on" class="tx-btn-nlrbg tx-extra">
							<a href="javascript:;" class="tx-icon" title="버튼 더보기">버튼 더보기</a>
						</div>
						<ul class="tx-extra-menu tx-menu" style="left: -48px;"
							unselectable="on">
						</ul>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-right">
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-lrbg tx-fullscreen"
							id="tx_fullscreen10">
							<a href="javascript:;" class="tx-icon" title="넓게쓰기 (Ctrl+M)">넓게쓰기</a>
						</div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-right tx-nav-opt">
					<li class="tx-list">
						<div unselectable="on" class="tx-switchtoggle"
							id="tx_switchertoggle10">
							<a href="javascript:;" title="에디터 타입">에디터</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div id="tx_toolbar_basic10"
			class="tx-toolbar tx-toolbar-basic">
			<div class="tx-toolbar-boundary">
				<ul class="tx-bar tx-bar-left">
					<li class="tx-list">
						<div id="tx_fontfamily10" unselectable="on"
							class="tx-slt-70bg tx-fontfamily">
							<a href="javascript:;" title="글꼴">굴림</a>
						</div>
						<div id="tx_fontfamily_menu10"
							class="tx-fontfamily-menu tx-menu" unselectable="on"></div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left">
					<li class="tx-list">
						<div unselectable="on" class="tx-slt-42bg tx-fontsize"
							id="tx_fontsize10">
							<a href="javascript:;" title="글자크기">9pt</a>
						</div>
						<div id="tx_fontsize_menu10"
							class="tx-fontsize-menu tx-menu" unselectable="on"></div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left tx-group-font">

					<li class="tx-list">
						<div unselectable="on" class="tx-btn-lbg tx-bold"
							id="tx_bold10">
							<a href="javascript:;" class="tx-icon" title="굵게 (Ctrl+B)">굵게</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-bg tx-underline"
							id="tx_underline10">
							<a href="javascript:;" class="tx-icon" title="밑줄 (Ctrl+U)">밑줄</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-bg tx-italic"
							id="tx_italic10">
							<a href="javascript:;" class="tx-icon" title="기울임 (Ctrl+I)">기울임</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-bg tx-strike"
							id="tx_strike10">
							<a href="javascript:;" class="tx-icon" title="취소선 (Ctrl+D)">취소선</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-slt-tbg tx-forecolor"
							id="tx_forecolor10">
							<a href="javascript:;" class="tx-icon" title="글자색">글자색</a> <a
								href="javascript:;" class="tx-arrow" title="글자색 선택">글자색 선택</a>
						</div>
						<div id="tx_forecolor_menu10"
							class="tx-menu tx-forecolor-menu tx-colorpallete"
							unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-slt-brbg tx-backcolor"
							id="tx_backcolor10">
							<a href="javascript:;" class="tx-icon" title="글자 배경색">글자 배경색</a>
							<a href="javascript:;" class="tx-arrow" title="글자 배경색 선택">글자
								배경색 선택</a>
						</div>
						<div id="tx_backcolor_menu10"
							class="tx-menu tx-backcolor-menu tx-colorpallete"
							unselectable="on"></div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left tx-group-align">
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-lbg tx-alignleft"
							id="tx_alignleft10">
							<a href="javascript:;" class="tx-icon" title="왼쪽정렬 (Ctrl+,)">왼쪽정렬</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-bg tx-aligncenter"
							id="tx_aligncenter10">
							<a href="javascript:;" class="tx-icon" title="가운데정렬 (Ctrl+.)">가운데정렬</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-bg tx-alignright"
							id="tx_alignright10">
							<a href="javascript:;" class="tx-icon" title="오른쪽정렬 (Ctrl+/)">오른쪽정렬</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-rbg tx-alignfull"
							id="tx_alignfull10">
							<a href="javascript:;" class="tx-icon" title="양쪽정렬">양쪽정렬</a>
						</div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left tx-group-tab">
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-lbg 	tx-indent"
							id="tx_indent10">
							<a href="javascript:;" title="들여쓰기 (Tab)" class="tx-icon">들여쓰기</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-rbg 	tx-outdent"
							id="tx_outdent10">
							<a href="javascript:;" title="내어쓰기 (Shift+Tab)" class="tx-icon">내어쓰기</a>
						</div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left tx-group-list">
					<li class="tx-list">
						<div unselectable="on" class="tx-slt-31lbg tx-lineheight"
							id="tx_lineheight10">
							<a href="javascript:;" class="tx-icon" title="줄간격">줄간격</a> <a
								href="javascript:;" class="tx-arrow" title="줄간격">줄간격 선택</a>
						</div>
						<div id="tx_lineheight_menu10"
							class="tx-lineheight-menu tx-menu" unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-slt-31rbg tx-styledlist"
							id="tx_styledlist10">
							<a href="javascript:;" class="tx-icon" title="리스트">리스트</a> <a
								href="javascript:;" class="tx-arrow" title="리스트">리스트 선택</a>
						</div>
						<div id="tx_styledlist_menu10"
							class="tx-styledlist-menu tx-menu" unselectable="on"></div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left tx-group-etc">
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-lbg 	tx-emoticon"
							id="tx_emoticon10">
							<a href="javascript:;" class="tx-icon" title="이모티콘">이모티콘</a>
						</div>
						<div id="tx_emoticon_menu10"
							class="tx-emoticon-menu tx-menu" unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-bg 	tx-link"
							id="tx_link10">
							<a href="javascript:;" class="tx-icon" title="링크 (Ctrl+K)">링크</a>
						</div>
						<div id="tx_link_menu10" class="tx-link-menu tx-menu"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-bg 	tx-specialchar"
							id="tx_specialchar10">
							<a href="javascript:;" class="tx-icon" title="특수문자">특수문자</a>
						</div>
						<div id="tx_specialchar_menu10"
							class="tx-specialchar-menu tx-menu"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-bg 	tx-table"
							id="tx_table10">
							<a href="javascript:;" class="tx-icon" title="표만들기">표만들기</a>
						</div>
						<div id="tx_table_menu10" class="tx-table-menu tx-menu"
							unselectable="on">
							<div class="tx-menu-inner">
								<div class="tx-menu-preview"></div>
								<div class="tx-menu-rowcol"></div>
								<div class="tx-menu-deco"></div>
								<div class="tx-menu-enter"></div>
							</div>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-rbg tx-horizontalrule"
							id="tx_horizontalrule10">
							<a href="javascript:;" class="tx-icon" title="구분선">구분선</a>
						</div>
						<div id="tx_horizontalrule_menu10"
							class="tx-horizontalrule-menu tx-menu" unselectable="on"></div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left">
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-lbg 	tx-richtextbox"
							id="tx_richtextbox10">
							<a href="javascript:;" class="tx-icon" title="글상자">글상자</a>
						</div>
						<div id="tx_richtextbox_menu10"
							class="tx-richtextbox-menu tx-menu">
							<div class="tx-menu-header">
								<div class="tx-menu-preview-area">
									<div class="tx-menu-preview"></div>
								</div>
								<div class="tx-menu-switch">
									<div class="tx-menu-simple tx-selected">
										<a><span>간단 선택</span></a>
									</div>
									<div class="tx-menu-advanced">
										<a><span>직접 선택</span></a>
									</div>
								</div>
							</div>
							<div class="tx-menu-inner"></div>
							<div class="tx-menu-footer">
								<img class="tx-menu-confirm"
									src="/homepage/images/icon/editor/btn_confirm.gif?rv=1.0.1"
									alt="" /> <img class="tx-menu-cancel" hspace="3"
									src="/homepage/images/icon/editor/btn_cancel.gif?rv=1.0.1"
									alt="" />
							</div>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-bg 	tx-quote"
							id="tx_quote10">
							<a href="javascript:;" class="tx-icon" title="인용구 (Ctrl+Q)">인용구</a>
						</div>
						<div id="tx_quote_menu10" class="tx-quote-menu tx-menu"
							unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-bg 	tx-background"
							id="tx_background10">
							<a href="javascript:;" class="tx-icon" title="배경색">배경색</a>
						</div>
						<div id="tx_background_menu10"
							class="tx-menu tx-background-menu tx-colorpallete"
							unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-rbg 	tx-dictionary"
							id="tx_dictionary10">
							<a href="javascript:;" class="tx-icon" title="사전">사전</a>
						</div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left tx-group-undo">
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-lbg 	tx-undo"
							id="tx_undo10">
							<a href="javascript:;" class="tx-icon" title="실행취소 (Ctrl+Z)">실행취소</a>
						</div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="		 tx-btn-rbg 	tx-redo"
							id="tx_redo10">
							<a href="javascript:;" class="tx-icon" title="다시실행 (Ctrl+Y)">다시실행</a>
						</div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-right">
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-nlrbg tx-advanced"
							id="tx_advanced10">
							<a href="javascript:;" class="tx-icon" title="툴바 더보기">툴바 더보기</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 툴바 - 기본 끝 -->
		<!-- 툴바 - 더보기 시작 -->
		<div id="tx_toolbar_advanced10"
			class="tx-toolbar tx-toolbar-advanced">
			<div class="tx-toolbar-boundary">
				<ul class="tx-bar tx-bar-left">
					<li class="tx-list">
						<div class="tx-tableedit-title"></div>
					</li>
				</ul>

				<ul class="tx-bar tx-bar-left tx-group-align">
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-lbg tx-mergecells"
							id="tx_mergecells10">
							<a href="javascript:;" class="tx-icon2" title="병합">병합</a>
						</div>
						<div id="tx_mergecells_menu10"
							class="tx-mergecells-menu tx-menu" unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-bg tx-insertcells"
							id="tx_insertcells10">
							<a href="javascript:;" class="tx-icon2" title="삽입">삽입</a>
						</div>
						<div id="tx_insertcells_menu10"
							class="tx-insertcells-menu tx-menu" unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div unselectable="on" class="tx-btn-rbg tx-deletecells"
							id="tx_deletecells10">
							<a href="javascript:;" class="tx-icon2" title="삭제">삭제</a>
						</div>
						<div id="tx_deletecells_menu10"
							class="tx-deletecells-menu tx-menu" unselectable="on"></div>
					</li>
				</ul>

				<ul class="tx-bar tx-bar-left tx-group-align">
					<li class="tx-list">
						<div id="tx_cellslinepreview10" unselectable="on"
							class="tx-slt-70lbg tx-cellslinepreview">
							<a href="javascript:;" title="선 미리보기"></a>
						</div>
						<div id="tx_cellslinepreview_menu10"
							class="tx-cellslinepreview-menu tx-menu" unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div id="tx_cellslinecolor10" unselectable="on"
							class="tx-slt-tbg tx-cellslinecolor">
							<a href="javascript:;" class="tx-icon2" title="선색">선색</a>

							<div class="tx-colorpallete" unselectable="on"></div>
						</div>
						<div id="tx_cellslinecolor_menu10"
							class="tx-cellslinecolor-menu tx-menu tx-colorpallete"
							unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div id="tx_cellslineheight10" unselectable="on"
							class="tx-btn-bg tx-cellslineheight">
							<a href="javascript:;" class="tx-icon2" title="두께">두께</a>

						</div>
						<div id="tx_cellslineheight_menu10"
							class="tx-cellslineheight-menu tx-menu" unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div id="tx_cellslinestyle10" unselectable="on"
							class="tx-btn-bg tx-cellslinestyle">
							<a href="javascript:;" class="tx-icon2" title="스타일">스타일</a>
						</div>
						<div id="tx_cellslinestyle_menu10"
							class="tx-cellslinestyle-menu tx-menu" unselectable="on"></div>
					</li>
					<li class="tx-list">
						<div id="tx_cellsoutline10" unselectable="on"
							class="tx-btn-rbg tx-cellsoutline">
							<a href="javascript:;" class="tx-icon2" title="테두리">테두리</a>

						</div>
						<div id="tx_cellsoutline_menu10"
							class="tx-cellsoutline-menu tx-menu" unselectable="on"></div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left">
					<li class="tx-list">
						<div id="tx_tablebackcolor10" unselectable="on"
							class="tx-btn-lrbg tx-tablebackcolor"
							style="background-color: #9aa5ea;">
							<a href="javascript:;" class="tx-icon2" title="테이블 배경색">테이블
								배경색</a>
						</div>
						<div id="tx_tablebackcolor_menu10"
							class="tx-tablebackcolor-menu tx-menu tx-colorpallete"
							unselectable="on"></div>
					</li>
				</ul>
				<ul class="tx-bar tx-bar-left">
					<li class="tx-list">
						<div id="tx_tabletemplate10" unselectable="on"
							class="tx-btn-lrbg tx-tabletemplate">
							<a href="javascript:;" class="tx-icon2" title="테이블 서식">테이블 서식</a>
						</div>
						<div id="tx_tabletemplate_menu10"
							class="tx-tabletemplate-menu tx-menu tx-colorpallete"
							unselectable="on"></div>
					</li>
				</ul>

			</div>
		</div>
		<!-- 에디터 Start -->
		<div id="tx_canvas10" class="tx-canvas">
			<div id="tx_loading10" class="tx-loading">
				<div>
					<img src="/homepage/images/icon/editor/loading2.png" width="113" height="21" align="absmiddle" />
				</div>
			</div>
			<div id="tx_canvas_wysiwyg_holder10" class="tx-holder"
				style="display: block;">
				<iframe id="tx_canvas_wysiwyg10" name="tx_canvas_wysiwyg" allowtransparency="true" frameborder="0"></iframe>
			</div>
			<div class="tx-source-deco">
				<div id="tx_canvas_source_holder10" class="tx-holder">
					<textarea id="tx_canvas_source10" rows="30" cols="30"></textarea>
				</div>
			</div>
			<div id="tx_canvas_text_holder10" class="tx-holder">
				<textarea id="tx_canvas_text10" rows="30" cols="30"></textarea>
			</div>
		</div>
		<!-- 높이조절 Start -->
		<div id="tx_resizer10" class="tx-resize-bar">
			<div class="tx-resize-bar-bg"></div>
			<img id="tx_resize_holder10"
				src="/homepage/images/icon/editor/skin/01/btn_drag01.gif" width="58"
				height="12" unselectable="on" alt="" />
		</div>
		<div id="tx_attach_div10" class="tx-attach-div">
			<div id="tx_attach_txt10" class="tx-attach-txt">파일 첨부</div>
			<div id="tx_attach_box10" class="tx-attach-box">
				<div class="tx-attach-box-inner">
					<div id="tx_attach_preview10" class="tx-attach-preview">
						<p></p>
						<img src="/homepage/images/icon/editor/pn_preview.gif" width="147"
							height="108" unselectable="on" />
					</div>
					<div class="tx-attach-main">
						<div id="tx_upload_progress10" class="tx-upload-progress">
							<div>0%</div>
							<p>파일을 업로드하는 중입니다.</p>
						</div>
						<ul class="tx-attach-top">
							<li id="tx_attach_delete10" class="tx-attach-delete"><a>전체삭제</a></li>
							<li id="tx_attach_size10" class="tx-attach-size">파일:
								<span id="tx_attach_up_size10" class="tx-attach-size-up"></span>/<span
								id="tx_attach_max_size10"></span>
							</li>
							<li id="tx_attach_tools10" class="tx-attach-tools"></li>
						</ul>
						<ul id="tx_attach_list10" class="tx-attach-list"></ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 첨부박스 끝 -->
	</div>
	<!-- 에디터 컨테이너 끝 -->
</form>
<div id="board_right10" style="height: 30px">
	<div style="text-align: right; height: 15px">
		<input type="button" value="수정" class="_42ft _4jy0 _11b _4jy3 _4jy1 selected" onclick='saveContent(10)' />
		<mcjsjs>
		<input type="button" value="취소" class="_42ft _4jy0 _11b _4jy3 _4jy1 selected" id="updateCancel10" onclick="delup(<%=no %>)" /></mcjsjs>
	</div>
</div>

<textarea id="load_contents_source10" style="display: none;"><%=dto.getContent() %></textarea>

<script type="text/javascript">
							var config10 = {
								txHost : '', /* 런타임 시 리소스들을 로딩할 때 필요한 부분으로, 경로가 변경되면 이 부분 수정이 필요. ex) http://xxx.xxx.com */
								txPath : '', /* 런타임 시 리소스들을 로딩할 때 필요한 부분으로, 경로가 변경되면 이 부분 수정이 필요. ex) /xxx/xxx/ */
								txService : 'sample', /* 수정필요없음. */
								txProject : 'sample', /* 수정필요없음. 프로젝트가 여러개일 경우만 수정한다. */
								initializedId : "10", /* 대부분의 경우에 빈문자열 */
								wrapper : "tx_trex_container10", /* 에디터를 둘러싸고 있는 레이어 이름(에디터 컨테이너) */
								form : 'tx_editor_form10' + "", /* 등록하기 위한 Form 이름 */				
								txIconPath : "/homepage/images/icon/editor/", /*에디터에 사용되는 이미지 디렉터리, 필요에 따라 수정한다. */
								txDecoPath : "/homepage/images/deco/contents/", /*본문에 사용되는 이미지 디렉터리, 서비스에서 사용할 때는 완성된 컨텐츠로 배포되기 위해 절대경로로 수정한다. */
								canvas : {
									initHeight : 150, // 높이
									styles : {
										color : "#123456", /* 기본 글자색 */
										fontFamily : "굴림", /* 기본 글자체 */
										fontSize : "10pt", /* 기본 글자크기 */
										backgroundColor : "#fff", /*기본 배경색 */
										lineHeight : "1.5", /*기본 줄간격 */
										padding : "8px" /* 위지윅 영역의 여백 */
									},
									showGuideArea : false
								},
								events : {
									preventUnload : false
								},
								sidebar : {
									attacher: {
									    image: {
									           objattr: {
									        	   width: 450,
									        	   height : 450
									        	   }
									           }
									    },
									attachbox : {
										show : true
									}
								},
								size : {
									contentWidth : 580 /* 지정된 본문영역의 넓이가 있을 경우에 설정 */
								}
							};
							
							EditorJSLoader.ready(function(Editor) {
								 new Editor(config10);
								Editor.getCanvas().observeJob(Trex.Ev.__CANVAS_PANEL_DELETE_SOMETHING, function (ev) {
								    // 데이터중에 존재하지 stage에 존재하지 않는 entry는 박스에서 바로 제거
								    var attachBox = Editor.getAttachBox();
								    attachBox.datalist.each(function (entry) {
								        if (entry.type === "image"  && entry.existStage === false ) {
								            entry.execRemove();
								            enrty = null;
								        }
								    });
								    attachBox.refreshPreview();
								});   
								Editor.getToolbar().observeJob(Trex.Ev.__TOOL_CLICK, function (type) {
								    Editor.switchEditor("10");
								});
								Editor.modify({
									"content": document.getElementById("load_contents_source10") /* 내용 문자열, 주어진 필드(textarea) 엘리먼트 */
								});
							});	
						</script>
