<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8" import="java.util.*"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width">
<title>Responsive Aside website template</title>
<link type="text/css" rel="stylesheet" href="/homepage/css/components.css">
<link type="text/css" rel="stylesheet" href="/homepage/css/responsee2.css">
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
<script type = "text/javascript" src = "/homepage/js/ajax.js"></script>
<script src="/homepage/js/member_join.js"></script>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="dto" value="${requestScope.dto }"></c:set>
<c:set var="fashion" value="${requestScope.fashion }"></c:set>
<c:set var="fashion2" value="${requestScope.fashion2 }"></c:set>
<script>
function name() {
	var check = "${dto.blood}";
	var check2 = "${fashion[0]}";
	var check3 = null;
	<c:if test="${fn:length(fashion) >=2}">
		check3 = "${fashion[1]}";
	</c:if>
	var check4 = null;
	<c:if test="${fn:length(fashion) >=3}">
	check4 = "${fashion[2]}";
	</c:if>
	var check5 = "${dto.style}";
	var check6 = "${dto.hobby}";
	var check7 = "${dto.blood2}";
	var check8 = "${fashion2[0]}";
	var check9 = null;
	<c:if test="${fn:length(fashion2) >=2}">
		check9 = "${fashion2[1]}";
	</c:if>
	var check10 = null;
	<c:if test="${fn:length(fashion2) >=3}">
	check10 = "${fashion2[2]}";
	</c:if>
	var check11 = "${dto.style2}";
	var check12 = "${dto.hobby2}";
	
	for(var i=0; i<4; i++){
		if(document.form1.blood[i].value == check)
		document.form1.blood[i].checked = true;	
		if(document.form1.blood2[i].value == check)
			document.form1.blood2[i].checked = true;	
	}	
	for(var i=0; i<28; i++){
		if(document.form1.fashion[i].value == check2)
			document.form1.fashion[i].checked = true;
		if(document.form1.fashion[i].value == check3)
			document.form1.fashion[i].checked = true;
		if(document.form1.fashion[i].value == check4)
			document.form1.fashion[i].checked = true;
		if(document.form1.fashion2[i].value == check8)
			document.form1.fashion2[i].checked = true;
		if(document.form1.fashion2[i].value == check9)
			document.form1.fashion2[i].checked = true;
		if(document.form1.fashion2[i].value == check10)
			document.form1.fashion2[i].checked = true;
	}	
 	for(var i=0; i<9; i++){
		if(document.form1.style[i].value == check5)
		document.form1.style[i].checked = true;	
		if(document.form1.style2[i].value == check11)
			document.form1.style2[i].checked = true;	
	}	
 	for(var i=0; i<7; i++){
		if(document.form1.hobby[i].value == check6)
		document.form1.hobby[i].checked = true;	
		if(document.form1.hobby2[i].value == check12)
			document.form1.hobby2[i].checked = true;	
	}	
}
</script>
</head>
<body class="size-1140" onload="name()">
   <!-- TOP NAV WITH LOGO -->
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
               <div class="container">
                  <!-- <div class="row"> -->
                     <h2>세부정보 입력</h2>
                     <div class="span12">
                        <h3>본인의 세부정보</h3>
                        <form name="form1" action="/homepage/mupdate2.me" method="post">
                        <table align="center">
                           <tr>
                              <td style="width: 50px">혈액형</td>
                              <td>
                                 <input type="radio" id="blood" name="blood" value="A">　A　
                                 <input type="radio" id="blood" name="blood" value="B">　B　
                                 <input type="radio" id="blood" name="blood" value="O">　O　
                                 <input type="radio" id="blood" name="blood" value="AB">　AB 
                                 <br/><span id="blos"></span>
                              </td>
                           </tr>
                           <tr>
                              <td>&nbsp;</td>
                           </tr>
                           <tr>
                              <td>신장</td>
                              <td>
                                 <div>
                                    <input type="text" id="height" name="height" value="${dto.height}" maxlength="3" />Cm
                                    <span id="hes"></span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>체중</td>
                              <td>
                                 <div>
                                    <input type="text" id="weight" name="weight" value="${dto.weight}" maxlength="3" />Kg
                                    <span id="wes"></span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>&nbsp;</td>
                           </tr>
                           <tr>
                              <td colspan="2">본인의 패션 스타일(글위에 마우스를 올리면 설명이 나옵니다. 최대 3개까지 선택 가능합니다.)</td>
                           </tr>
                           <tr>
                              <td colspan="2">
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="빈티지" onclick="CountChecked(this)"><span id="1">빈티지룩</span>　　
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="클래식" onclick="CountChecked(this)"><span id="2">클래식　</span>　　  
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="내츄럴" onclick="CountChecked(this)"><span id="3">내츄럴　　　  </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="엘레강스" onclick="CountChecked(this)"><span id="4">엘레강스　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="로맨틱" onclick="CountChecked(this)"><span id="5">로멘틱　　 </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="댄디" onclick="CountChecked(this)"><span id="6">댄디　　　　  </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="모던" onclick="CountChecked(this)"><span id="7">모던　　　　  </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="가르송" onclick="CountChecked(this)"><span id="8">가르송　　　 </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="에스닉" onclick="CountChecked(this)"><span id="9">에스닉　　　 </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="시스루" onclick="CountChecked(this)"><span id="10">시스루　　　 </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="매니시" onclick="CountChecked(this)"><span id="11">매니시　　　 </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="밀리터리" onclick="CountChecked(this)"><span id="12">밀리터리　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="히피" onclick="CountChecked(this)"><span id="13">히피　　　  </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="프리미티브룩" onclick="CountChecked(this)"><span id="14">프리미티브룩</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="양키" onclick="CountChecked(this)"><span id="15">양키　　　　     </span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="오리엔탈리즘" onclick="CountChecked(this)"><span id="16">오리엔탈리즘</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="페미니즘" onclick="CountChecked(this)"><span id="17">페미니즘　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="패전트" onclick="CountChecked(this)"><span id="18">패전트　　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="컨트리" onclick="CountChecked(this)"><span id="19">컨트리　　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="킹키" onclick="CountChecked(this)"><span id="20">킹키　　　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="시누아즈리" onclick="CountChecked(this)"><span id="21">시누아즈리</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="시티캐주얼" onclick="CountChecked(this)"><span id="22">시티캐주얼　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="베어" onclick="CountChecked(this)"><span id="23">베어　　　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="머린" onclick="CountChecked(this)"><span id="24">머린　　　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="모즈" onclick="CountChecked(this)"><span id="25">모즈　　　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="뉴클랙식" onclick="CountChecked(this)"><span id="26">뉴클래식　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="시크" onclick="CountChecked(this)"><span id="27">시크　　　　</span>
                                 <input type="checkbox" id="fashion" name="fashion" style="width: 45px" value="프리스타일" onclick="CountChecked(this)"><span id="28">프리스타일　</span>   
                                                                                                   
                              </td> 
                           </tr>
                           <tr height="20px">
                              <td colspan="2" id="fa"></td>
                           </tr>
                           <tr>
                              <td colspan="2">성격</td>
                           </tr>
                           <tr>
                              <td colspan="2">
                                 <input type="radio" name="style" id="style" value="도도한"/>　도도한　
                                 <input type="radio" name="style" id="style" value="섹시한"/>　섹시한　
                                 <input type="radio" name="style" id="style" value="귀여운"/>　귀여운　
                                 <input type="radio" name="style" id="style" value="차가운"/>　차가운　
                                 <input type="radio" name="style" id="style" value="시크한"/>　시크한　
                                 <input type="radio" name="style" id="style" value="까칠한"/>　까칠한　
                                 <input type="radio" name="style" id="style" value="로맨틱"/>　로맨틱　
                                 <input type="radio" name="style" id="style" value="유머러스"/>　유머러스　
                                 <input type="radio" name="style" id="style" value="자상한"/>　자상한
                                 <br/><span id="sts"></span>
                              </td>
                           </tr>
                           <tr height="10px"></tr>
                           <tr>
                              <td colspan="2">취미</td>
                           </tr>
                           <tr>
                              <td colspan="2">
                                 <input type="radio" name="hobby" id="hobby" value="공예"/><span id="29">　공예　</span>
                                 <input type="radio" name="hobby" id="hobby" value="창작"/><span id="30">　창작　</span>
                                 <input type="radio" name="hobby" id="hobby" value="수집"/><span id="31">　수집　</span>
                                 <input type="radio" name="hobby" id="hobby" value="스포츠"/><span id="32">　스포츠　</span>
                                 <input type="radio" name="hobby" id="hobby" value="꾸미기"/><span id="33">　기르기, 꾸미기　</span>
                                 <input type="radio" name="hobby" id="hobby" value="자기개발"/><span id="34">　자기개발　</span>
                                 <input type="radio" name="hobby" id="hobby" value="기타"/><span id="35">　기타　</span>
                                 <br/><span id="hos"></span>
                              </td>
                           </tr>
                           <tr height="20px">
                              <td colspan="2" id="fa2"></td>
                           </tr>
                        </table>
                     </div>
                  <!-- </div> -->
               </div>
               <br />
               <div class="container">
                  <!-- <div class="row"> -->
                     <div class="span12">
                        <h3>선호하는 이성의 세부정보</h3>
                        <table align="center">
                           <tr>
                              <td style="width: 50px">혈액형</td>
                              <td>
                                 <input type="radio" id="blood2" name="blood2" value="A">　A　
                                 <input type="radio" id="blood2" name="blood2" value="B">　B　
                                 <input type="radio" id="blood2" name="blood2" value="O">　O　
                                 <input type="radio" id="blood2" name="blood2" value="AB">　AB 
                                 <br/><span id="blos2"></span>　
                              </td>
                           </tr>
                           <tr>
                              <td>&nbsp;</td>
                           </tr>
                           <tr>
                              <td>최대 나이</td>
                              <td>
                                 <div>
                                    <input type="text" name="age" value="${dto.age}" maxlength="2"/>살
                                    <br/><span id="age2"></span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>최소 신장</td>
                              <td>
                                 <div>
                                    <input type="text" name="height2" value="${dto.height2}" maxlength="3"/>Cm
                                    <br/><span id="hes2"></span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>최대 체중</td>
                              <td>
                                 <div>
                                    <input type="text" name="weight2" value="${dto.weight2}" maxlength="3"/>Kg
                                    <br/><span id="wes2"></span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>&nbsp;</td>
                           </tr>
                           <tr>
                              <td colspan="2">본인의 패션 스타일(글위에 마우스를 올리면 설명이 나옵니다. 최대 3개까지 선택 가능합니다.)</td>
                           </tr>
                           <tr>
                              <td colspan="2">
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="빈티지" onclick="CountChecked2(this)"><span id="36">빈티지룩</span>　　
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="클래식" onclick="CountChecked2(this)"><span id="37">클래식　</span>　　  
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="내츄럴" onclick="CountChecked2(this)"><span id="38">내츄럴　　　  </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="엘레강스" onclick="CountChecked2(this)"><span id="39">엘레강스　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="로맨틱" onclick="CountChecked2(this)"><span id="40">로멘틱　　 </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="댄디" onclick="CountChecked2(this)"><span id="41">댄디　　　　  </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="모던" onclick="CountChecked2(this)"><span id="42">모던　　　　  </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="가르송" onclick="CountChecked2(this)"><span id="43">가르송　　　 </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="에스닉" onclick="CountChecked2(this)"><span id="44">에스닉　　　 </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="시스루" onclick="CountChecked2(this)"><span id="45">시스루　　　 </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="매니시" onclick="CountChecked2(this)"><span id="46">매니시　　　 </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="밀리터리" onclick="CountChecked2(this)"><span id="47">밀리터리　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="히피" onclick="CountChecked2(this)"><span id="48">히피　　　  </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="프리미티브룩" onclick="CountChecked2(this)"><span id="49">프리미티브룩</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="양키" onclick="CountChecked2(this)"><span id="50">양키　　　　     </span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="오리엔탈리즘" onclick="CountChecked2(this)"><span id="51">오리엔탈리즘</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="페미니즘" onclick="CountChecked2(this)"><span id="52">페미니즘　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="패전트" onclick="CountChecked2(this)"><span id="53">패전트　　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="컨트리" onclick="CountChecked2(this)"><span id="54">컨트리　　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="킹키" onclick="CountChecked2(this)"><span id="55">킹키　　　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="시누아즈리" onclick="CountChecked2(this)"><span id="56">시누아즈리</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="시티캐주얼" onclick="CountChecked2(this)"><span id="57">시티캐주얼　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="베어" onclick="CountChecked2(this)"><span id="58">베어　　　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="머린" onclick="CountChecked2(this)"><span id="59">머린　　　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="모즈" onclick="CountChecked2(this)"><span id="60">모즈　　　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="뉴클랙식" onclick="CountChecked2(this)"><span id="61">뉴클래식　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="시크" onclick="CountChecked2(this)"><span id="62">시크　　　　</span>
                                 <input type="checkbox" id="fashion2" name="fashion2" style="width: 45px" value="프리스타일" onclick="CountChecked2(this)"><span id="63">프리스타일　</span>                                                                     
                              </td> 
                           </tr>
                           <tr height="20px">
                              <td colspan="2" id="fa3"></td>
                           </tr>
                           <tr>
                              <td colspan="2">성격</td>
                           </tr>
                           <tr>
                              <td colspan="2">
                                 <input type="radio" name="style2" id="style2" value="도도한"/>　도도한　
                                 <input type="radio" name="style2" id="style2" value="섹시한"/>　섹시한　
                                 <input type="radio" name="style2" id="style2" value="귀여운"/>　귀여운　
                                 <input type="radio" name="style2" id="style2" value="차가운"/>　차가운　
                                 <input type="radio" name="style2" id="style2" value="시크한"/>　시크한　
                                 <input type="radio" name="style2" id="style2" value="까칠한"/>　까칠한　
                                 <input type="radio" name="style2" id="style2" value="로맨틱"/>　로맨틱　
                                 <input type="radio" name="style2" id="style2" value="유머러스"/>　유머러스　
                                 <input type="radio" name="style2" id="style2" value="자상한"/>　자상한　
                                 <br/><span id="sts2"></span>
                              </td>
                           </tr>
                           <tr height="10px"></tr>
                           <tr>
                              <td colspan="2">취미</td>
                           </tr>
                           <tr>
                              <td colspan="2">
                                 <input type="radio" name="hobby2" id="hobby2" value="공예"/><span id="64">　공예　</span>
                                 <input type="radio" name="hobby2" id="hobby2" value="창작"/><span id="65">　창작　</span>
                                 <input type="radio" name="hobby2" id="hobby2" value="수집"/><span id="66">　수집　</span>
                                 <input type="radio" name="hobby2" id="hobby2" value="스포츠"/><span id="67">　스포츠　</span>
                                 <input type="radio" name="hobby2" id="hobby2" value="꾸미기"/><span id="68">　기르기, 꾸미기　</span>
                                 <input type="radio" name="hobby2" id="hobby2" value="자기개발"/><span id="69">　자기개발　</span>
                                 <input type="radio" name="hobby2" id="hobby2" value="기타"/><span id="70">　기타　</span>
                                 <br/><span id="hos2"></span>
                              </td>
                           </tr>
                           <tr height="20px">
                              <td colspan="2" id="fa4"></td>
                           </tr>
                        </table>
                     </div>
                  <!-- </div> -->
               </div>
               <br />
               <div class="container">
                  <div class="row">
                     <div class="span12">
                        <div align="center">
                           <input class="btn-custom" type="button" value="수정 완료" id="subttt" style="width: 150px; height: 35px" onclick="fnSe()" />&nbsp;&nbsp;&nbsp; <input
                              class="btn-custom" type="reset" value="취소"
                              style="width: 150px; height: 35px" onclick="history.back()" />
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