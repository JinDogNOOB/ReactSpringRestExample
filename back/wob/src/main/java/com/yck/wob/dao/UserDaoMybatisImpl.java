package com.yck.wob.dao;

import java.util.List;

import com.yck.wob.dto.UserDTO;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoMybatisImpl implements UserDao {

    @Autowired
    private SqlSession sqlSession;

    private static final String namespace = "UserMapper";

    @Override
    public void deleteUser(UserDTO userDTO) {
        // TODO Auto-generated method stub
        sqlSession.delete(namespace + ".deleteUser", userDTO);
    }

    @Override
    public int insertUser(UserDTO userDTO) {
        // TODO Auto-generated method stub
        return sqlSession.insert(namespace + ".insertUser",userDTO);
    }


    @Override
    public int updateUser(UserDTO userDTO) {
        // TODO Auto-generated method stub
        return sqlSession.update(namespace + ".updateUser",userDTO);
    }

    @Override
    public List<UserDTO> selectUsers() {
        // TODO Auto-generated method stub
        return sqlSession.selectList(namespace + ".selectUsers");
    }

    @Override
    public int countUsers() {
        // TODO Auto-generated method stub
        return sqlSession.selectOne(namespace + ".countUsers");
    }

    @Override
    public UserDTO selectUserByEmail(UserDTO userDTO) {
        // TODO Auto-generated method stub
        return sqlSession.selectOne(namespace + ".selectUserByEmail",userDTO);
    }

    @Override
    public UserDTO selectUserByNo(UserDTO userDTO) {
        return sqlSession.selectOne(namespace + ".selectUserByNo",userDTO);
    }


    
    
}