function common_swf(objhtml) {
    document.write(objhtml);
}

function common_open_url(url_str , param) {
  if ( window.open(url_str,'',param) == false ) {
    alert('XP 팝업 차단 기능을 끄세요.');
  }
}

function OhMyGod() {
  common_open_url("http://web.humoruniv.com/prog/ohmygod/ohmygod.html", "fullscreen=yes,scrollbars=no");
} 

function getBrowser(){ 
	var agent = navigator.userAgent; 
	var result = "unknown"; 
	if (agent == null) { } 
	else if (agent.indexOf("MSIE 6.0") > -1) { result = "ie6"; } 
	else if (agent.indexOf("MSIE 7.0") > -1) { result = "ie7"; } 
	else if (agent.indexOf("MSIE 8.0") > -1) { result = "ie8"; } 
	else if (agent.indexOf("MSIE 9.0") > -1) { result = "ie9"; } 
	else if (agent.indexOf("MSIE 10.0") > -1) { result = "ie10"; } 
	else if (agent.indexOf("Firefox") > -1) { result = "firefox"; }
	else if (agent.indexOf("Opera") > -1) { result = "opera"; } 
	else if (agent.indexOf("Android") > -1) { result = "android"; } 
	else if (agent.indexOf("iPhone") > -1) { result = "iphone"; } 
	else if (agent.indexOf("Chrome") > -1) { result = "chrome"; } 
	else if (agent.indexOf("Safari") > -1) { result = "safari"; } 
	return result; 
}  

function WhatMyPass() {
	var pw_url = 'https://web.humoruniv.com/user/idpw/idpw_qus.html';
	window.open(pw_url,'비밀번호찾기','scrollbars=no,toolbar=no,directories=no,status=no,width=380,height=330,resizable=no,menubar=no,top=10,left=340');
}

function common_real_len(Source)
{
  len = Source.length;

  for (i = 0; i < Source.length; i++)
    if (Source.charCodeAt(i) > 127)
      len++;

  return len;
}


function OnOff_Layers() {
var e = document.getElementById("login_view");
 
 if (e.style.visibility == 'visible') {
  e.style.visibility = 'hidden';
  e.style.display = 'none';
 } else {
  e.style.visibility = 'visible';
  e.style.display = 'block';
 }
}

function OnOff_Layers_bak() {
  if (document.all.login_view.style.visibility == 'hidden') {
	document.all.login_view.style.visibility = 'visible';
  } else {
	document.all.login_view.style.visibility = 'hidden';
  }
}

function OnImageResizing(img) {
  if(img.width > 600) {
    img.width = 600;
  }
}

function profile_popup(id) {
		//window.alert(id);
        //var url = "http://msg.humoruniv.com/profile/profile.html?user_address=" + id;
        var url = "http://mini.humoruniv.com/index.html?nick=" + id;
        aaa = window.open(url,'','left margin=0 top margin=0 width=903,height=662');
        //aaa = window.open(url,'','left margin=0 top margin=0 width=880,height=600');

        if (aaa == false) alert('XP 팝업차단을 꺼주셔야 합니다.');
}

function bookmarksite(title,url){
	if (window.sidebar) // firefox
		window.sidebar.addPanel(title, url, "");
	else if(window.opera && window.print) { // opera
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');
		elem.click();
	} 
	else if(document.all)// ie
		window.external.AddFavorite(url, title);
}

function common_isnumber(str) {
	var numstr = "0123456789";
	var i = 0; 
	
	for (i = 0; i < str.length; i++ ) {
	  if (numstr.indexOf(str.charAt(i)) == -1) return false;
	}
	
	return true;
}

function total_graph_bak( nWidth, nHeight, nData ){
  document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' ");
  document.write("codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,22,0' ");
  document.write("width='" + nWidth + "' height='" + nHeight + "'>");
  document.write("<param name='movie' value='/images/engine/pollgraph.swf'>");
  document.write("<param name='quality' value='high'>");
  //document.write("<param name='flashVars' value='Indata=10,100;20,200;30,300;40,400;50,700;60,300;70,900&Userdata=300&'>");
  document.write("<param name='flashVars' value='" + nData + "'>");
  document.write("</object>");
}


function total_graph(f_name,f_value,f_width,f_height,f_align,f_param){
 document.write('<object id="'+f_name+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+f_width+'" height="'+f_height+'">') ;
 document.write('<param name="movie" value="'+f_value+'.swf?'+f_param+'" />') ;
 document.write('<param name="quality" value="high" />') ;
 document.write('<param name="menu" value="false" />') ;
 document.write('<param name="wmode" value="transparent" />') ;
 document.write('<param name="allowScriptAccess" value="always" />');
 document.write('<param name="showLiveConnect" " value="true" />' );
 document.write('<param name="allowFullScreen" value="true" />') ;
 document.write('<PARAM NAME=scale VALUE=noscale> ');
 document.write('<PARAM NAME="SAlign" VALUE="'+f_align+'">') ;
 document.write('<param name="FlashVars" value="'+f_param+'">');
 document.write('<embed src="'+f_value+'.swf?'+f_param+'" quality="high" name="'+f_name+'" SAlign="'+f_align+'" scale=noscale width="'+f_width+'" height="'+f_height+'" allowScriptAccess="always"  allowFullScreen="true" showLiveConnect="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" />') ;
 document.write('</object>') ; 
}


  function JSOnInitScript(object) {
    if ( hu_getCookie("hu_on_bar") == "set" ) {
	// setted
    } else {
        hu_setCookie("hu_on_bar", "set", 30);
    }

    if ( hu_getCookie("hu_on_init") == "inited" ) {
        // toolvar check already.
    } else {
        // toolvar
        hu_setCookie("hu_on_init", "inited", 30);
    }
  }

  function hu_on_adrun() {
    if ( hu_getCookie("hu_on_init") == "inited" ) {
        // not view...
    } else {
        hu_on_var.style.display = 'block';
    }
  }

  /**
   * 쿠키값 추출
   * @param cookieName 쿠키명
   */
  function hu_getCookie( cookieName ) {

    var search = cookieName + "=";
    var cookie = document.cookie;

    // 현재 쿠키가 존재할 경우
    if( cookie.length > 0 ) {
      // 해당 쿠키명이 존재하는지 검색한 후 존재하면 위치를 리턴.
      startIndex = cookie.indexOf( cookieName );

      // 만약 존재한다면
      if( startIndex != -1 ) {
        // 값을 얻어내기 위해 시작 인덱스 조절
        startIndex += cookieName.length;

        // 값을 얻어내기 위해 종료 인덱스 추출
        endIndex = cookie.indexOf( ";", startIndex );

        // 만약 종료 인덱스를 못찾게 되면 쿠키 전체길이로 설정
        if( endIndex == -1) endIndex = cookie.length;

        // 쿠키값을 추출하여 리턴
        return unescape( cookie.substring( startIndex + 1, endIndex ) );
      } 
    }

    return false;
  }
 
 
  /**
   * 쿠키 설정
   * @param cookieName 쿠키명
   * @param cookieValue 쿠키값
   * @param expireDay 쿠키 유효날짜
   */
  function hu_setCookie( cookieName, cookieValue, expireDate ) {
    var today = new Date();
    today.setDate( today.getDate() + parseInt( expireDate ) );
    document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/; expires=" + today.toGMTString() + ";";
    //document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/; ";
  }

  function hu_setCookie2( cookieName, cookieValue ) {
    var today = new Date();
    document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/; ";
  }

  function hu_getschkey( cookie_name ){ 
	
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results )    return ( unescape ( results[2] ) );  
	else return null;
	

	return hu_getCookie( cookie_name );
  }

  function huon_close() {
	document.getElementById('hu_on_var').style.display = 'none';

	if ( hu_getCookie("hu_on_init") == "inited" ) {
		// pass
	} else {
		document.cookie = "hu_on_init=" + escape( "inited" ) + "; path=/; ";
	}
  }

  function huon_move(nick) {
	if ( hu_getCookie("hu_on_init") == "inited" ) {
		profile_popup(nick);
	} else {
		top.location.href = 'http://web.humoruniv.com/hu_on/index.html?nick=' + nick;
	}
  }

  function hu_sckput() {
	var rndnum = Math.floor(Math.random() * 10); // 0 ~ 9 int
	if ( hu_getschkey("sck" + rndnum) == false ) {
		document.getElementById('search_text').value = '';
	} else {
		document.getElementById('search_text').value = hu_getschkey("sck" + rndnum);
	}
  }

	// banner open
	function exp_banner_open(mode) {
	//	exp_banner_inner(mode);	
		if (document.getElementById(mode).style.display == 'none') {
			document.getElementById(mode).style.display = 'block';
        	}
	}

	// banner close
	function exp_banner_close(mode) {
		if (top.document.getElementById(mode).style.display == 'block') {
			top.document.getElementById(mode).style.display = 'none';
        	}
	}

	function exp_banner_inner(mode){
	alert(mode);
		switch(mode){
			case "b_wide_exp" :
				inner_str = '';  //ad제거
				break;
			case "b_branding_exp" :
				inner_str = ''; //ad제거
				break;
			case "b_drag_exp" :
				inner_str = ''; //ad제거
				break;
		}
		
	alert(inner_str);
		document.getElementById(mode).innerHTML = inner_str;

		document.getElementById(mode).style.display = 'block';
	}

function getLocationHref(){ return document.location.href;} 

var memo_win;
var memo_pop_left = 30;
var memo_pop_top = 5;

function memo_popup(you_hex){
	if(document.domain == "m.humoruniv.com" || document.domain == "vaultm.humoruniv.com"){
		var url = "/memo/memo.html?you_hex=" + you_hex;
		memo_win = window.open(url, "w_" + you_hex,"scrollbars=yes,toolbar=no,location=no,directories=no,menubar=no,status=no,width=520,height=720,resizable=yes,left=0,top=0");
	}else{
		var url = "http://web.humoruniv.com/memo/memo.html?you_hex=" + you_hex;
		if(memo_pop_left < 100){
			memo_pop_left += 10;
			memo_pop_top += 10;
		}
		//memo_win = window.open(url, "w_" + you_hex,"scrollbars=yes,toolbar=no,location=no,directories=no,menubar=no,status=no,width=520,height=720,resizable=yes,left=" + memo_pop_left + ",top=" + memo_pop_top);
		memo_win = window.open(url, "w_" + you_hex,"scrollbars=yes,toolbar=no,location=no,directories=no,menubar=no,status=no,width=520,height=720,resizable=yes");

		//memo_win.focus(); // - omit auto focus at 2012.08.16 
	}
}

var chat_win;
function chat_popup(ch, chat_key){
	var url = "/chat/chat.html?ch="+ ch +"&chat_key=" + chat_key;
	chat_win = window.open(url, "c_" + ch,"scrollbars=yes,toolbar=no,location=no,directories=no,menubar=no,status=no,width=900,height=720,resizable=yes");
}

var pong_win;
function pong_popup(nick_hex){
	var url = "http://avatar.humoruniv.com/pong/pong_hex.php?nick_hex=" + nick_hex;
	pong_win = window.open(url, "p_" + nick_hex,"scrollbars=no,toolbar=no,location=no,directories=no,menubar=no,status=no,width=330,height=160,resizable=yes");
}


function banner_swf(w,h,u) {
 var flash_tag = "";
 flash_tag = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
 flash_tag +='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ';
 flash_tag +='WIDTH="'+w+'" HEIGHT="'+h+'" >';
 flash_tag +='<param name="movie" value="'+u+'">';
 flash_tag +='<param name="quality" value="high">';
 flash_tag +='<param name="allowScriptAccess" value="never">';
 flash_tag +='<param name="autostart" value="false">';
 flash_tag +='<param name="invokeURLs" value="false">';
 flash_tag +='<param name="allowNetworking" value="internal">';
 flash_tag +='<param name="enableHtmlAccess" value="false">';
 flash_tag +='<param name="AllowHtmlPopupwindow" value="false">';
 flash_tag +='<param name="wmode" value="opaque">';
 flash_tag +='<embed allowScriptAccess="never" autostart="false" invokeURLs="false" allowNetworking="internal" wmode="opaque" enableHtmlAccess="false" AllowHtmlPopupwindow="false"  src="'+u+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" WIDTH="'+w+'" HEIGHT="'+h+'"></embed></object>'
 document.write(flash_tag);
}