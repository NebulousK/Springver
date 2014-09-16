/**
 * ajax모듈 파일
 */
var maxChecked = 3;   //선택가능 갯수
var totalChecked = 0; // 설정 끝
var maxChecked2 = 3;   //선택가능 갯수
var totalChecked2 = 0; // 설정 끝
function CountChecked(field) {
    if (field.checked)
        totalChecked += 1;
    else
        totalChecked -= 1;
    if (totalChecked > maxChecked) {
        alert ("최대 3개 까지만 가능합니다.");
    field.checked = false;
    totalChecked -= 1;
    }
    
}
function CountChecked2(field) {
    if (field.checked)
        totalChecked2 += 1;
    else
        totalChecked2 -= 1;
    if (totalChecked2 > maxChecked2) {
        alert ("최대 3개 까지만 가능합니다.");
    field.checked = false;
    totalChecked -= 1;
    }
    
}
function ResetCount(){
    totalChecked = 0;
}
window.onload = function()
{	
	for(var i=1; i<71; i++){
	    var btn = new ValidButton(eval(i));	
	}
}

var ajax = {};
ajax.xhr = {};

ajax.xhr.Request = function(url, params, callback, method) {
	this.url = url;
	this.params = params;
	this.callback = callback;
	this.method = method;
	this.send();
}

ajax.xhr.Request.prototype = {
	getXMLHttpRequest : function() {
		if (window.ActiveXObject) {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					return new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e1) {
					return null;
				}
			}
		} else if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else {
			return null;
		}
	},

	send : function() {
		this.req = this.getXMLHttpRequest();

		var httpMethod = this.method ? this.method : 'GET';

		if (httpMethod != 'GET' && httpMethod != 'POST') {
			httpMethod = 'GET';
		}
		var httpParams = (this.params == null || this.params == '') ? null
				: this.params;
		var httpUrl = this.url;

		if (httpMethod == 'GET' && httpParams != null) {
			httpUrl = httpUrl + "?" + httpParams;
		}
		this.req.open(httpMethod, httpUrl, true);
		this.req.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded');
		var request = this;

		this.req.onreadystatechange = function() {
			request.onStateChange.call(request);
		}
		this.req.send(httpMethod == 'POST' ? httpParams : null);
	},

	onStateChange : function() {
		this.callback(this.req);
	}
}

ajax.Event = {};

ajax.Event.addListener = function(element, name, observer, useCapture) {
	useCapture = useCapture || false;

	if (element.addEventListener) {
		element.addEventListener(name, observer, useCapture);
	} else if (element.attachEvent) {
		element.attachEvent('on' + name, observer);
	}
}

ajax.Event.removeListener = function(element, name, observer, useCapture) {
	useCapture = useCapture || false;

	if (element.removeEventListener) {
		element.removeEventListener(name, observer, useCapture);
	} else if (element.detachEvent) {
		element.detachEvent('on' + name, observer);
	}
}

ajax.Event.getTarget = function(event) {
	if (event == null)
		return null;
	if (event.target)
		return event.target;
	else if (event.srcElement)
		return event.srcElement;

	return null;
}

ajax.Event.getMouseXY = function(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;

	var dd = document.documentElement;
	var db = document.body;

	if (dd) {
		mouseX += dd.scrollLeft;
		mouseY += dd.scrollTop;
	} else if (db) {
		mouseX += db.scrollLeft;
		mouseY += db.scrollTop;
	}
	return {
		x : mouseX,
		y : mouseY
	};
}

ajax.Event.isLeftButton = function(event) {
	return (event.which) ? event.which == 1 && event.button == 0
			: (event.type == 'click') ? event.button == 0 : event.button == 1;
}

ajax.Event.isRightButton = function(event) {
	return event.button == 2;
}

ValidButton = function(elementId)
{
      this.element = document.getElementById(elementId);
 	 
      var btn = this;
      var overFunc = function()
      {
            btn.doMouseOver.apply(btn, arguments);
      }
 
      var outFunc = function()
      {
            btn.doMouseOut.apply(btn, arguments);
      } 
      ajax.Event.addListener(this.element, "mouseover", overFunc);
      ajax.Event.addListener(this.element, "mouseout", outFunc);
}

ValidButton.prototype = 
{
      doMouseOver: function(e)
      {
    	  	var target = ajax.Event.getTarget(event);
    	  	var id = target.id;
    	  	var data;
    	  	switch (id) {
			case "1":
				data = "빈티지 룩 ( Vintage Look ): 왠만하면 모두가 알 수 있는 스타일로 벼룩시장이나 보세가게에서 오래된 듯한 옷들을 크로스 코디네이터 해서 입는 스타일입니다.<br/> 국내에서는 한참 외국의 벼룩시장에서 구입한 옷들이 들어오고 점차 보세가게들이 많아지면 청소년들이 항시 단조로움을 싫어하여 자신의 개성을 살리기 위한 옷으로 일본에 아기자기한 스타일이나 품위없이 입는 옷들이 많은 영향을 받았습니다.<br/> 대체적으로 낡은 느낌의 옷이라 보면 되지만 절때 지저분한것과는 틀립니다.<br/> '집에서 입다 헤진 옷 이런거 아닙니다!'";
				document.getElementById("fa").innerHTML = data;
				break;
			case "2":
				data = "클래식 (classic) : 기본적이면서 전통적이라는 의미로 오랜기간동안 꾸준히 존재하는 스타일로 패션세계에서는 새로운 유행과 클래식, 스타일로서 끊임없이 반복되어지고 있다.<br/> 가장 흔한 예로 샤넬슈트를 들 수 있다";
				document.getElementById("fa").innerHTML = data;
				break;
			case "3":
				data = "내츄럴 (natural) : 자연의, 꾸밈없다는 의미로써 패션에는 한정된 스타일이란게 없다는것처럼 자신의 언제든 편안하게 입을 수 있는 라이프스타일로써 요즘에는 대표적으로 청바지에 흰티를 말 할 수 있다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "4":
				data = "엘레강스 (elegance) : 불어로 ' 우아한, 고상한, 맵시 ' 란 뜻으로 성인을 대상으로 페미닌 풍을 주제로하는 클래식하고 컨서버 리치한 패션감각을 말한다.<br/> 보통 요즘에는 파티의상으로 많이들 사용하고 있으며 연예인들 시상식이나 오피스룩으로도 많이 활용된다.";	
				document.getElementById("fa").innerHTML = data;
				break;
			case "5":
				data = "로맨틱 (romantic) : 낭만적이고 감미롭고 상냥함이 느껴지는 이미지의 디자인 또는 회고적인 디자인을 말한다.<br/> 최근 우리는 로맨틱이나 낭만이라고 하면 핑크빛이나 붉은 노을 빛을 연상케 하기에 그런스타일에 옷들이 유행을 타고 있다.";
				document.getElementById("fa").innerHTML = data;
				break;	
			case "6":
				data = "댄디 (dandy) : 댄디는 보통 남성의 엘레강스를 의미한다고 볼 수 있다.<br/> 현대에는 ' 멋쟁이, 맵시꾼 ' 이라는 멋진 남성을 뜻한다고 볼 수 있다.<br/> 유럽풍 스타일로도 볼 수 있는 이 스타일은 19세기 브럼멜 (beaummell)로 알려진 죠지 브라이언 브럼멜이 그 대표적인 인물로 순백의 마로 만든 셔츠와 장식이 없는 의복을 꼭 맞게 착용하였으며, 이후 이것은 영국 시사복 유행의 기본 운칙이 되었다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "7":
				data = "모던 (modern) : 현대적이고 심플한 깔끔한 스타일을 말한다.<br/> 현대인에게 가장 즐기는 스타일이며 옷이 사람체형에 맞게 떨어지는 라인을 대표적으로 들 수 있다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "8":
				data = "가르송 룩 (garconne look) : 가르송은 프랑스어로 소년다운 스타일에서 여성다움을 추구하는 패션을 말한다.<br/> 남성미의 옷이라고 보면 된다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "9":
				data = "에스닉 (ethnic) : 유럽 이외의 세계 여러 나라 민속 의상과 민족 고유의 염색, 직물, 자수, 액세서리 등에서 영감을 얻어 디자인한 패션을 말한다. 보통 무슨풍? 이런거라고 보면 된다";
				document.getElementById("fa").innerHTML = data;
				break;
			case "10":
				data = "시스루룩 (see-through look) : 시스루 모드 , 누디룩, 베어룩이라고도 한다. 조젯 오건디 등 비치는 옷감이나 레이스를 소재로 사용하여 블라우스 셔츠 원피스 등을 만드는데, 몸매의 아름다움을 표하는 부드럽고 여성다운 패션이다. 1960년대 후반부터 유행하기 시작하였다";
				document.getElementById("fa").innerHTML = data;
				break;	
			case "11":
				data = "매니시 (mannish) : 남성풍. 닌자와 같은 여성이라는 의미. 패션에서 남성복 디자인을 여성복에 적용한 스타일. 1930년대의 여배우 디트리히의 팡탈롱슈트가 매니시 스타일의 시초가 된다. 5년 이후 유행한 스리 세트 슈트. 1980년대의 남성복풍 등도 이러한 경향이며 섬세한 액세서리를 코디네이트 하여 역으로 강한 여성의 매력을 표현하게 된다";
				document.getElementById("fa").innerHTML = data;
				break;
			case "12":
				data = "밀리터리 룩 (military look) : 군복의 이미지를 느끼는 스타일.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "13":
				data = " 히피(hippie) : 60년대 미국을 중심으로 일어난 자연과 평화를 추구하는 청년들에게 볼 수 있는 라이프한 복장을 말한다. 남성의 장발, 수염, 진 등 그때의 포멀에 대항한 스타일";
				document.getElementById("fa").innerHTML = data;
				break;
			case "14":
				data = "프리미티브룩 (primitive look) : 문명이 고도로 발달한 도시 생활에 염증을 느껴 원시로 돌아가고 싶은 욕망에서 나타난 패션.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "15":
				data = "양키 룩 : 70년대에 일본에서 유행한 아메리카 50년대 패션을 말한다.";
				document.getElementById("fa").innerHTML = data;
				break;	
			case "16":
				data = "오리엔탈리즘 스타일 (orientalism style) : 터키, 이집트, 페르시아, 인도 등의 풍속을 모티브로 동양적인 신비를 나타낸 패션.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "17":
				data = "페미니즘 (feminsm) : 여성의 사회상, 정치상, 법률상의 권리 확장을 주장하는 설. 여성성의 극대화.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "18":
				data = "페전트 룩 (peasant look) : 각국의 농민이 착용한 농민복에서 힌트를 얻었으며, 대상이 되는 나라는 유행에 따라 다르나 북유럽, 동유럽, 서유럽, 남아메리카 등 그나라 특유의 옷감, 색, 무늬 등을 사용하고 장식을 섬세하게 한 손세공의 느낌이 신선하게 부각되어 현대 패션의 원천이 되기도 한다. 유럽 농민이 입었던 풍성한 목면 블라우스, 베스트, 개더스커트, 에이프런 등의 디테일이 특징이며, 최근 민속복에 포함되어 사용되기도 한다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "19":
				data = "컨트리 룩 : 영국 신사가 시골에서 지낼때 가벼운 기분의 의상. 트위드지나 무명의 옷감을 사용한다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "20":
				data = "킹키 룩(kinky look) : 킹키는 이상한, 색이 다르다는 의미, 60년대 중엽에 런던의 킹스 로드를 중심으로 일어난 패션으로서 미니 스커트, 화려한 무늬의 천 등을 말한다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "21":
				data = "시누아즈리룩 (chinoiserie look) : 차이니즈 룩과 같은말로 중국풍의 패션.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "22":
				data = "시티 캐주얼 (city casual) : 캐주얼 감각의 시티 룩 또는 도시 감각의 캐주얼 룩, 원래 시티 감각, 캐주얼 감각은 대비되는 것이나 이것을 병립시키는 것";
				document.getElementById("fa").innerHTML = data;
				break;	
			case "23":
				data = "베어 룩 (bare look) : 베어는 '노출된, 벌거벗은' 의 뜻으로 패션 용어로 쓰일 때에는 살갗을 부분적으로 노출시킨것을 말한다.<br/> 예를 들면 어깨를 들어낸 베어숄더 등을 드러낸 베어백, 배 부분을 드러낸 베어 미드리프 등이 있다.<br/> 베어 룩을 연출하는 것으로 여름철 가장 쉽게 볼 수 있는 아이 베어 톱이다.<br/> 이밖에도 컬렉션에서 엉덩이를 부분적으로 드러낸 베어 힙도 가끔 볼 수 이다.<br/> 하지만 얇고 투명한 소재를 사용해 살갗이 비치는 효과를 주는 시스루룩이나 몸을 완전히 노출시키 누드룩과는 구별된다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "24":
				data = "머린 룩 (marine look) : 바다, 선원, 해병, 어부 등 바다와 관련된 모티브를 활용한 패션, 세일러 재킷, 세일러 팬츠, 요트 탈때의 복장 및 해변에서 입는 쇼트 팬츠, 보트 네크라인 티셔츠, 스웨터 등이 있다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "25":
				data = "모즈 룩 (mods look) : 런던의 카너비 스트리트에서 생긴 유행으로 롱 헤어나 꽃무늬 셔츠, 콘티넨탈 슈트등을 말한다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "26":
				data = "뉴 클래식(new classic) : 새로운 현대적인 감각에 기초를 둔 고전적 스타일을 말한다.";
				document.getElementById("fa").innerHTML = data;
				break;
			case "27":
				data = " 시크(chic) : 세련되고 멋진 패션";
				document.getElementById("fa").innerHTML = data;
				break;
			case "28":
				data = " 프리스타일 룩 : 나만의 개성을 가진 패션!";
				document.getElementById("fa").innerHTML = data;
				break;
			case "29":
				data = "리본 공예, 와이어 공예, 비즈 공예, 점토 공예, 종기 공예 (접기, 오리기 등), 양초 만들기, 도자기 공예, 가죽 공예, 스탬프 공예, 목공예, 석공예, 철공예, 수예, 자수, 퀼트, 펠트 공예, 얼음 공예, 매듭, 인형옷 만들기, 비누 만들기, 화장품 만들기, 홈패션 만들기, 리본 만들기, 미니어추어 만들기, 악세사리 (반지, 목걸이, 리본 등) 만들기, 스탬프 만들기, 정비 (자동차, 자전거), 집짓기, 전자 조립 (앰프 등 전자회로), 모형, 모델, RC 만들기, 마이크로 콘트롤러 (예: 아두이노), 인테리어, 가구 만들기, CAD/CAM, 팬시용품 만들기, 요리 및 음식 : 제과, 제빵, 초콜릿, 사탕, 주류 (맥주, 와인, 칵테일 등), 커피";
				document.getElementById("fa2").innerHTML = data;
				break;
			case "30":
				data = "사진, 그리기 (동서양화, 캐리커처, 만화, 모래그림 등), 문학활동 (시, 소설, 수필 쓰기), 작사, 작곡, 편곡, 손글씨 (붓, 펜, 예쁜글씨, POP 등), 젠탱글, 꽃꽂이, 스텐실, 포크아트, 페이스 페인팅, 초크아트, 풍선 불기,  판화, 그래피티, 염색";
				document.getElementById("fa2").innerHTML = data;
				break;
			case "31":
				data = "우표, 화폐, 만년필, 칼, 수석, 미니카, 시계, 술잔 등";
				document.getElementById("fa2").innerHTML = data;
				break;
			case "32":
				data = "구기종목 (축구, 테니스, 농구, 족구, 배드민턴, 탁구, 게이트볼, 당구, 포켓볼, 야구 등), 자전거, 인라인, 마라톤, 수영, 무술, 검도, 펜싱, 댄스, 등산, 스킨스쿠버, 패러글라이딩, 암벽 타기, 야마카시, 비보이, 스키, 보드, 요가, 권투, 골프, 승마, 줄넘기, 요트, 수상스키, 서바이벌 게임, e스포츠 (게임류), 아크로바틱, 철인3종 등";
				document.getElementById("fa2").innerHTML = data;
				break;
			case "33":
				data = "애완동물 (강아지, 곤충, 물고기 등), 식물 (분재, 난, 채소 등), 텃밭 꾸미기, 수족관 꾸미기, 다이어리 꾸미기 등";
				document.getElementById("fa2").innerHTML = data;
				break;
			case "34":
				data = "독서, 어학, 자원봉사, 특정 곤충 전문가 되기 (예: 벌, 모기 등), 자격증 따기 (예: 수상구조요원, PC정비사, 이용사 등), 수화 배우기 등";
				document.getElementById("fa2").innerHTML = data;
				break;
			case "35":
				data = "악기 연주 (피아노, 바이올린, 드럼, 오카리나 등), 레고, 퍼즐, 바둑, 장기, 체스, 마작, 카드놀이류, 낚시, 별보기 (천문), 연극 활동, 오디오, 여행, 마술, 요요, HAM, 노래 부르기, 최신기기 얼리어댑터 활동, 맛집 찾기, 수지침, 자물쇠 열기, 노래 부르기, 비트박스, 프로그래밍, 감상 : 영화 감상, 음악 감상, 미술품 감상, 공연 감상 (연극, 뮤지컬 등)";
				document.getElementById("fa2").innerHTML = data;
				break;
			case "36":
				data = "빈티지 룩 ( Vintage Look ): 왠만하면 모두가 알 수 있는 스타일로 벼룩시장이나 보세가게에서 오래된 듯한 옷들을 크로스 코디네이터 해서 입는 스타일입니다.<br/> 국내에서는 한참 외국의 벼룩시장에서 구입한 옷들이 들어오고 점차 보세가게들이 많아지면 청소년들이 항시 단조로움을 싫어하여 자신의 개성을 살리기 위한 옷으로 일본에 아기자기한 스타일이나 품위없이 입는 옷들이 많은 영향을 받았습니다.<br/> 대체적으로 낡은 느낌의 옷이라 보면 되지만 절때 지저분한것과는 틀립니다.<br/> '집에서 입다 헤진 옷 이런거 아닙니다!'";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "37":
				data = "클래식 (classic) : 기본적이면서 전통적이라는 의미로 오랜기간동안 꾸준히 존재하는 스타일로 패션세계에서는 새로운 유행과 클래식, 스타일로서 끊임없이 반복되어지고 있다.<br/> 가장 흔한 예로 샤넬슈트를 들 수 있다";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "38":
				data = "내츄럴 (natural) : 자연의, 꾸밈없다는 의미로써 패션에는 한정된 스타일이란게 없다는것처럼 자신의 언제든 편안하게 입을 수 있는 라이프스타일로써 요즘에는 대표적으로 청바지에 흰티를 말 할 수 있다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "39":
				data = "엘레강스 (elegance) : 불어로 ' 우아한, 고상한, 맵시 ' 란 뜻으로 성인을 대상으로 페미닌 풍을 주제로하는 클래식하고 컨서버 리치한 패션감각을 말한다.<br/> 보통 요즘에는 파티의상으로 많이들 사용하고 있으며 연예인들 시상식이나 오피스룩으로도 많이 활용된다.";	
				document.getElementById("fa3").innerHTML = data;
				break;
			case "40":
				data = "로맨틱 (romantic) : 낭만적이고 감미롭고 상냥함이 느껴지는 이미지의 디자인 또는 회고적인 디자인을 말한다.<br/> 최근 우리는 로맨틱이나 낭만이라고 하면 핑크빛이나 붉은 노을 빛을 연상케 하기에 그런스타일에 옷들이 유행을 타고 있다.";
				document.getElementById("fa3").innerHTML = data;
				break;	
			case "41":
				data = "댄디 (dandy) : 댄디는 보통 남성의 엘레강스를 의미한다고 볼 수 있다.<br/> 현대에는 ' 멋쟁이, 맵시꾼 ' 이라는 멋진 남성을 뜻한다고 볼 수 있다.<br/> 유럽풍 스타일로도 볼 수 있는 이 스타일은 19세기 브럼멜 (beaummell)로 알려진 죠지 브라이언 브럼멜이 그 대표적인 인물로 순백의 마로 만든 셔츠와 장식이 없는 의복을 꼭 맞게 착용하였으며, 이후 이것은 영국 시사복 유행의 기본 운칙이 되었다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "42":
				data = "모던 (modern) : 현대적이고 심플한 깔끔한 스타일을 말한다.<br/> 현대인에게 가장 즐기는 스타일이며 옷이 사람체형에 맞게 떨어지는 라인을 대표적으로 들 수 있다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "43":
				data = "가르송 룩 (garconne look) : 가르송은 프랑스어로 소년다운 스타일에서 여성다움을 추구하는 패션을 말한다.<br/> 남성미의 옷이라고 보면 된다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "44":
				data = "에스닉 (ethnic) : 유럽 이외의 세계 여러 나라 민속 의상과 민족 고유의 염색, 직물, 자수, 액세서리 등에서 영감을 얻어 디자인한 패션을 말한다. 보통 무슨풍? 이런거라고 보면 된다";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "45":
				data = "시스루룩 (see-through look) : 시스루 모드 , 누디룩, 베어룩이라고도 한다. 조젯 오건디 등 비치는 옷감이나 레이스를 소재로 사용하여 블라우스 셔츠 원피스 등을 만드는데, 몸매의 아름다움을 표하는 부드럽고 여성다운 패션이다. 1960년대 후반부터 유행하기 시작하였다";
				document.getElementById("fa3").innerHTML = data;
				break;	
			case "46":
				data = "매니시 (mannish) : 남성풍. 닌자와 같은 여성이라는 의미. 패션에서 남성복 디자인을 여성복에 적용한 스타일. 1930년대의 여배우 디트리히의 팡탈롱슈트가 매니시 스타일의 시초가 된다. 5년 이후 유행한 스리 세트 슈트. 1980년대의 남성복풍 등도 이러한 경향이며 섬세한 액세서리를 코디네이트 하여 역으로 강한 여성의 매력을 표현하게 된다";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "47":
				data = "밀리터리 룩 (military look) : 군복의 이미지를 느끼는 스타일.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "48":
				data = " 히피(hippie) : 60년대 미국을 중심으로 일어난 자연과 평화를 추구하는 청년들에게 볼 수 있는 라이프한 복장을 말한다. 남성의 장발, 수염, 진 등 그때의 포멀에 대항한 스타일";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "49":
				data = "프리미티브룩 (primitive look) : 문명이 고도로 발달한 도시 생활에 염증을 느껴 원시로 돌아가고 싶은 욕망에서 나타난 패션.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "50":
				data = "양키 룩 : 70년대에 일본에서 유행한 아메리카 50년대 패션을 말한다.";
				document.getElementById("fa3").innerHTML = data;
				break;	
			case "51":
				data = "오리엔탈리즘 스타일 (orientalism style) : 터키, 이집트, 페르시아, 인도 등의 풍속을 모티브로 동양적인 신비를 나타낸 패션.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "52":
				data = "페미니즘 (feminsm) : 여성의 사회상, 정치상, 법률상의 권리 확장을 주장하는 설. 여성성의 극대화.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "53":
				data = "페전트 룩 (peasant look) : 각국의 농민이 착용한 농민복에서 힌트를 얻었으며, 대상이 되는 나라는 유행에 따라 다르나 북유럽, 동유럽, 서유럽, 남아메리카 등 그나라 특유의 옷감, 색, 무늬 등을 사용하고 장식을 섬세하게 한 손세공의 느낌이 신선하게 부각되어 현대 패션의 원천이 되기도 한다. 유럽 농민이 입었던 풍성한 목면 블라우스, 베스트, 개더스커트, 에이프런 등의 디테일이 특징이며, 최근 민속복에 포함되어 사용되기도 한다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "54":
				data = "컨트리 룩 : 영국 신사가 시골에서 지낼때 가벼운 기분의 의상. 트위드지나 무명의 옷감을 사용한다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "55":
				data = "킹키 룩(kinky look) : 킹키는 이상한, 색이 다르다는 의미, 60년대 중엽에 런던의 킹스 로드를 중심으로 일어난 패션으로서 미니 스커트, 화려한 무늬의 천 등을 말한다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "56":
				data = "시누아즈리룩 (chinoiserie look) : 차이니즈 룩과 같은말로 중국풍의 패션.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "57":
				data = "시티 캐주얼 (city casual) : 캐주얼 감각의 시티 룩 또는 도시 감각의 캐주얼 룩, 원래 시티 감각, 캐주얼 감각은 대비되는 것이나 이것을 병립시키는 것";
				document.getElementById("fa3").innerHTML = data;
				break;	
			case "58":
				data = "베어 룩 (bare look) : 베어는 '노출된, 벌거벗은' 의 뜻으로 패션 용어로 쓰일 때에는 살갗을 부분적으로 노출시킨것을 말한다.<br/> 예를 들면 어깨를 들어낸 베어숄더 등을 드러낸 베어백, 배 부분을 드러낸 베어 미드리프 등이 있다.<br/> 베어 룩을 연출하는 것으로 여름철 가장 쉽게 볼 수 있는 아이 베어 톱이다.<br/> 이밖에도 컬렉션에서 엉덩이를 부분적으로 드러낸 베어 힙도 가끔 볼 수 이다.<br/> 하지만 얇고 투명한 소재를 사용해 살갗이 비치는 효과를 주는 시스루룩이나 몸을 완전히 노출시키 누드룩과는 구별된다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "59":
				data = "머린 룩 (marine look) : 바다, 선원, 해병, 어부 등 바다와 관련된 모티브를 활용한 패션, 세일러 재킷, 세일러 팬츠, 요트 탈때의 복장 및 해변에서 입는 쇼트 팬츠, 보트 네크라인 티셔츠, 스웨터 등이 있다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "60":
				data = "모즈 룩 (mods look) : 런던의 카너비 스트리트에서 생긴 유행으로 롱 헤어나 꽃무늬 셔츠, 콘티넨탈 슈트등을 말한다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "61":
				data = "뉴 클래식(new classic) : 새로운 현대적인 감각에 기초를 둔 고전적 스타일을 말한다.";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "62":
				data = " 시크(chic) : 세련되고 멋진 패션";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "63":
				data = " 프리스타일 룩 : 나만의 개성을 가진 패션!";
				document.getElementById("fa3").innerHTML = data;
				break;
			case "64":
				data = "리본 공예, 와이어 공예, 비즈 공예, 점토 공예, 종기 공예 (접기, 오리기 등), 양초 만들기, 도자기 공예, 가죽 공예, 스탬프 공예, 목공예, 석공예, 철공예, 수예, 자수, 퀼트, 펠트 공예, 얼음 공예, 매듭, 인형옷 만들기, 비누 만들기, 화장품 만들기, 홈패션 만들기, 리본 만들기, 미니어추어 만들기, 악세사리 (반지, 목걸이, 리본 등) 만들기, 스탬프 만들기, 정비 (자동차, 자전거), 집짓기, 전자 조립 (앰프 등 전자회로), 모형, 모델, RC 만들기, 마이크로 콘트롤러 (예: 아두이노), 인테리어, 가구 만들기, CAD/CAM, 팬시용품 만들기, 요리 및 음식 : 제과, 제빵, 초콜릿, 사탕, 주류 (맥주, 와인, 칵테일 등), 커피";
				document.getElementById("fa4").innerHTML = data;
				break;
			case "65":
				data = "사진, 그리기 (동서양화, 캐리커처, 만화, 모래그림 등), 문학활동 (시, 소설, 수필 쓰기), 작사, 작곡, 편곡, 손글씨 (붓, 펜, 예쁜글씨, POP 등), 젠탱글, 꽃꽂이, 스텐실, 포크아트, 페이스 페인팅, 초크아트, 풍선 불기,  판화, 그래피티, 염색";
				document.getElementById("fa4").innerHTML = data;
				break;
			case "66":
				data = "우표, 화폐, 만년필, 칼, 수석, 미니카, 시계, 술잔 등";
				document.getElementById("fa4").innerHTML = data;
				break;
			case "67":
				data = "구기종목 (축구, 테니스, 농구, 족구, 배드민턴, 탁구, 게이트볼, 당구, 포켓볼, 야구 등), 자전거, 인라인, 마라톤, 수영, 무술, 검도, 펜싱, 댄스, 등산, 스킨스쿠버, 패러글라이딩, 암벽 타기, 야마카시, 비보이, 스키, 보드, 요가, 권투, 골프, 승마, 줄넘기, 요트, 수상스키, 서바이벌 게임, e스포츠 (게임류), 아크로바틱, 철인3종 등";
				document.getElementById("fa4").innerHTML = data;
				break;
			case "68":
				data = "애완동물 (강아지, 곤충, 물고기 등), 식물 (분재, 난, 채소 등), 텃밭 꾸미기, 수족관 꾸미기, 다이어리 꾸미기 등";
				document.getElementById("fa4").innerHTML = data;
				break;
			case "69":
				data = "독서, 어학, 자원봉사, 특정 곤충 전문가 되기 (예: 벌, 모기 등), 자격증 따기 (예: 수상구조요원, PC정비사, 이용사 등), 수화 배우기 등";
				document.getElementById("fa4").innerHTML = data;
				break;
			case "70":
				data = "악기 연주 (피아노, 바이올린, 드럼, 오카리나 등), 레고, 퍼즐, 바둑, 장기, 체스, 마작, 카드놀이류, 낚시, 별보기 (천문), 연극 활동, 오디오, 여행, 마술, 요요, HAM, 노래 부르기, 최신기기 얼리어댑터 활동, 맛집 찾기, 수지침, 자물쇠 열기, 노래 부르기, 비트박스, 프로그래밍, 감상 : 영화 감상, 음악 감상, 미술품 감상, 공연 감상 (연극, 뮤지컬 등)";
				document.getElementById("fa4").innerHTML = data;
				break;
			default:
				break;
			}
      },
      doMouseOut: function(e)
      {
    	  document.getElementById("fa").innerHTML = "";
    	  document.getElementById("fa2").innerHTML = "";
    	  document.getElementById("fa3").innerHTML = "";
    	  document.getElementById("fa4").innerHTML = "";
      }
}
