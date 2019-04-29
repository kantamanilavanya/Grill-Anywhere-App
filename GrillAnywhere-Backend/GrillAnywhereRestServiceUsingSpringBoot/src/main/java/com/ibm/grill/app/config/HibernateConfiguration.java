package com.ibm.grill.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

@Configuration
public class HibernateConfiguration {
	
	@Bean
	public MultipartResolver multipartResolver() {
	    return new StandardServletMultipartResolver();
	}

//	@Bean(name = "multipartResolver")
//	public CommonsMultipartResolver multipartResolver() {
//	    CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
//	    multipartResolver.setMaxUploadSize(100000);
//	    return multipartResolver;
//	}
	/*
	 * @Value("#{dataSource}") private DataSource dataSource;
	 * 
	 * 
	 * @Bean public MysqlDataSource dataSource() { MysqlDataSource dataSource = new
	 * MysqlDataSource(); dataSource.setDatabaseName("employeeapp");
	 * dataSource.setUser("root"); dataSource.setPassword("");
	 * dataSource.setServerName("localhost"); return dataSource; }
	 * 
	 * 
	 * @Bean public AnnotationSessionFactoryBean sessionFactoryBean() { Properties
	 * props = new Properties(); //props.put("hibernate.dialect",
	 * H2Dialect.class.getName()); props.put("hibernate.dialect",
	 * MySQL5Dialect.class.getName()); props.put("hibernate.format_sql", "true");
	 * 
	 * AnnotationSessionFactoryBean bean = new AnnotationSessionFactoryBean();
	 * bean.setAnnotatedClasses(new Class[]{Item.class, Order.class});
	 * bean.setHibernateProperties(props); // bean.setDataSource(dataSource());
	 * bean.setDataSource(dataSource); bean.setSchemaUpdate(true); return bean; }
	 * 
	 * // equivalent xml configuration
	 * 
	 * <beans:bean id="sessionFactoryBean" class=
	 * "org.springframework.orm.hibernate3.annotation.AnnotationSessionFactoryBean">
	 * <!-- datasource detail --> <beans:property name="dataSource" ref="dataSource"
	 * />
	 * 
	 * <!-- hibernate properties --> <beans:property name="hibernateProperties">
	 * <beans:props> <beans:prop
	 * key="hibernate.dialect">org.hibernate.dialect.MySQLDialect </beans:prop>
	 * <beans:prop key="hibernate.show_sql">true</beans:prop> <beans:prop
	 * key="hibernate.hbm2ddl.auto">create</beans:prop> </beans:props>
	 * </beans:property>
	 * 
	 * <beans:property name="annotatedClasses"> <beans:list>
	 * <beans:value>com.examples.spring.hibernate.Order</beans:value>
	 * <beans:value>com.examples.spring.hibernate.Item</beans:value> </beans:list>
	 * </beans:property> </beans:bean>
	 * 
	 * 
	 * 
	 * @Bean public HibernateTransactionManager transactionManager() { return new
	 * HibernateTransactionManager( sessionFactoryBean().getObject() ); }
	 * 
	 * // equivalent xml configuration
	 * 
	 * <beans:bean id="transactionManager" class=
	 * "org.springframework.orm.hibernate3.HibernateTransactionManager.HibernateTransactionManager">
	 * <beans:property name="sessionFactory" ref="sessionFactoryBean" />
	 * </beans:bean>
	 */
}