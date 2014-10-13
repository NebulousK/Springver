package sns.mybatis;

import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import sns.model.someDto;

public class memberManager {
	private static SqlSessionFactory sqlMapper;
	
	static{
		try{
			Reader reader = Resources.getResourceAsReader("applicationContext.xml");
			sqlMapper = new SqlSessionFactoryBuilder().build(reader);
		}catch(IOException e){
			new RuntimeException("sqlsessionfactory" + e);
		}
	}
	
	public static List<someDto> zip(String dong){
		List list = null;
		SqlSession session = sqlMapper.openSession(); //세션 연결.
		list = session.selectList("zip", dong);
		return list;
	}
	
	public static void member_join(someDto dto){
		SqlSession session = sqlMapper.openSession();
		session.insert("member_join", dto);
		session.commit();
	}
	
	public static int getmemberno(String id){
		SqlSession session = sqlMapper.openSession();
		int no = session.selectOne("getmemberno", id);
		return no;
	}
	
	public static void m_profile(someDto dto){
		SqlSession session = sqlMapper.openSession();
		session.insert("m_profile", dto);
		session.commit();
	}
	
	public static void idealtype(someDto dto){
		SqlSession session = sqlMapper.openSession();
		session.insert("idealtype", dto);
		session.commit();	
	}
	
	public static String idcheck(String id){
		SqlSession session = sqlMapper.openSession();
		String dto = session.selectOne("idcheck", id);
		return dto;
	}
	
	public static String emailcheck(String email){
		SqlSession session = sqlMapper.openSession();
		String dto = session.selectOne("emailcheck", email);
		return dto;
	}
	
}
