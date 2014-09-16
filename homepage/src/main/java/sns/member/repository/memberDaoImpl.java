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

	

}
