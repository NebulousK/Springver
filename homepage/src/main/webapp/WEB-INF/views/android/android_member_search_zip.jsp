<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<script src="http://dmaps.daum.net/map_js_init/postcode.js"></script>
<script>
    // 우편번호 찾기 iframe을 넣을 element
    var element = document.getElementById('wrap');
    function setMessage(arg) {

    	 document.getElementById('pc1').innerHTML = arg;

 	} 

    function sendMessage(msg, msg1, msg2){

    	window.android.setMessage(msg, msg1, msg2);

    }

    function foldDaumPostcode() {
        // iframe을 넣은 element를 안보이게 한다.
        element.style.display = 'none';
    }

    function expandDaumPostcode() {
        // 현재 scroll 위치를 저장해놓는다.
        var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new daum.Postcode({
            oncomplete: function(data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
                // 우편번호와 주소 및 영문주소 정보를 해당 필드에 넣는다.
                document.getElementById('pc1').value = data.postcode1;
                document.getElementById('pc2').value = data.postcode2;
                document.getElementById('addrStr').value = data.address;
                // iframe을 넣은 element를 안보이게 한다.
                element.style.display = 'none';
                // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                document.body.scrollTop = currentScroll;
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분.
            // iframe을 넣은 element의 높이값을 조정한다.
            onresize : function(size) {
                element.style.height = size.height + "px";
            },
            width : '100%',
            height : '100%'
        }).embed(element);

        // iframe을 넣은 element를 보이게 한다.
        element.style.display = 'block';
    }
</script>  

<input type="text" id="pc1" name="pc1"> - <input type="text" id="pc2" name="pc2">
<input type="button" onclick="expandDaumPostcode()" value="우편번호 찾기"><br>

<div id="wrap" style="display:none;border:1px solid;width:500px;height:300px;margin:5px 0;position:relative;-webkit-overflow-scrolling:touch;">
<img src="//i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px" onclick="foldDaumPostcode()" alt="접기 버튼">
</div>
<input type="text" id="addrStr" name="addrStr">
<input type="submit" id="addsubmit" name="주소 전송" value="SendMEssage" onclick="sendMessage(document.getElementById('pc1').value, document.getElementById('pc2').value, document.getElementById('addrStr').value)"/>

