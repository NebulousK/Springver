package sns.member.repository;

import java.sql.SQLException;
import java.util.List;
import sns.model.someDto;

public interface memberDao {
	
	public List<someDto> zip(String dong) throws SQLException; //주소 검색
	public void member_join(someDto dto) throws SQLException; //회원 가입
	public String idcheck(String id) throws SQLException;
	public String eamilcheck(String email) throws SQLException;
}
