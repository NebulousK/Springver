
//document.zb_get_table_width.height = 0;
//document.zb_target_resize[0].height = 0;

browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
var isIE = (browserName.match('Microsoft')) ? 1: 0;

function dq_OnOff(name,dir) {
	sn_on=new Image;
	sn_off=new Image;
	sn_on.src= dir+"name_on.gif";
	sn_off.src= dir+"name_off.gif";

	ss_on=new Image;
	ss_off=new Image;
	ss_on.src= dir+"subject_on.gif";
	ss_off.src= dir+"subject_off.gif";

	sc_on=new Image;
	sc_off=new Image;
	sc_on.src= dir+"content_on.gif";
	sc_off.src= dir+"content_off.gif";

	document.search[name].value='on';
	ImgSrc=eval(name+"_on.src");
	document[name].src=ImgSrc;
	if( name == 'sn' ){ 
			if( document.search['ss'].value == 'on' ){
					document.search['ss'].value='off';
					ImgSrc=eval("ss_off.src");
					document['ss'].src=ImgSrc;
			}
			document.search['sc'].value='off';
			ImgSrc=eval("sc_off.src");
			document['sc'].src=ImgSrc;
	} else if( name == 'ss' ){ 
			document.search['sn'].value='off';
			ImgSrc=eval("sn_off.src");
			document['sn'].src=ImgSrc;
			document.search['sc'].value='off';
			ImgSrc=eval("sc_off.src");
			document['sc'].src=ImgSrc;
	} else if( name == 'sc' ){ 
			if( document.search['ss'].value == 'on' ){
					document.search['ss'].value='off';
					ImgSrc=eval("ss_off.src");
					document['ss'].src=ImgSrc;
			}
			document.search['sn'].value='off';
			ImgSrc=eval("sn_off.src");
			document['sn'].src=ImgSrc;
	}

}

function dq_OnOff2(name,dir) {
	sn_on=new Image;
	sn_off=new Image;
	sn_on.src= dir+"name_on.gif";
	sn_off.src= dir+"name_off.gif";

	ss_on=new Image;
	ss_off=new Image;
	ss_on.src= dir+"subject_on.gif";
	ss_off.src= dir+"subject_off.gif";

	document.search[name].value='on';
	ImgSrc=eval(name+"_on.src");
	document[name].src=ImgSrc;
	if( name == 'sn' ){ 
			if( document.search['ss'].value == 'on' ){
					document.search['ss'].value='off';
					ImgSrc=eval("ss_off.src");
					document['ss'].src=ImgSrc;
			}
	} else if( name == 'ss' ){ 
			document.search['sn'].value='off';
			ImgSrc=eval("sn_off.src");
			document['sn'].src=ImgSrc;
	}

}

function copyrightAlert() {
  if(copyrightAlertMsg) alert(copyrightAlertMsg); 
  return false;
}

function playMultimediaFile(sUri,obj)
{
	var nPlayState = obj.getAttribute("isPlaying");
	if (nPlayState==0)
	{
		el = obj.previousSibling;
		while (el.tagName!="A")
			el = el.previousSibling;

		var oMedia = document.createElement("EMBED");
		oMedia.style.display = "block";
		oMedia.src = sUri;
		oMedia.autostart = true;
		obj.parentNode.appendChild(oMedia);

		obj.setAttribute("isPlaying",1);
	}
	else
	{
		alert("이미 재생중입니다");
		return;
	}
}

function comment_edit(event,cid,c_no,pos) {
	var width = revolution_main_table.offsetWidth - 130;
	var height= 140;
	var left  = event.clientX - width - 30;
	var top   = event.clientY - 82 + document.body.scrollTop;
	var memo = cid.innerHTML;

	if(document.getElementById("cedit_layer"+c_no)) {
		document.getElementById("cedit_layer"+c_no).style.visibility='visible';
		return true;
	}

	memo = memo.replace(/<BR>+/g,"\n");
	memo = memo.replace(/<br>+/g,"");


	if(str_saveComment.match('.gif')) var saveCommentBt = "<input type=image src='"+str_saveComment+"' name='reply_vote' accesskey='s'>";
	else var saveCommentBt = "<input type=submit rows=5 class=submit_c  name='reply_vote' value='"+str_saveComment+"' style='height:28;width:80'>";

	var text = "<form method=post name=c_write action=vote_ex.php>"
	+"<div id='cedit_layer"+c_no+"' style='position:absolute; visibility:visible; width:"+width+"px; z-index:1; left:"+left+"px; top:"+top+"px'>"
	+"<table border=0 width='100%' cellspacing=0 cellpadding=1 class=ce_bg><tr><td style='padding:1px'>"
	+"<table border=0 width='100%' cellspacing=0 cellpadding=0>"
	+"<input type=hidden name=c_no value="+c_no+"><input type=hidden name=ment_type value='edit'><input type=hidden name=page value="+page+"><input type=hidden name=id value="+id+"><input type=hidden name=no value="+no+"><input type=hidden name=select_arrange value="+select_arrange+"><input type=hidden name=desc value="+desc+"><input type=hidden name=page_num value="+page_num+"><input type=hidden name=keyword value="+keyword+"><input type=hidden name=category value="+category+"><input type=hidden name=sn value="+sn+"><input type=hidden name=ss value="+ss+"><input type=hidden name=sc value="+sc+"><input type=hidden name=su value="+su+"><input type=hidden name=url value="+url+">"
	+"<tr><td style='padding:3 3 3 40;' height=30>"
	+"<b>짧은답글 수정</b></td>"
	+"<td align=right style='padding-right:20'><span style='cursor:pointer' onClick='cedit_layer"+c_no+".style.visibility=\"hidden\"'>[닫기]</span></td></tr><tr><td valign=top colspan=2><table border=0 cellspacing=0 cellpadding=0 width=100%><tr>"
	+"<td valign=top style='padding:8 0 0 0' width=30 align=right><font class=bt onclick='document.c_write.memo.rows=6;document.c_write.memo.focus();' style='cursor:pointer;padding-top:3px;' title='원래크기'>■</font><br><font class=bt onclick='document.c_write.memo.rows=document.c_write.memo.rows+4;document.c_write.memo.focus();' style='cursor:pointer;padding-top:3px;' title='크기 늘리기'>▼</font></td>"
	+"<td align=left valign=top style='padding: 0 15 5 10'>"
	+"<textarea name=memo cols=20 rows=6 class=textarea style=width:100%>"+memo+"</textarea></td></tr>"
	+"<tr><td colspan=2 align=right style='padding:5 20 10 0'>"+saveCommentBt+"</td></tr>"
	+"</table></td></tr></form></table></td></tr></table></div>";

	document.getElementById('ctop').innerHTML = text;
	document.c_write.memo.focus();

	window.scrollTo(0,pos);
}

var tmpImg = new Image();
function imageResize(obj,id2) {

	if(!obj.id) obj = getElementById(obj);
	if(!obj.reCount) obj.reCount = 0;
/** http://www.ppomppu.co.kr/zboard/view.php?id=freeboard&no=342932
	if(obj && !obj.width && !obj.complate && obj.reCount < 10) {
		obj.setAttribute('reCount',obj.reCount + 1);
		window.setTimeout("imageResize("+obj.id+")",300);
		return;
	}
**/

	var tmpImg = new Image();
	tmpImg.src = obj.src;

	var b_width = '';
	if(id2=='market_talent'){
		b_width = 770;
	}else{
		b_width = 900;
	}
	
	if(!obj.width || obj.width <= 2) {
		obj.width  = (tmpImg.width > b_width)? b_width : tmpImg.width;
		obj.height = (tmpImg.width > b_width)? tmpImg.height*b_width/tmpImg.width : tmpImg.height;
		//obj.width  = (tmpImg.width > pic_overLimit1)? pic_overLimit2 : tmpImg.width;
		//obj.height = (tmpImg.width > pic_overLimit1)? tmpImg.height*pic_overLimit2/tmpImg.width : tmpImg.height;
	}
	//if(!obj.width) alert(obj.clientWidth);
	if(tmpImg.width > obj.width) obj.style.cursor = 'pointer';
}

function imageResize_width(obj, max_width) {
	if(!obj.id) obj = getElementById(obj);
	if(!obj.reCount) obj.reCount = 0;
/** http://www.ppomppu.co.kr/zboard/view.php?id=freeboard&no=342932
	if(obj && !obj.width && !obj.complate && obj.reCount < 10) {
		obj.setAttribute('reCount',obj.reCount + 1);
		window.setTimeout("imageResize("+obj.id+")",300);
		return;
	}
**/
	var tmpImg = new Image();
	tmpImg.src = obj.src;

	if(!obj.width || obj.width <= 1) {
		obj.width  = (tmpImg.width > max_width)? max_width : tmpImg.width;
		obj.height = (tmpImg.width > max_width)? tmpImg.height*max_width/tmpImg.width : tmpImg.height;
		//obj.width  = (tmpImg.width > pic_overLimit1)? pic_overLimit2 : tmpImg.width;
		//obj.height = (tmpImg.width > pic_overLimit1)? tmpImg.height*pic_overLimit2/tmpImg.width : tmpImg.height;
	}
	//if(!obj.width) alert(obj.clientWidth);
	if(tmpImg.width > obj.width) obj.style.cursor = 'pointer';
}

function view_img(obj,mbno) {
	if(!ismember) var ismember=mbno;
	var src = obj.replace('&','dq_amp_temp');
	var url = dir+"/view_img.php?filename="+src+"&mb="+ismember+"&id="+id;
	var scrollbars = 'auto';
	X = 0; //window.screen.width/2 - 100;
	Y = 0; //window.screen.height/3 - 100;
	tmpImg.src = src;
//	if(tmpImg.width > window.screen.width - 10) {
//		X = 0;
//		scrollbars = 'yes';
//	}
//	if(tmpImg.height > window.screen.height - 10) {
//		Y = 0;
		scrollbars = 'yes';
//	}
	window.open(url,'view_img','left='+X+', top='+Y+', width=200,height=200,status=yes,scrollbars='+scrollbars+',resizable=yes,toolbars=no');
}

function view_linkImg(obj) {
	tmpImg.src = obj.src;
	//if(tmpImg.width > pic_overLimit1 || tmpImg.width != obj.width) view_img(obj.src);
	if(tmpImg.width > 900 || tmpImg.width != obj.width) view_img(obj.src);
	else return false;
}

// a 태그에서 onclick 이벤트를 사용하지 않기 위해
function win_open(url, name, option)
{
	var popup = window.open(url, name, option);
	popup.focus();
}

// 코멘트 popup
function win_comment(url)
{
	win_open(url, "winComment", "left=50, top=50, width=930, height=600, scrollbars=1");
}
// hacking comment by shine207 ->> 해킹은 이뒤에 붙나??