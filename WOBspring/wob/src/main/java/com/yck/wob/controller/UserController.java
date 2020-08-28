package com.yck.wob.controller;

import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yck.wob.dao.UserDao;
import com.yck.wob.dao.UserDaoMybatisImpl;
import com.yck.wob.dto.UserDTO;
import com.yck.wob.service.PostService;
import com.yck.wob.service.UserService;
import com.yck.wob.util.UserAuthUtil;

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
    private void signup(HttpServletRequest request, HttpServletResponse response){
        
        String userEmail = request.getParameter("userEmail");
        String userPassword = request.getParameter("userPassword");
        String userNickname = request.getParameter("userNickname");

        if (userService.signUp(userEmail, userPassword, userNickname)){

            // 회원가입 성공
            response.setStatus(HttpServletResponse.SC_OK);
        }else{
            // 회원가입 실패
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        return;
    }

    // 로그인
    @RequestMapping(value="", method = RequestMethod.POST)
    private void signin(HttpServletRequest request, HttpServletResponse response){
        String userEmail = request.getParameter("userEmail");
        String userPassword = request.getParameter("userPassword");

        UserDTO user = userService.signIn(userEmail, userPassword);
        if(user == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        String jws = UserAuthUtil.getJwtContainsUserInfo(user, UserAuthUtil.EXPIRETIME_ONEDAY);
        response.setStatus(HttpServletResponse.SC_OK);
        response.setHeader("SET-COOKIE", "jws="+ jws + "; HttpOnly");
        return;
    }
    // 유저 신고
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    private List<UserDTO> reportUser(HttpServletRequest request, HttpServletResponse response){
        response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        return null;
    }

    // 회원정보보기
    @RequestMapping(value="/", method = RequestMethod.GET)
    private UserDTO getUserInfo(HttpServletRequest request, HttpServletResponse response){
        int userNo = Integer.parseInt(request.getParameter("userNo"));

        response.setStatus(HttpServletResponse.SC_OK);
        UserDTO user = userService.getUserInfo(userNo);
        user.setUserPassword(null);
        user.setUserEmail(null);
        return user;
    }




    
    
}