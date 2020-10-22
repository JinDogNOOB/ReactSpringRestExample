package com.yck.wob;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;


// @SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan
@SpringBootApplication
public class WobApplication{
	
	public static void main(String[] args) {
		SpringApplication.run(WobApplication.class, args);
	}


	// SqlSessionFactory 빈 
	@Bean
	public SqlSessionFactory SqlSessionFactory(DataSource dataSource)throws Exception{
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(dataSource);

		Resource[] resources = new PathMatchingResourcePatternResolver().getResources("classpath:mapper/**/*Mapper.xml");
		sqlSessionFactoryBean.setMapperLocations(resources);

		
		return sqlSessionFactoryBean.getObject();
	}


}
