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
			new RuntimeException("sqlsessionfactory �ν��Ͻ� ���� ����" + e);
		}
	}
	
	public static List<someDto> zip(String dong){
		List<someDto> list = null;
		SqlSession session = sqlMapper.openSession(); //��� ó���� ���Ǵ����� �Ǳ⶧���� �� ����������.
		list = session.selectList("zip", dong); //memberMapper.xml �� select�� ���� �ϰڴ�.
		return list;
	}
}
