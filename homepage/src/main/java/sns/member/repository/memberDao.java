package sns.member.repository;

import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import sns.model.someDto;

public interface memberDao {
	
	public List<someDto> zip(String dong) throws SQLException; //주소 검색
	public void member_join(someDto dto, HttpServletRequest req) throws SQLException; //회원 가입
	public void member_join2(someDto dto) throws SQLException; //회원 가입 세부정보
	public String idcheck(String id) throws SQLException;
	public String eamilcheck(String email) throws SQLException;
}
