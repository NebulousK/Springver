package sns.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.WebUtils;
import sns.member.repository.memberDao;
import sns.model.someDto;

@Component
@Controller
public class memberController {
	@Autowired
	private memberDao memberDao;
	
	@RequestMapping(value="/member_join.sns")
	public String memberjoin(){
		return "member/member_join";
	}
	
	@RequestMapping(value="/zipfind.sns")
	public String zipfind(){
		return "member/zipcode";
	}
	
	@RequestMapping(value="/zip.sns", method=RequestMethod.POST)
	public ModelAndView zip(HttpServletRequest req) throws SQLException{
		ModelAndView view = new ModelAndView("member/zipcode");
		String dong = req.getParameter("dong");
		List<someDto> g = memberDao.zip(dong);
		try {
			view.addObject("g", memberDao.zip(dong));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return view;
	}
	
	@RequestMapping(value="/join.sns",method=RequestMethod.POST)
	public String member_join(@ModelAttribute("form1") someDto dto, HttpServletRequest req, ModelMap model){
		try{
			String path = WebUtils.getRealPath(req.getSession().getServletContext(), "/profile");
			byte[] bytes = dto.getImgInp().getBytes();
			File file = new File(path, dto.getImgInp().getOriginalFilename());
			if(file.exists()){
				Calendar cal = Calendar.getInstance();
				String dateString, timeString;
				dateString = String.format("%04d-%02d-%02d", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH) + 1, cal.get(Calendar.DAY_OF_MONTH));
				timeString = String.format("%02d:%02d:%02d", cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE), cal.get(Calendar.SECOND));
				file = new File(path, dateString + "+" + timeString + "+" + dto.getImgInp().getOriginalFilename());
			}
			FileCopyUtils.copy(bytes, file);
			/*
			if(dto.getEmail2().equals(null) || dto.getEmail2().equals("")){
				dto.setEmail(dto.getEmail2() + "@" + dto.getEmail3());
			}else{
				dto.setEmail(dto.getEmail1() + "@" + dto.getEmail3());
			}
			dto.setAge((Calendar.getInstance().get(Calendar.YEAR) - Integer.parseInt(dto.getYear())) + 1);
			dto.setBirthday(dto.getYear() + "," + dto.getMonth() + "," + dto.getDay());
			dto.setAddr(dto.getZip1() + dto.getZip2() + dto.getJuso() + dto.getAddr());
			dto.setTel(dto.getTel() + "-" + dto.getTel2() + "-" + dto.getTel3());
			dto.setPhoto(dto.getImgInp().getOriginalFilename());
			memberDao.member_join(dto);*/
		}catch(Exception e){
			e.printStackTrace();
		}
		return "member/member_join2";
	}
	
	@RequestMapping(value="/idcheck.sns")
	public void idcheck(HttpServletRequest req, HttpServletResponse rep){
		String result = null;
		rep.setCharacterEncoding("utf-8");
		try {
			String id = req.getParameter("id");
			String ids = memberDao.idcheck(id);
			PrintWriter out = rep.getWriter();
			if(id.equals(ids)){
				result = "<font color='red'>이미 등록된 ID 입니다.</font><input type='hidden' name='cooo2' id='cooo2' value='1'/>";
			}else{
				result = "<font color='green'>사용 가능한 ID 입니다.</font><input type='hidden' name='cooo2' id='cooo2' value='0'/>";
			}
			out.println(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="emailcheck.sns")
	public void emailcheck(HttpServletRequest req, HttpServletResponse rep){
		String result= null;
		rep.setCharacterEncoding("utf-8");
		try{
			String email = req.getParameter("email");
			String email2 = memberDao.eamilcheck(email);
			PrintWriter out = rep.getWriter();
			if(email.equals(email2)){
				result = "<font color='red'>이미 등록된 email 입니다.</font></font><input type='hidden' name='cooo' id='cooo' value='1'/>";
			}else{
				result = "<font color='green'>사용할 수 있는 email 입니다.</font><input type='hidden' name='cooo' id='cooo' value='0'/>";
			}
			out.println(result);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}
