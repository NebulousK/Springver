function SearchZip() {
		if (!form.dong.value) {
			alert("검색하실 동명을 입력해 주십시오.");
			form.dong.focus();
			return;
		}
		form.submit();
	}
	function SendZip(zip_kind) {
		if (form1.jusor.value == "") {
			alert("나머지 주소를 입력하여 주십시오.");
			form1.jusor.focus();
			return;
		}
		var str, zip1, zip2, juso;
		str = form1.post_no.value;
		str = str.split("^^");
		zip1 = str[0];
		zip2 = str[1];
		juso = str[2];
		juso2 = form1.jusor.value;

		if (zip_kind == 1) {
			opener.form1.o_zip1.value = zip1;
			opener.form1.o_zip2.value = zip2;
			opener.form1.o_juso.value = juso;
			opener.form1.addr.value = juso2;
		} else if (zip_kind == 2) {
			opener.form1.r_zip1.value = zip1;
			opener.form1.r_zip2.value = zip2;
			opener.form1.r_juso.value = juso;
			opener.form1.addr.value = juso2;
		} else {
			opener.form1.zip1.value = zip1;
			opener.form1.zip2.value = zip2;
			opener.form1.juso.value = juso;
			opener.form1.addr.value = juso2;
		}
		self.close();
	}