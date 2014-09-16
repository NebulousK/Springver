<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/homepage/js/popup.js" type="text/javascript" charset="utf-8"></script>
<link rel="stylesheet" href="/homepage/css/popup.css" type="text/css"  charset="utf-8"/>
<jsp:useBean id="dao" class="homepage.board.BoardDao"/>
<jsp:useBean id="dto" class="homepage.board.BoardDto"/>
<%
	request.setCharacterEncoding("UTF-8");
	String action = null;
%>
<jsp:setProperty property="*" name="dto"/>
<%
	String file[] = new String[2]; 
	file = dao.up(request);
%>
<script type="text/javascript">
// <![CDATA[
	
	function done() {
		if (typeof(execAttach) == 'undefined') { //Virtual Function
	        return;
	    }
		
		var _mockdata = {
			'attachurl': '<%="/homepage/upload/" + file[0]%>',
			'filemime': '<%=file[2]%>',
			'filename': '<%=file[0]%>',
			'filesize': '<%=file[1]%>'
		};
		execAttach(_mockdata);
		closeWindow();
	}

	function initUploader(){
	    var _opener = PopupUtil.getOpener();
	    if (!_opener) {
	        alert('잘못된 경로로 접근하셨습니다.');
	        return;
	    }
	    
	    var _attacher = getAttacher('file', _opener);
	    registerAction(_attacher);
	}
	
</script>
</head>
<body onload="initUploader();">
<div class="wrapper">
	<div class="header">
		<h1>파일 첨부</h1>
	</div>	
	<div class="body">
		<dl class="alert">
		    <dt>파일 첨부 확인</dt>
		    <dd>
		    	확인을 누르시면 파일첨부가  됩니다.<br /> 
			</dd>
		</dl>
	</div>
	<div class="footer">
		<p><a href="#" onclick="closeWindow();" title="닫기" class="close">닫기</a></p>
		<ul>
			<li class="submit"><a href="#" onclick="done();" title="등록" class="btnlink">등록</a> </li>
			<li class="cancel"><a href="#" onclick="closeWindow();" title="취소" class="btnlink">취소</a></li>
		</ul>
	</div>
</div>
</body>
</html>