package com.yck.wob.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yck.wob.dao.UserDao;
import com.yck.wob.dao.UserDaoMybatisImpl;
import com.yck.wob.dto.UserDTO;
import com.yck.wob.service.PostService;
import com.yck.wob.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/user")
public class UserController {

    @Autowired
    UserService userService;

    /*
    @RequestMapping(value="/", method = RequestMethod.GET)
    private int tetetete(HttpServletRequest request, HttpServletResponse response){
    }
    */
    // ################### /user/ ##########################################
    // 회원가입
    @RequestMapping(value="/", method = RequestMethod.PUT)
    private List<UserDTO> signup(HttpServletRequest request, HttpServletResponse response){
        
        String userEmail = request.getParameter("userEmail");
        String userPassword = request.getParameter("userPassword");
        String userNickname = request.getParameter("userNickname");

        if (userService.signUp(userEmail, userPassword, userNickname)){

        }else{
            response.setStatus(HttpServletResponse.SC_OK);
        }

        
        return null;
    }
    // 로그인
    @RequestMapping(value="/", method = RequestMethod.POST)
    private List<UserDTO> signin(HttpServletRequest request, HttpServletResponse response){
        return null;
    }
    // 유저 신고
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    private List<UserDTO> reportUser(HttpServletRequest request, HttpServletResponse response){
        return null;
    }

    // 회원정보보기
    @RequestMapping(value="/", method = RequestMethod.GET)
    private List<UserDTO> getUserInfo(HttpServletRequest request, HttpServletResponse response){
        return null;
    }




    
    
}