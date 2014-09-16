function Id() {
   var num_regx=/^[0-9]*$/;
   // 아이디 입력여부 검사
   if (document.form1.id.value == "") {
      document.getElementById("ids").innerHTML = "<font color='red'>아이디를 입력해 주세요.</font>";
      document.form1.id.focus();
      return false;
   }else {
      for (var i = 0; i < document.form1.id.value.length; i++) {
         ch = document.form1.id.value.charAt(i);
         if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')) {
            document.getElementById("ids").innerHTML = "<font color='red'>아이디는 소문자, 숫자만 입력가능합니다.</font>";
            document.form1.id.focus();
            document.form1.id.select();
            
            return false;
         }
      }
   }
   
   if(document.form1.name.value == ""){
      document.getElementById("nas").innerHTML = "<font color='red'>이름을 입력해 주세요.</font>";
      document.form1.name.focus();
      return false;
   }
   
   // 비밀번호 입력여부 체크
   if(document.form1.password.value==""){
      document.getElementById("pss").innerHTML = "<font color='red'>비밀번호를 입력하지 않았습니다.</font>";
      document.form1.password.focus();
      return false;
   }
   
   
   

   // 비밀번호 길이 체크(4~8자 까지 허용)
   if (document.form1.password.value.length < 6 || document.form1.password2.value.length > 12){
      document.getElementById("pss").innerHTML = "<font color='red'>비밀번호를 6~12자까지 입력해주세요.</font>";
     //alert ("비밀번호를 4~10자까지 입력해주세요.");
     document.form1.password.focus();
     document.form1.password.select();
     return false;
    }


   // 비밀번호와 비밀번호 확인 일치여부 체크
   if (document.form1.password.value != document.form1.password2.value){
      document.getElementById("pss2").innerHTML = "<font color='red'>비밀번호가 일치하지 않습니다.</font>";
    // alert("비밀번호가 일치하지 않습니다");
     document.form1.password.value="";
     document.form1.password2.value="";
     document.form1.password.focus();
     return false;
   }
   
   if(document.form1.email1.value == ""){
      //alert("정확하게 입력해봐");
      document.getElementById("ems").innerHTML = "<font color='red'>Eamil을 제대로 입력해주세요.</font>";
      document.form1.email1.focus();
      return false;
   }
   if(document.form1.email3.value == "" && document.form1.email2.value == "a"){
      document.getElementById("ems").innerHTML = "<font color='red'>Eamil을 제대로 입력해주세요.</font>";
      document.form1.email3.focus();
      return false;
   } 
   
   if(document.form1.tel.value == ""){
      document.getElementById("tels").innerHTML = "<font color='red'>전화번호를 제대로 입력해주세요.</font>";
      document.form1.tel.focus();
      return false;
   } 
   if(document.form1.tel2.value == ""){
      document.getElementById("tels").innerHTML = "<font color='red'>전화번호를 제대로 입력해주세요.</font>";
      document.form1.tel2.focus();
      return false;
   }
   if(document.form1.tel3.value == ""){
      document.getElementById("tels").innerHTML = "<font color='red'>전화번호를 제대로 입력해주세요.</font>";
      document.form1.tel3.focus();
      return false;
   }
   if((!num_regx.test(document.form1.tel.value) || !num_regx.test(document.form1.tel2.value) || !num_regx.test(document.form1.tel3.value))) {
      document.getElementById("tels").innerHTML = "<font color='red'>숫자만 입력.</font>";
      return false;
   }
   

   if(document.form1.addr.value == ""){
      document.getElementById("ads").innerHTML = "<font color='red'>상세주소를 제대로 입력해주세요.</font>";
      document.form1.tel3.focus();
      return false;
   }
   if(document.form1.year.value == ""){
      document.getElementById("bus").innerHTML = "<font color='red'>생년월일을 제대로 입력해주세요.</font>";
      document.form1.year.focus();
      return false;
   }
   if(document.form1.month.value == ""){
      document.getElementById("bus").innerHTML = "<font color='red'>생년월일을 제대로 입력해주세요.</font>";
      document.form1.month.focus();
      return false;
   }
   if(document.form1.day.value == ""){
      document.getElementById("bus").innerHTML = "<font color='red'>생년월일을 제대로 입력해주세요.</font>";
      document.form1.day.focus();
      return false;
   }
   
   if((!num_regx.test(document.form1.year.value) || !num_regx.test(document.form1.month.value) || !num_regx.test(document.form1.day.value))) {
      document.getElementById("bus").innerHTML = "<font color='red'>숫자만 입력해주세요.</font>";
      return false;
   }
   
   if((document.form1.year.value || document.form1.month.value || document.form1.day.value)) {
      var d = new Date();
      var year =  d.getFullYear();
      var year2 =  year - 20;
      if(document.form1.year.value > year || document.form1.year.value > year2){
         document.getElementById("bus").innerHTML = "<font color='red'>올바른 년도를 입력해주세요.</font>";
         return false;
      }
      if(document.form1.month.value > 12 || document.form1.month.value < 1){
         document.getElementById("bus").innerHTML = "<font color='red'>올바른 월을 입력해주세요.</font>";
         return false;
      }
      if(document.form1.day.value > 31 || document.form1.day.value < 0){
         document.getElementById("bus").innerHTML = "<font color='red'>올바른 일을 입력해주세요.</font>";
         return false;
      }
      
   }
   
   if(document.form1.imgInp.value == ""){
      alert("이미지는 반드시 등록 하셔야 합니다.");
      form1.imgInp.click();
      return false;
   }
   if(document.getElementById("cooo").value == 1){
	   document.getElementById("ems").innerHTML = "<font color='red'>Email을 확인해주세요.</font>";
	   return false;
   }
   if(document.getElementById("cooo2").value == 1){
	   document.getElementById("ids").innerHTML = "<font color='red'>ID가 중복됩니다.</font>";
	   return false;
   }
   document.getElementById("subtt").disabled=true;
   form1.submit();
}

function Id2() {
	   var num_regx=/^[0-9]*$/;
	   // 아이디 입력여부 검사
	   if (document.form1.id.value == "") {
	      document.getElementById("ids").innerHTML = "<font color='red'>아이디를 입력해 주세요.</font>";
	      document.form1.id.focus();
	      return false;
	   }else {
	      for (var i = 0; i < document.form1.id.value.length; i++) {
	         ch = document.form1.id.value.charAt(i);
	         if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')) {
	            document.getElementById("ids").innerHTML = "<font color='red'>아이디는 소문자, 숫자만 입력가능합니다.</font>";
	            document.form1.id.focus();
	            document.form1.id.select();
	            
	            return false;
	         }
	      }
	   }
	   
	   if(document.form1.name.value == ""){
	      document.getElementById("nas").innerHTML = "<font color='red'>이름을 입력해 주세요.</font>";
	      document.form1.name.focus();
	      return false;
	   }
	   
	   // 비밀번호 입력여부 체크
	   if(document.form1.password.value==""){
	      document.getElementById("pss").innerHTML = "<font color='red'>비밀번호를 입력하지 않았습니다.</font>";
	      document.form1.password.focus();
	      return false;
	   }
	   
	   
	   

	   // 비밀번호 길이 체크(4~8자 까지 허용)
	   if (document.form1.password.value.length < 6 || document.form1.password2.value.length > 12){
	      document.getElementById("pss").innerHTML = "<font color='red'>비밀번호를 6~12자까지 입력해주세요.</font>";
	     //alert ("비밀번호를 4~10자까지 입력해주세요.");
	     document.form1.password.focus();
	     document.form1.password.select();
	     return false;
	    }


	   // 비밀번호와 비밀번호 확인 일치여부 체크
	   if (document.form1.password.value != document.form1.password2.value){
	      document.getElementById("pss2").innerHTML = "<font color='red'>비밀번호가 일치하지 않습니다.</font>";
	    // alert("비밀번호가 일치하지 않습니다");
	     document.form1.password.value="";
	     document.form1.password2.value="";
	     document.form1.password.focus();
	     return false;
	   }
	   
	   if(document.form1.email1.value == ""){
	      //alert("정확하게 입력해봐");
	      document.getElementById("ems").innerHTML = "<font color='red'>Eamil을 제대로 입력해주세요.</font>";
	      document.form1.email1.focus();
	      return false;
	   }
	   if(document.form1.email3.value == "" && document.form1.email2.value == "a"){
	      document.getElementById("ems").innerHTML = "<font color='red'>Eamil을 제대로 입력해주세요.</font>";
	      document.form1.email3.focus();
	      return false;
	   } 
	   
	   if(document.form1.tel.value == ""){
	      document.getElementById("tels").innerHTML = "<font color='red'>전화번호를 제대로 입력해주세요.</font>";
	      document.form1.tel.focus();
	      return false;
	   } 
	   if(document.form1.tel2.value == ""){
	      document.getElementById("tels").innerHTML = "<font color='red'>전화번호를 제대로 입력해주세요.</font>";
	      document.form1.tel2.focus();
	      return false;
	   }
	   if(document.form1.tel3.value == ""){
	      document.getElementById("tels").innerHTML = "<font color='red'>전화번호를 제대로 입력해주세요.</font>";
	      document.form1.tel3.focus();
	      return false;
	   }
	   if((!num_regx.test(document.form1.tel.value) || !num_regx.test(document.form1.tel2.value) || !num_regx.test(document.form1.tel3.value))) {
	      document.getElementById("tels").innerHTML = "<font color='red'>숫자만 입력.</font>";
	      return false;
	   }
	   

	   if(document.form1.addr.value == ""){
	      document.getElementById("ads").innerHTML = "<font color='red'>상세주소를 제대로 입력해주세요.</font>";
	      document.form1.tel3.focus();
	      return false;
	   }
	   if(document.form1.year.value == ""){
	      document.getElementById("bus").innerHTML = "<font color='red'>생년월일을 제대로 입력해주세요.</font>";
	      document.form1.year.focus();
	      return false;
	   }
	   if(document.form1.month.value == ""){
	      document.getElementById("bus").innerHTML = "<font color='red'>생년월일을 제대로 입력해주세요.</font>";
	      document.form1.month.focus();
	      return false;
	   }
	   if(document.form1.day.value == ""){
	      document.getElementById("bus").innerHTML = "<font color='red'>생년월일을 제대로 입력해주세요.</font>";
	      document.form1.day.focus();
	      return false;
	   }
	   
	   if((!num_regx.test(document.form1.year.value) || !num_regx.test(document.form1.month.value) || !num_regx.test(document.form1.day.value))) {
	      document.getElementById("bus").innerHTML = "<font color='red'>숫자만 입력해주세요.</font>";
	      return false;
	   }
	   
	   if((document.form1.year.value || document.form1.month.value || document.form1.day.value)) {
	      var d = new Date();
	      var year =  d.getFullYear();
	      var year2 =  year - 20;
	      if(document.form1.year.value > year || document.form1.year.value > year2){
	         document.getElementById("bus").innerHTML = "<font color='red'>올바른 년도를 입력해주세요.</font>";
	         return false;
	      }
	      if(document.form1.month.value > 12 || document.form1.month.value < 1){
	         document.getElementById("bus").innerHTML = "<font color='red'>올바른 월을 입력해주세요.</font>";
	         return false;
	      }
	      if(document.form1.day.value > 31 || document.form1.day.value < 0){
	         document.getElementById("bus").innerHTML = "<font color='red'>올바른 일을 입력해주세요.</font>";
	         return false;
	      } 
	   }
	   document.getElementById("subtt").disabled=true;
	   form1.submit();
	}

function fnSe() {
   var num_regx=/^[0-9]*$/;
   if (!document.form1.blood.value){
      document.getElementById("blos").innerHTML = "<font color='red'>혈액형을 선택하세요.</font>";
      document.getElementsByName("blood")[0].focus();
     return false;
   }
   if (!document.form1.height.value){
      document.getElementById("hes").innerHTML = "<font color='red'>신장을 입력하세요.</font>";
      document.form1.height.focus();
     return false;
   }
   if(!num_regx.test(document.form1.height.value)) {
      document.getElementById("hes").innerHTML = "<font color='red'>숫자만 입력해주세요.</font>";
      document.form1.height.focus();
      return false;
   }
   if(document.form1.height.value.length < 3) {
      document.getElementById("hes").innerHTML = "<font color='red'>정확히 입력해주세요.</font>";
      document.form1.height.focus();
      return false;
   }
   if(document.form1.height.value < 110 || document.form1.height.value > 250) {
      document.getElementById("hes").innerHTML = "<font color='red'>양심껏 입력해주세요.</font>";
      document.form1.height.focus();
      return false;
   }
   
   if (!document.form1.weight.value){
      document.getElementById("wes").innerHTML = "<font color='red'>체중을 입력하세요.</font>";
      document.form1.weight.focus();
     return false;
   }
   if(!num_regx.test(document.form1.weight.value)) {
      document.getElementById("wes").innerHTML = "<font color='red'>숫자만 입력해주세요.</font>";
      document.form1.weight.focus();
      return false;
   }
   if(document.form1.weight.value.length <= 1)  {
      document.getElementById("wes").innerHTML = "<font color='red'>정확히 입력해주세요.</font>";
      document.form1.weight.focus();
      return false;
   }
     var ok = false;
     var chk_arr = document.getElementsByName("fashion");
     var len = chk_arr.length;
     for (var i = 0; i < len; i++) {
       if (chk_arr[i].checked == true) {
         ok = true;
         break;
       }
     }
   if(ok == false){
      document.getElementById("fa").innerHTML = "<font color='red'>한가지 이상 선택해주세요.</font>";
      document.getElementsByName("fashion")[0].focus();
      return false;
   } 
   
   if (!document.form1.style.value){
      document.getElementById("sts").innerHTML = "<font color='red'>성격을 선택하세요.</font>";
      document.getElementsByName("style")[0].focus();
     return false;
   }
   if (!document.form1.hobby.value){
      document.getElementById("hos").innerHTML = "<font color='red'>취미를 선택하세요.</font>";
      document.getElementsByName("hobby")[0].focus();
     return false;
   }
   if (!document.form1.blood2.value){
      document.getElementById("blos2").innerHTML = "<font color='red'>혈액형을 선택하세요.</font>";
      document.getElementsByName("blood2")[0].focus();
     return false;
   }
   
   if (!document.form1.age.value){
      document.getElementById("age2").innerHTML = "<font color='red'>원하시는 나이를 입력하세요.</font>";
      document.form1.age.focus();
     return false;
   }
   if(!num_regx.test(document.form1.age.value)) {
      document.getElementById("age2").innerHTML = "<font color='red'>숫자만 입력해주세요.</font>";
      document.form1.age.focus();
      return false;
   }
   if(document.form1.age.value.length < 2) {
      document.getElementById("age2").innerHTML = "<font color='red'>정확히 입력해주세요.</font>";
      document.form1.age.focus();
      return false;
   }
   if(document.form1.age.value < 20 || document.form1.age.value > 99) {
      document.getElementById("age2").innerHTML = "<font color='red'>20세~ 99세 까지 가능합니다.</font>";
      document.form1.age.focus();
      return false;
   }
   if (!document.form1.height2.value){
      document.getElementById("hes2").innerHTML = "<font color='red'>신장을 입력하세요.</font>";
      document.form1.height2.focus();
     return false;
   }
   if(!num_regx.test(document.form1.height2.value)) {
      document.getElementById("hes2").innerHTML = "<font color='red'>숫자만 입력해주세요.</font>";
      document.form1.height2.focus();
      return false;
   }
   if(document.form1.height2.value.length < 3) {
      document.getElementById("hes2").innerHTML = "<font color='red'>정확히 입력해주세요.</font>";
      document.form1.height2.focus();
      return false;
   }
   if(document.form1.height2.value < 110 || document.form1.height2.value > 250) {
      document.getElementById("hes2").innerHTML = "<font color='red'>양심껏 입력해주세요.</font>";
      document.form1.height2.focus();
      return false;
   }
   if (!document.form1.weight2.value){
      document.getElementById("wes2").innerHTML = "<font color='red'>체중을 입력하세요.</font>";
      document.form1.weight2.focus();
     return false;
   }
   if(!num_regx.test(document.form1.weight2.value)) {
      document.getElementById("wes2").innerHTML = "<font color='red'>숫자만 입력.</font>";
      document.form1.weight2.focus();
      return false;
   }
   if(document.form1.weight2.value.length <= 1)  {
      document.getElementById("wes2").innerHTML = "<font color='red'>정확히 입력해주세요.</font>";
      document.form1.weight2.focus();
      return false;
   }
   
   var ok = false;
     var chk_arr = document.getElementsByName("fashion2");
     var len = chk_arr.length;
     for (var i = 0; i < len; i++) {
       if (chk_arr[i].checked == true) {
         ok = true;
         break;
       }
     }
   if(ok == false){
      document.getElementById("fa3").innerHTML = "<font color='red'>한가지 이상 선택해주세요.</font>";
      document.getElementsByName("fashion2")[0].focus();
      return false;
   } 
   
   if (!document.form1.style2.value){
      document.getElementById("sts2").innerHTML = "<font color='red'>성격을 선택하세요.</font>";
      document.getElementsByName("style2")[0].focus();
     return false;
   }
   
   if (!document.form1.hobby2.value){
      document.getElementById("hos2").innerHTML = "<font color='red'>취미를 선택하세요.</font>";
      document.getElementsByName("hobby2")[0].focus();
     return false;
   }
   
   document.getElementById("subttt").disabled=true;
   form1.submit();
}

var xhr;
function createXhr(){
    if(window.ActiveXObject){   // IE 이전버전
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        xhr = new XMLHttpRequest();
    }
}
function idcheck(){
    var id = document.getElementById("id").value;
    var queryString = "command=idcheck&id="+id;
    if(id.length<6){
        document.getElementById("ids").innerHTML = "<font color=red>6자리 이상 입력하세요.</font>";     
    }else{
        // 1. XMLHttpReqeust 객체 생성
        createXhr();
        // 2. 이벤트 핸들러 등록
        xhr.onreadystatechange = callback;  // callback 함수를 등록
        // 3. open()를 통해 요청관련 설정을 설정
        xhr.open("POST", "/homepage/javascript_ajax_class/AjaxServlet", true);
        // 4. Header에 contentType 지정 - post
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // 5. send()를 통해 요청
        xhr.send(queryString);  // 요청 쿼리를 보내준다.
    }
}
function emailcheck(){
    var email1 = document.getElementById("email1").value;
    var bb = document.getElementById("email2").options.selectedIndex;
    var email2 = document.getElementById("email2").options[bb].value;   
    var email3 = document.getElementById("email3").value;
    var email;
    if(email2 == "a"){
        document.getElementById("ems").innerHTML = "<font color=red>이메일 주소를 선택해주세요.</font>";     
        return false;
    }
    if(email2 == "etc"){
    		email = email1 + "@" + email3;
    }else{
    	email = email1 + "@" + email2; 
    }
    var queryString = "command=emailcheck&email="+ email;
        // 1. XMLHttpReqeust 객체 생성
        createXhr();
        // 2. 이벤트 핸들러 등록
        xhr.onreadystatechange = callback2;  // callback 함수를 등록
        // 3. open()를 통해 요청관련 설정을 설정
        xhr.open("POST", "/homepage/javascript_ajax_class/AjaxServlet", true);
        // 4. Header에 contentType 지정 - post
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // 5. send()를 통해 요청
        xhr.send(queryString);  // 요청 쿼리를 보내준다.
    }

function callback(){
    if(xhr.readyState==4){      // 응답을 다 받은 경우
        if(xhr.status == 200){  // 응답코드가 200인 경우 - 정상인 경우
            var resTxt = xhr.responseText;  // 서버가 보낸 응답 text
            /*alert(resTxt);*/
            if(resTxt.indexOf(id)){
            	document.getElementById("ids").innerHTML = resTxt;
            }else{
            	document.getElementById("ids").innerHTML = resTxt;
            }
        }else{
            alert("요청 처리가 정상적으로 되지 않았습니다.\n"+xhr.status);
        }
    }
}

function callback2(){
    if(xhr.readyState==4){      // 응답을 다 받은 경우
        if(xhr.status == 200){  // 응답코드가 200인 경우 - 정상인 경우
            var resTxt = xhr.responseText;  // 서버가 보낸 응답 text
            /*alert(resTxt);*/
            if(resTxt.indexOf(id)){
            	document.getElementById("ems").innerHTML = resTxt;
            }else{
            	document.getElementById("ems").innerHTML = resTxt;
            }
        }else{
            alert("요청 처리가 정상적으로 되지 않았습니다.\n"+xhr.status);
        }
    }
}