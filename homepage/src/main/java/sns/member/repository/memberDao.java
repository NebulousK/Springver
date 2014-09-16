package sns.member.repository;

import java.sql.SQLException;
import java.util.List;
import sns.model.someDto;

public interface memberDao {
	
	public List<someDto> zip(String dong) throws SQLException;
}
