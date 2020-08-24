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
    
    @RequestMapping(value="/test", method = RequestMethod.GET)
    private List<UserDTO> test(){
        List<UserDTO> users = userDao.selectUsers();
        System.out.println(users.toString());
        System.out.println(userDao.countUsers());
        return users;
    }

    
    
}