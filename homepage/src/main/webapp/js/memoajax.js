/************************************************ 

    Ajax 제어를 위한 클래스 

************************************************/ 

var AJAX_ERROR="";  // 1:브라우저 지원, 2:읽기실패, 3:오브젝트생성실패
var AJAX = 
{ 
    XmlHttp: null, 

    create : function () 
    { 
        try { 
                if ( window.XMLHttpRequest ) 
                { 
                    AJAX.XmlHttp = new XMLHttpRequest(); 
            
                    // 일부의 모질라 버전을은 readyState property, 
                    // onreadystate event를 지원하지 않으므로. - from xmlextrs 
                                
                    if ( this.XmlHttp.readyState == null ) 
                    { 
                        this.XmlHttp.readyState = 1; 

                        this.XmlHttp.addEventListener( "load", function () 
                        { 
                            this.XmlHttp.readyState = 4; 

                            if ( typeof this.XmlHttp.onreadystatechange == "function" ) { tmpXmlHtp.onreadystatechange(); } }, false); 
                        } 
                    } 
                    else { AJAX.XmlHttp = new ActiveXObject( "Microsoft.XMLHTTP" ); } 
                } 
                catch (e) 
                { 
//                        alert( "브라우저가 AJAX 를 지원하지 않습니다." ); 
						AJAX_ERROR = "1";
                } 
        } 
} 


// XML 방식으로 읽기 

AJAX.openXML =  function ( method, url, async, uname, pswd ) 
{ 
        if ( AJAX.XmlHttp != null ) 
        { 
                if ( uname == undefined )    { AJAX.XmlHttp.open(method, url, async, uname, pswd); } 
                else                        { AJAX.XmlHttp.open(method, url, async); } 

                AJAX.XmlHttp.onreadystatechange = function () 
                { 
                        if ( AJAX.XmlHttp.readyState == 4 ) 
                        { 
                                if ( AJAX.XmlHttp.status == 200 ) { AJAX.statusSuccessHandler(AJAX.XmlHttp.responseXML.xml); }  // 200 : 성공 
                                else 
                                { 
                                    AJAX.statusErrorHandler();  
//                                    alert( "읽기실패!" ); 
									AJAX_ERROR = "2";
                                } 
                        } 
                } 
        } 
        else { 
//			alert ( "오브젝트 생성실패" ); 
			AJAX_ERROR = "3";
		} 
} 


// Text 방식으로 읽기 

AJAX.openText =  function ( method, url, async, uname, pswd ) 
{ 
        if ( AJAX.XmlHttp != null ) 
        { 
                if ( uname == undefined )    { AJAX.XmlHttp.open(method, url, async, uname, pswd); } 
                else                        { AJAX.XmlHttp.open(method, url, async); } 

                AJAX.XmlHttp.onreadystatechange = function () 
                { 
                        if ( AJAX.XmlHttp.readyState == 4 ) 
                        { 
                                if ( AJAX.XmlHttp.status == 200 ) { AJAX.statusSuccessHandler( AJAX.XmlHttp.responseText ); }  // 200 : 성공 
                                else 
                                { 
                                        AJAX.statusErrorHandler(); 
//                                        alert( "읽기실패" ); 
									AJAX_ERROR = "2";
                                } 
                        } 
                } 
        } else { 
//			alert ( "오브젝트 생성실패" ); 
			AJAX_ERROR = "3";
		} 
} 


AJAX.send = function ( content ) 
{ 
                if ( content == undefined )    { AJAX.XmlHttp.send( null ); } 
                else                        { AJAX.XmlHttp.send( content ); } 
} 


AJAX.setOnReadyStateChange = function ( funcname ) 
{ 
                if ( AJAX.XmlHttp )        { AJAX.XmlHttp.onreadystatechange = funcname; } 
                else                    { 
//					alert ( "오브젝트 생성실패" ); 
					AJAX_ERROR = "3";
				} 
} 


// status 200 일 때 처리 함수 
AJAX.statusSuccessHandler = function ( data ) 
{ 
    alert( data ); 
} 


AJAX.setStatusSuccessHandler = function ( funcname ) 
{ 
    AJAX.statusSuccessHandler = funcname; 
} 


// status 200 일 때 기본 처리 함수 
// setStatusSuccessHandler() 로 대체 가능 

AJAX.statusErrorHandler = function ( status ) 
{ 
    AJAX.rtnText = AJAX.XmlHttp.responseText; 
} 


AJAX.setStatusSuccessHandler = function ( funcname ) 
{ 
    AJAX.statusSuccessHandler = funcname 
} 


AJAX.setStatusErrorHandler = function ( funcname ) 
{ 
    AJAX.statusErrorHandler = funcname 
} 


AJAX.setRequestHeader = function ( label, value ) 
{ 
    AJAX.XmlHttp.setRequestHeader( label, value ); 
}
/*url, "GET", "true", result_return*/
function Ajax_Call( url, gp, tf, fn, sn ){ 
    AJAX.create();                // Ajax 오브젝트 생성 
    AJAX.openXML(gp, url, tf);             
	AJAX.setStatusSuccessHandler(fn); // 성공시 실행할 함수 
    AJAX.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
    AJAX.send(sn);        // 파라미터(ex: 'id=BulDDuk&Check=OK') , POST 방식도 이런식으로 처리해야함 
}

function Ajax_Text_Call( url, gp, tf, fn, sn ){ 
    AJAX.create();                // Ajax 오브젝트 생성 
    AJAX.openText(gp, url, tf);             
	AJAX.setStatusSuccessHandler(fn); // 성공시 실행할 함수 
    AJAX.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
    AJAX.send(sn);        // 파라미터(ex: 'id=BulDDuk&Check=OK') , POST 방식도 이런식으로 처리해야함 
} 