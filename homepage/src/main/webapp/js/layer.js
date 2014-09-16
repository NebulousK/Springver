// Layer Location Control Script
// Require /js/common.js
var layerControl_mousex = 0;
var layerControl_mousey = 0;
var layerControl_start = false;

// 해당 오브젝트의 절대좌표 (body 기준 x,y)
function layerGetAbsPos(obj) {
	var x = 0;
	var y = 0;
	while ((obj) && (obj != document.body)) {
		x += obj.offsetLeft;
		y += obj.offsetTop;
		if (obj.clientLeft) x += obj.clientLeft;
		if (obj.clientTop) y += obj.clientTop;
		obj = obj.offsetParent;
	}
	var pos = Array();
	pos['x'] = x;
	pos['y'] = y;
	return pos;
}

// 해당 오브젝트의 상대좌표 (상위 absolute 기준의 좌표)
function layerGetRelPos(obj) {
	var x = 0;
	var y = 0;
	var styleVal = '';
	while ((obj != document)) {
		if (obj.currentStyle) styleVal = obj.currentStyle.position;
		else if (window.getComputedStyle) styleVal = window.getComputedStyle(obj, "").getPropertyValue('position');
		if (styleVal == 'absolute') {
			x += obj.offsetLeft;
			y += obj.offsetTop;
		}
		obj = obj.parentNode;
	}
	var pos = Array();
	pos['x'] = x;
	pos['y'] = y;
	return pos;
}
function layerReady() {
	layerControl_start = true;
}
function layerShow(objName, xplus, yplus) {
	if (!layerControl_start) return;
	var obj = document.getElementById(objName);
	if (!obj) return;
	// layer 바깥쪽으로 빼기
	if (document.body) {
		obj.parentNode.removeChild(obj);
		document.body.appendChild(obj);
	}

	objPos = layerGetRelPos(obj.parentNode);

	obj.style.visibility = 'hidden';
	obj.style.display = 'inline';
	obj.style.zIndex = 9999;

	var x = layerControl_mousex - objPos['x'] + document.body.scrollLeft;
	var y = layerControl_mousey - objPos['y'] + document.body.scrollTop;
	
	// 본문 크기 계산
	var cw = document.body.clientWidth + document.body.scrollLeft;
	var ch = document.body.clientHeight + document.body.scrollTop;

	obj.style.left = x + xplus;
	obj.style.top = y + yplus;

	obj.style.visibility = 'visible';

	var h = obj.offsetHeight;
	var w = obj.offsetWidth;
	var curPos = layerGetRelPos(obj);
	if ((layerControl_mousey + h + yplus) > document.body.clientHeight) {
		obj.style.top = y - h - yplus;
		if ((layerControl_mousey - h - yplus) < 0) {
			obj.style.top = objPos['y'] + document.body.scrollTop + document.body.clientHeight - h - 10;
		}
	}
	if ((layerControl_mousex + w + xplus) > document.body.clientWidth) {
		obj.style.left = x - w - xplus;
	}


}
function layerHide(objName) {
	var obj = document.getElementById(objName);
	if (!obj) return;
	obj.style.display = 'none';
}
function layerTrackMouseMove(e) {
	if (!e) e = event;
	if (e.x) {
		layerControl_mousex = e.x;
		layerControl_mousey = e.y;
	} else {
		layerControl_mousex = e.pageX - document.body.scrollLeft;
		layerControl_mousey = e.pageY - document.body.scrollTop;
	}
}

function addEvent(obj, ev, fn) {
	if (navigator.userAgent.indexOf("MSIE") > -1) { // 파폭이면
		if (ev.substr(0,2) != 'on') ev = 'on' + ev;
		obj.attachEvent(ev,fn);
	} else {
		if (ev.substr(0,2) == 'on') ev = ev.substr(2,(ev.length) - 2);
		obj.addEventListener(ev,fn,true);
	}
}
function removeEvent(obj, ev, fn) {
	if (navigator.userAgent.indexOf("MSIE") > -1) { // 파폭이면
		if (ev.substr(0,2) != 'on') ev = 'on' + ev;
		obj.detachEvent(ev,fn);
	} else {
		if (ev.substr(0,2) == 'on') ev = ev.substr(2,(ev.length) - 2);
		obj.removeEventListener(ev,fn,true);
	}
}
function resizeWindowBody(w,h, popup) {
	if (!popup) popup = false;
	if (opener || popup) {
		window.resizeTo(w+10,h+20);
		window.resizeBy(w - document.body.clientWidth,h - document.body.clientHeight);
	}
}
addEvent(document, 'onmousemove', layerTrackMouseMove);
addEvent(window, 'onload', layerReady);