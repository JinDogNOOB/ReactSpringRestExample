package com.yck.wob.dao;

import java.util.List;

import com.yck.wob.dto.UserDTO;

import org.springframework.stereotype.Repository;


public interface UserDao {

    List<UserDTO> selectUsers();
    UserDTO selectUserByNo(UserDTO userDTO);
    UserDTO selectUserByEmail(UserDTO userDTO);
    int insertUser(UserDTO userDTO);
    int udpateUser(UserDTO userDTO);
    void deleteUser(UserDTO userDTO);
    int countUsers();
}