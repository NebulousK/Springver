/**
 * 
 */
function email_write()
{var form = document.form1;var email = form.email2.value;
 if (email == "etc")
 {document.getElementById("email2").style.display = "none";document.getElementById("email3").style.display = "";form.getElementById("email3").focus();}
 else
 {document.getElementById("email2").style.display = "";}return;}

function FindZip(zip_kind) 
{window.open("zipcode.jsp?zip_kind="+zip_kind, "", "scrollbars=no,width=500,height=250");}

   $(document).ready(function(){
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성
                reader.onload = function (e) { 
                //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
                    $('#blah').attr('src', e.target.result);
                    //이미지 Tag의 SRC속성에 읽어들인 File내용을 지정
                    //(아래 코드에서 읽어들인 dataURL형식)
                }                    
                reader.readAsDataURL(input.files[0]);
                //File내용을 읽어 dataURL형식의 문자열로 저장
            }
        }//readURL()--

        //file 양식으로 이미지를 선택(값이 변경) 되었을때 처리하는 코드
        $("#imgInp").change(function(){
          /*   alert(this.value); //선택한 이미지 경로 표시 */
            readURL(this);
        });
     });