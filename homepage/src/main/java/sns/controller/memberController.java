package sns.controller;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import sns.member.repository.memberDao;

@Component
@Controller
public class memberController {
	@Autowired
	private memberDao memberDao;
	
	@RequestMapping(value="/member_join.sns")
	public String memberjoin(){
		return "member/member_join";
	}
	
	@RequestMapping(value="/zip.sns")
	public ModelAndView zip(HttpServletRequest req){
		ModelAndView view = new ModelAndView("zip");
		String dong = req.getParameter("dong");
		try {
			view.addObject("g", memberDao.zip(dong));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return view;
	}
	
}
