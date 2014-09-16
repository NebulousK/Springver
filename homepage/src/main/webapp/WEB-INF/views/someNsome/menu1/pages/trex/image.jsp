<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="/homepage/js/popup.js" type="text/javascript" charset="utf-8"></script>
<link rel="stylesheet" href="/homepage/css/popup.css" type="text/css"  charset="utf-8"/>
<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="dto" class="homepage.someDto"/>
<%
	request.setCharacterEncoding("UTF-8");
	String action = null;
%>
<jsp:setProperty property="*" name="dto"/>
<%
	String file[] = new String[5]; 
	file = dao.up(request);
%>
<script type="text/javascript">
	function done(width, height) {
		if (typeof(execAttach) == 'undefined') { //Virtual Function
	        return;
	    }
		
		var _mockdata = {
				'imageurl': '<%="http://54.178.192.82/homepage/upload/" + file[0]%>',
				'filename': '<%="/homepage/upload/" + file[0]%>',
				'filesize': '<%=file[1]%>',
				'imagealign': 'C',
				'originalurl': '<%="/homepage/upload/" + file[0]%>',
				'thumburl': '<%="/homepage/upload/" + file[0]%>',
				'width' : <%=file[3]%>,
				'height' : <%=file[4]%>
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
	    
	    var _attacher = getAttacher('image', _opener);
	    registerAction(_attacher);
	}
</script>
</head>
<body onload="initUploader();">
<div class="wrapper">
	<div class="header">
		<h1>사진 첨부</h1>
	</div>	
	<div class="body">
		<dl class="alert">
		    <dt>사진 첨부 확인</dt>
		    <dd>
		    	확인을누루시면  사진첨부가 됩니다.<br /> 
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