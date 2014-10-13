package sns.controller;

import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
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
	public ModelAndView member_join(@ModelAttribute("form1") someDto dto, HttpServletRequest req, ModelMap model){
		try{
			memberDao.member_join(dto, req);
	    }catch(Exception e){
			e.printStackTrace();
		}
		ModelAndView view = new ModelAndView("member/member_join2");
		view.addObject("id", req.getParameter("id"));
		return view;
	}

	@RequestMapping(value="/join2.sns",method=RequestMethod.POST)
	public String member_join2(@ModelAttribute("form1") someDto dto){
		try{
			memberDao.member_join2(dto);
	    }catch(Exception e){
			e.printStackTrace();
		}
		return "member/member_complete";
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
