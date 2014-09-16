<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ page import="java.util.List" %>

<%@ page import="java.util.Iterator" %>

<%@ page import="java.io.File" %>

<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>

<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>

<%@ page import="org.apache.commons.fileupload.*"%>

<%@ page import="org.apache.commons.io.FilenameUtils"%>
<%@ page import="Member.MemberDto" %>

<jsp:useBean id="dao" class="homepage.someDao"/>
<jsp:useBean id="gmail" class="mail.Gmail"/>
<body>

<center><table>

<%
	
	request.setCharacterEncoding("utf-8");
	response.setCharacterEncoding("utf-8");
	
	String num1=null;
	String num2=null;
	String addr=null;
	String id=null;
	String password=null;
	String name=null;
	String check_password=null;
	String email1=null;
	String email2=null;
	String tel=null;
	String tel2=null;
	String tel3=null;
	String birthday=null;
	int age=0;
	String sex=null;
	String fileName=null;

	
	boolean isMultipart = ServletFileUpload.isMultipartContent(request);


 if (!isMultipart) {


 }else {
	

    FileItemFactory factory = new DiskFileItemFactory();

    ServletFileUpload upload = new ServletFileUpload(factory);

    List items = null;

    try {

       items = upload.parseRequest(request);
    

    } catch (FileUploadException e) {

		
		System.out.println("에러 1: "+e);

    }

	
    Iterator itr = items.iterator();

    while (itr.hasNext()) {
      FileItem item = (FileItem) itr.next();
	
      if (item.isFormField()) { // 파일이 아닌 폼필드에 입력한 내용을 가져옴.
    
        if(item!=null && item.getFieldName().equals("login")) {
        	  String name1 = item.getFieldName();
        	  id = item.getString("UTF-8").trim();
       
        	  System.out.println(name1 + " " + id);		        

        }else if(item!=null && item.getFieldName().equals("password")) {
        	  String name1 = item.getFieldName();
        	  password = item.getString("UTF-8").trim();
        	  System.out.println(name1 + " " + password);  

        }else if(item!=null && item.getFieldName().equals("name")) {
      	  String name1 = item.getFieldName();
      	   name = item.getString("UTF-8").trim();
      	 
        	System.out.println(name1 + " " + name);
      	
      	 
      	}else if(item!=null && item.getFieldName().equals("check_password")) {
        	  String name1 = item.getFieldName();
          	   check_password = item.getString("UTF-8").trim();
          	  System.out.println(name1 + " " + check_password);
        


         }else if(item!=null && item.getFieldName().equals("email1")) {
         	  String name1 = item.getFieldName();
          	   email1 = item.getString("UTF-8").trim();
          	  System.out.println(name1 + " " + email1);
           

          }else if(item!=null && item.getFieldName().equals("email2")) {
          	  String name1 = item.getFieldName();
          	email2 = item.getString("UTF-8").trim();
          	  System.out.println(name1 + " " + email2);
  


          	}else if(item!=null && item.getFieldName().equals("tel")) {
            	  String name1 = item.getFieldName();
            	  tel = item.getString("UTF-8").trim();
              	  System.out.println(name1 + " " + tel);
            


             }            	 
          	else if(item!=null && item.getFieldName().equals("tel2")) {
            	  String name1 = item.getFieldName();
            	  tel2 = item.getString("UTF-8").trim();
              	  System.out.println(name1 + " " + tel2);
            


             }
          	else if(item!=null && item.getFieldName().equals("tel3")) {
            	  String name1 = item.getFieldName();
            	  tel3 = item.getString("UTF-8").trim();
              	  System.out.println(name1 + " " + tel3);
            


             }else if(item!=null && item.getFieldName().equals("birthday")) {
             	  String name1 = item.getFieldName();
             	 birthday= item.getString("UTF-8").trim();
              	  System.out.println(name1 + " " + birthday);
             

              }else if(item!=null && item.getFieldName().equals("age")) {
              	  String name1 = item.getFieldName();
              	  age = Integer.parseInt((item.getString("UTF-8").trim()));
              	  System.out.println(name1 + " " + age);
             

              }else if(item!=null && item.getFieldName().equals("sex")) {
              	  String name1 = item.getFieldName();
              	 sex = item.getString("UTF-8").trim();
              	  System.out.println(name1 + " " + sex);                 	  

              }
             else if(item!=null && item.getFieldName().equals("num1")) {
              	  String name_t = item.getFieldName();
              	num1= item.getString("UTF-8").trim();
              	  System.out.println(name_t + " " + num1);                 	  

             }
             else if(item!=null && item.getFieldName().equals("num2")) {
              	  String name1 = item.getFieldName();
              	num2 = item.getString("UTF-8").trim();
              	  System.out.println(name1 + " " + num2);                 	  

             }
             else if(item!=null && item.getFieldName().equals("addr")) {
              	  String name1 = item.getFieldName();
              	addr = item.getString("UTF-8").trim();
              	  System.out.println(name1 + " " + addr);                 	  
          	}
    	 

	
     } else { // 폼 필드가 아니고 파일인 경우

	
    try {
	
       String itemName = item.getName();//로컬 시스템 상의 파일경로 및 파일 이름 포함
		
       if(itemName==null || itemName.equals("")) continue;

   	     fileName = FilenameUtils.getName(itemName);// 경로없이 파일이름만 추출함
		//String password= 
	
       String realpath = request.getServletContext().getRealPath("profile")+"/";
   	   
       File savedFile = new File(realpath+fileName); 
       if (savedFile.exists()) { // 파일이 중복되면
           for (int i2 = 0; true; i2++) { // a(0).gif, a(1).gif
            savedFile = new File(realpath, "(" + i2 + ")" + fileName);// (0)a.gif,(1)a.gif
            fileName = "(" + i2 + ")" + fileName;
             if (!savedFile.exists())
                   break;
           }
          }
	
       item.write(savedFile);// 지정 경로에 파일을 저장함

     	

       //System.out.println("<tr><td><b>파일저장 경로:</b></td></tr><tr><td><b>"+savedFile+"</td></tr>");

       
    } catch (Exception e) {
	
       System.out.println("서버에 파일 저장중 에러: "+e);

      }

   }
  }
//	System.out.println("join_jsp:"+id+ password+check_password+name+ sex+ birthday+  num1+num2+addr+tel+tel2+ tel3+ fileName+ age+ email1+ email2);
  dao.member_joinTest(id, password,check_password, name, sex, birthday,  num1,num2,addr, tel, tel2, tel3, fileName, age, email1, email2);
  gmail.GmailTest(id, email1, email2);


 } 

%>

</table>

</center>

</body></html>

