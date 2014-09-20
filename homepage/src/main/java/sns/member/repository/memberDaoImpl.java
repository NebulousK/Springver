package sns.member.repository;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

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

	public void member_join(someDto dto) throws SQLException {
		memberManager.member_join(dto);
	}

	public String idcheck(String id) throws SQLException {
		return memberManager.idcheck(id);
	}

	public String eamilcheck(String email) throws SQLException {
		return memberManager.emailcheck(email);
	}
}
