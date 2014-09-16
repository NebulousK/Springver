var running_pong = null;

function pong_setter(id, divname) {
	if (running_pong == divname) {
		document.getElementById(divname).innerHTML = '';
		running_pong = null;
	} else {
		if (running_pong == null) {
			//alert('null');
			running_pong = divname;
			pong_view(id, divname);
		} else {
			//alert(running_pong);
			document.getElementById(running_pong).innerHTML = '';
			running_pong = divname;
			pong_view(id, divname);
			//document.getElementById(divname).innerHTML = '';
			//running_pong = divname;
			//pong_view(id, divname);
		}
	}
}

function pong_view(id, divname) {
        tmp  = '<table width=322 border=0 cellspacing=0 cellpadding=0><tr><td width=10 valign=top>'
            + '<img src=\'http://avatar.humoruniv.com/pong/images/arrow.gif\' width=7 height=18></td><td width=222 height=102>'
            + '<iframe name=balloon width=312 height=142 marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no src=\''      
            + 'http://avatar.humoruniv.com/pong/pong_1.php?idvar=' + id + '\'></iframe></td></tr><tr><td width=10></td>'
            + '<td width=312 height=24 align=right><img src=\'http://avatar.humoruniv.com/pong/images/layer_close.gif\' '
            + 'width=55 height=16 style=cursor:hand></td></tr></table>';
	document.getElementById(divname).innerHTML = tmp;
}

function pong1(id, divname) {
}

function pong2(id, divname) {
	pong_setter(id, divname);
}

function pong_remove(divname) {
}