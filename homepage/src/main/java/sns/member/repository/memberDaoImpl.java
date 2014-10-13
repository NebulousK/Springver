package sns.member.repository;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.Method;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.util.WebUtils;

import sns.model.someDto;
import sns.mybatis.memberManager;

@Component
public class memberDaoImpl implements memberDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate){
		this.jdbcTemplate=jdbcTemplate;
	}
	
	public List<someDto> zip(String dong) throws SQLException {
		return memberManager.zip(dong);
	}

	public void member_join(someDto dto, HttpServletRequest req) throws SQLException {
		String path;
		try {
				int random = (int) Math.random();
				path = WebUtils.getRealPath(req.getSession().getServletContext(), "/profile");
				byte[] bytes = dto.getImgInp().getBytes();
				File file = new File(path, dto.getImgInp().getOriginalFilename());
				if(file.exists()){
					Calendar cal = Calendar.getInstance();
					String dateString, timeString;
					dateString = String.format("%04d%02d%02d", cal.get(Calendar.YEAR), cal.get(Calendar.MONTH) + 1, cal.get(Calendar.DAY_OF_MONTH));
					timeString = String.format("%02d%02d%02d", cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE), cal.get(Calendar.SECOND));
					file = new File(path, dateString + timeString + dto.getImgInp().getOriginalFilename() + random);
				}
				FileCopyUtils.copy(bytes, file);
				
				if(dto.getEmail2().equals(null) || dto.getEmail2().equals("")){
					dto.setEmail(dto.getEmail1() + "@" + dto.getEmail3());
				}else{
					dto.setEmail(dto.getEmail1() + "@" + dto.getEmail2());
				}
				dto.setAge((Calendar.getInstance().get(Calendar.YEAR) - Integer.parseInt(dto.getYear())) + 1);
				dto.setBirthday(dto.getYear() + "," + dto.getMonth() + "," + dto.getDay());
				dto.setAddr(dto.getZip1() + dto.getZip2() + dto.getJuso() + dto.getAddr());
				dto.setTel(dto.getTel() + "-" + dto.getTel2() + "-" + dto.getTel3());
				dto.setPhoto(dto.getImgInp().getOriginalFilename());
				memberManager.member_join(dto);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void member_join2(someDto dto) throws SQLException {
		dto.setNo(memberManager.getmemberno(dto.getId()));
		memberManager.m_profile(dto);
		memberManager.idealtype(dto);
	}
	
	public String idcheck(String id) throws SQLException {
		return memberManager.idcheck(id);
	}

	public String eamilcheck(String email) throws SQLException {
		return memberManager.emailcheck(email);
	}
}
