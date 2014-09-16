<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.*"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width">
<title>Responsive Aside website template</title>

<link type="text/css" rel="stylesheet" href="/homepage/css/components.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/responsee.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/template-style.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/luYzpvna9qk.css" />
<link type="text/css" rel="stylesheet" href="/homepage/css/oBwXKrMsLPd.css" />
<link type="text/css" rel="stylesheet" href="/homepage/css/k4p1J0mZLFW.css" />
<link type="text/css" rel="stylesheet" href="/homepage/css/u4n0TOW16uV.css" />
<link type="text/css" rel="stylesheet" href="/homepage/css/aO5MXY7tAfJ.css" /> 
<script type="text/javascript" src="/homepage/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/homepage/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/homepage/js/modernizr.js"></script>
<script type="text/javascript" src="/homepage/js/responsee.js"></script>
<link href="/homepage/css/bootstrap2.css" rel="stylesheet" />
<link href="/homepage/css/1.css" rel="stylesheet" />
<script src="/homepage/js/jquery-2.1.1.min.js"></script>
<script src="/homepage/js/bootstrap.js"></script> 
<script src="/homepage/js/memberjoin.js"></script>
<script src="/homepage/js/member_join.js"></script>
<script src="/homepage/js/ajax.js"></script>
</head>
<body class="size-1140">
   <!-- TOP NAV WITH LOGO -->
   <form action="mail_proc.jsp" method="post" name="mail">
	<input type="hidden" name="action" value="mailcheck"/>
	<input type="hidden" name="email1" />
	<input type="hidden" name="email2" />
	<input type="hidden" name="email3" />
	<input type="hidden" name="id" />	
	</form>
   <header>
		<nav style="background-color: #212121;">
			<div class="line" >
				<div class="s-12 l-2" >
					<img class="s-5 l-12 center" src="/homepage/images/IMG_004.png" style="width: 100px; height: 100px;margin-top: 7px;margin-bottom: 7px"/>
				</div>
				
			</div>
		</nav>
	</header>
   <!-- ASIDE NAV AND CONTENT -->
   <div class="line">
      <div class="box  margin-bottom">
         <div class="margin">
            <section class="s-12 l-7">
               <div class="line">
                  <div class="container" style="margin-left: 80px">
                     <h1>회원가입</h1>
                     <br /> <br />
                     <form id="form1" name="form1" action="/homepage/join.sns" method="post" enctype="multipart/form-data">
						<!-- 이메일인증 스테이트  -->
						<input type="hidden" name="confirmState" value="false" />
                     <div class="row">
                        <div class="span12">
                           <div class="span6" align="center">
                              <div class="customDiv2" align="center">
                                 <img id="blah" src="/homepage/images/noData.gif" style="max-width: 450px; max-height: 460px;" /> 
                                 <br/><br/> 
                                 <span id="fileInputForm" style="position:relative; float:left; width:100px; height:30px; overflow:hidden; cursor:pointer; background-image:url('../images/cc.png');">
                                 <input type="file" id="imgInp" name="imgInp" style='position：absolute; margin-left:-10px; width:62px; height:18px; filter:alpha(opacity=0); opacity:0; -moz-opacity:0; cursor:pointer;'>
                                 <br/><span id="imgs"></span>
                                 </span>
                                 </div>
                           </div>

                           <div class="span5" style="margin-right: 0;">
                              <table align="center">
                                 <tr>
                                    <input type="hidden" name="action" id="action" value="join"/>
                                    <td style="padding-right: 70px">아이디</td>
                                    <td><input type="text" style="width: 150px" maxlength="12" name="id" id="id" onchange="idcheck()"/>
                                    <br/>
                                    <span id="ids"></span></td>
                                 </tr>
                                 <tr>
                                    <td>이름</td>
                                    <td><input type="text" style="width: 150px" name="name" id="name" /><br/><span id="nas"></span></td>
                                 </tr>
                                 <tr>
                                    <td>비밀번호</td>
                                    <td><input type="password" style="width: 150px" name="password" id="password"/><br/><span id="pss"></span></td>
                                 </tr>
                                 <tr>
                                    <td>비밀번호 확인</td>
                                    <td><input type="password" style="width: 150px" name="password2" id="password2" /><br/><span id="pss2"></span></td>
                                 </tr>
                                 <tr>
                                    <td>e-mail</td>
                                    <td id="email"><input type=text size=10 id="email1" name="email1" style="width: 100px"> @
                                    <select name="email2" id="email2" onChange="javascript:email_write()" style="width:130px;" onblur="emailcheck()">
                                          <option value="a" selected>:: 선택 ::</option>
                                          <option value="chol.com">chol.com</option>
                                          <option value="dreamwiz.com">dreamwiz.com</option>
                                          <option value="empal.com">empal.com</option>
                                          <option value="hanmir.com">hanmir.com</option>
                                          <option value="hanafos.com">hanafos.com</option>
                                          <option value="hotmail.com">hotmail.com</option>
                                          <option value="lycos.co.kr">lycos.co.kr</option>
                                          <option value="nate.com">nate.com</option>
                                          <option value="naver.com">naver.com</option>
                                          <option value="daum.net">daum.net</option>
                                          <option value="hanmail.net">hanmail.net</option>
                                          <option value="gmail.com">gmail.com</option>
                                          <option value="paran.com">paran.com</option>
                                          <option value="yahoo.co.kr">yahoo.co.kr</option>
                                          <option value="etc">직접입력
                                    </select>
                                    <input type=text size=20 name="email3" id="email3" value="" style="width:120px;display:none;" onblur="emailcheck()"><br/>
                                    <span id="ems"></span><br/>
                                    <span>가입과 동시에 인증메일 발송. 정확히 기재해주세요.</span>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>전화번호</td>
                                    <td><input type="text" size="4" maxlength="4" style="width: 45px" name="tel">
                                       - <input type="text" size="4" maxlength="4" style="width: 45px" name="tel2">
                                       - <input type="text" size="4" maxlength="4" style="width: 45px" name="tel3"><br/><span id="tels"></span></td>
                                 </tr>
                                 <tr>
                                    <td>주소</td>
                                    <td>
                                      <input type=text size=3 name="zip1" style="width: 50px" readonly> - 
                                               <input type=text size=3 name="zip2" style="width: 50px" readonly>
                                               <a href="javascript:FindZip(0)"><img align="absmiddle" src="/homepage/images/wupeun_bunho.jpg" border="0"></a><br/>
                                               <input type=text size=50 name="juso" style="width: 250px" maxlength="200" readonly>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>상세주소</td>
                                    <td><input type="text" style="width: 250px" name="addr" id="addr"/><br/><span id="ads"></span></td>
                                 </tr>
                                 <tr>
                                    <td>생년월일</td>
                                    <td><input type="text" size="5" maxlength="4" style="width: 45px" name="year">년
                                    <input type="text" size="4" maxlength="2" style="width: 45px" name="month">월
                                    <input type="text" size="4" maxlength="2" style="width: 45px" name="day">일<br/><span id="bus"></span>
                                 </tr>
                                 <tr>
                                    <td>성별</td>
                                    <td>
                                          <input type="radio" name="sex" style="width: 45px" value="man" checked="checked" >남성
                                          <input type="radio" name="sex" style="width: 45px" value="woman">여성
                                    </td>
                                 </tr>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  <br /> <br />
                  <div class="container">
                     <div class="row">
                        <div class="span12" align="center" >
                           <!-- <div class="span-cus">
                              <input type="button" name="exam2" value="세부정보 입력" onclick="javascript:location.href='member_join2.jsp';" class="btn-custom" style="width: 150px; height: 35px" /> <br />
                              <br />
                              <p align="left">*세부정보 입력시에만 이성추천을 해드립니다.</p>
                              <P align="left">*추후 수정 및 추가 가능 합니다.</P>
                           </div> -->
                           <div class="span-cus3"></div>
                           
                           <div class="span-cus">                           
                              <input type="button" id="subtt" name="exam2" value="가입 완료" class="btn-custom" style="width: 150px; height: 35px" onclick="javascript:Id();" />
                           <!-- <a href="javascript:Id()">가입 완료</a> -->                              
                           </div>                           
                           <div class="span-cus">
                              <input type="button" name="exam2" value="취소" class="btn-custom" style="width: 150px; height: 35px" />
                           </div>
                        </div>
                     </div>
                  </div>
                  </form>
               </div>
            </section>
            <!-- ASIDE NAV 2 -->
         </div>
      </div>
   </div>
   <!-- FOOTER -->
   <footer class="box">
      <jsp:include page="/footer.html" />
   </footer>

</body>
</html>