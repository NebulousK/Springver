<%@page import="android.push"%>
<%@page import="java.util.ArrayList"%>
<%@page import="homepage.board.BoardDto"%>
<%@page import="homepage.board.BoardDao"%>
<%@page import="java.net.URLConnection"%>
<%@page import="org.apache.commons.math3.distribution.LogNormalDistribution"%>
<%@page import="java.io.File"%>
<%@page import="org.apache.commons.io.FilenameUtils"%>
<%@page import="org.apache.commons.fileupload.FileItem"%>
<%@page import="java.util.Iterator"%>
<%@page import="org.apache.commons.fileupload.FileUploadException"%>
<%@page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@page import="java.util.List"%>
<%@page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>

<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<%
String id = null;
String id1 = null;
String content = null;
String content1 = null;
String filename = null;
String destination = null;
String filesize = null;
String filetype = null;
String fileurl = null;

 boolean isMultipart = ServletFileUpload.isMultipartContent(request);
 if (!isMultipart) {
 }else {
    FileItemFactory factory = new DiskFileItemFactory();
    ServletFileUpload upload = new ServletFileUpload(factory);
    List items = null;
    try {
       items = upload.parseRequest(request);
       //System.out.println(request);
    } catch (FileUploadException e) {
     out.println("에러 1: "+e);
    }
    Iterator itr = items.iterator();
    while (itr.hasNext()) {
      FileItem item = (FileItem) itr.next();
      //System.out.println(item.isFormField());
      if (item.isFormField()) { // 파일이 아닌 폼필드에 입력한 내용을 가져옴.
        if(item!=null && item.getFieldName().equals("id")) {
          id = item.getString("utf-8");//form field 안에 입력한 데이터를 가져옴
          id1 = id.substring(2);
          System.out.println("id:"+id1);
          out.println("전송자:"+id1+"<br>"); 
        }else if(item!=null && item.getFieldName().equals("content")) {
          content = item.getString("utf-8");
          content1 = content.substring(2);
          System.out.println("content:"+content1);
          out.println("파일에 대한 설명:"+content1+"<br>");
        }

     } else { // 폼 필드가 아니고 파일인 경우
    try {

       String itemName = item.getName();//로컬 시스템 상의 파일경로 및 파일 이름 포함
       //System.out.println(itemName);
       if(itemName==null || itemName.equals("")) continue;

       filename = FilenameUtils.getName(itemName);// 경로없이 파일이름만 추출함 filename
       //System.out.println(fileName);
       // 전송된 파일을 서버에 저장하기 위한 절차
       //경로 바꿔줘야함!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       String realpath = request.getServletContext().getRealPath("upload")+"/";
       System.out.println(realpath);
       //String fileDir = "C:/Users/Administrator/git/hompage/WebContent/images/";
       File savedFile = new File(realpath+filename); 
       
       destination = realpath+filename;//file destination
       fileurl = "http://54.178.192.82/homepage/upload/"+filename;//fileurl
       //System.out.println(url);
       if (savedFile.exists()) { // 파일이 중복되면
        for (int i2 = 0; true; i2++) { // a(0).gif, a(1).gif
         savedFile = new File(realpath, "(" + i2 + ")" + filename);// (0)a.gif,(1)a.gif         
         fileurl = "http://54.178.192.82/homepage/upload/"+"(" + i2 + ")"+filename;
         filename = "(" + i2 + ")" + filename;
         	if (!savedFile.exists())
         		 break;
        }
       }
       //System.out.println("url" + url);
       //System.out.println(savedFile);
       item.write(savedFile);// 지정 경로에 파일을 저장함
       filesize = String.valueOf(savedFile.length());//filesize
       filetype = URLConnection.guessContentTypeFromName(savedFile.getName());//filetype
       //System.out.println(filetype);
       item.delete();// 임시파일삭제하기
       //System.out.println(item);

     

       out.println("<tr><td><b>파일저장 경로:</b></td></tr><tr><td><b>"+savedFile+"</td></tr>");

       out.println("<tr><td><b><a href=\"DownloadServlet?file="+filename+"\">"+filename+"</a></td></tr>");

    } catch (Exception e) {

       out.println("서버에 파일 저장중 에러: "+e);

      }

   }

  }

 }
 BoardDto Bdto = new BoardDto();
 Bdto.setId(id1);
 Bdto.setContent(content1);
 Bdto.setFilename(filename);
 Bdto.setDesination(destination);
 Bdto.setFilesize(filesize);
 Bdto.setFiletype(filetype);
 Bdto.setFileurl(fileurl);
 
 BoardDao Bdao = new BoardDao();
 Bdao.mobileInsertBoard(Bdto);
 ArrayList<String> a = Bdao.insertPush(id1);
 if(a.size()>0){
	push push = new push();
 	push.sendMessage(a,"새로운 글이 올라왔어요!!");
 }
 //System.out.println(filename);
%>

</body>
</html>