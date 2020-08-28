package com.yck.wob.controller;

import java.util.List;

import com.yck.wob.dao.UserDao;
import com.yck.wob.dao.UserDaoMybatisImpl;
import com.yck.wob.dto.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/user")
public class UserController {

    @Autowired
    UserDao userDao;

    /*
    @RequestMapping(value="/", method = RequestMethod.GET)
    private int tetetete(){
    }
    */

    // 회원정보보기
    @RequestMapping(value="/", method = RequestMethod.GET)
    private List<UserDTO> getUserInfo(){
        List<UserDTO> users = userDao.selectUsers();
        System.out.println(users.toString());
        System.out.println(userDao.countUsers());
        return users;
    }
    // 회원가입
    @RequestMapping(value="/", method = RequestMethod.PUT)
    private List<UserDTO> test(){
        List<UserDTO> users = userDao.selectUsers();
        System.out.println(users.toString());
        System.out.println(userDao.countUsers());
        return users;
    }
    // 로그인
    @RequestMapping(value="/", method = RequestMethod.POST)
    private List<UserDTO> test(){
        List<UserDTO> users = userDao.selectUsers();
        System.out.println(users.toString());
        System.out.println(userDao.countUsers());
        return users;
    }
    // 유저 신고
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    private List<UserDTO> test(){
        List<UserDTO> users = userDao.selectUsers();
        System.out.println(users.toString());
        System.out.println(userDao.countUsers());
        return users;
    }




    
    
}