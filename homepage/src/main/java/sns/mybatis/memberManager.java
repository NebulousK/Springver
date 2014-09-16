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
			new RuntimeException("sqlsessionfactory 인스턴스 생성 실패" + e);
		}
	}
	
	public static List<someDto> zip(String dong){
		List<someDto> list = null;
		SqlSession session = sqlMapper.openSession(); //모든 처리가 세션단위로 되기때문에 더 안전해졌다.
		list = session.selectList("zip", dong); //memberMapper.xml 의 select문 실행 하겠다.
		return list;
	}
}
