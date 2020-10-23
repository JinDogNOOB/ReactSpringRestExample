package com.yck.wob.controller;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin("*")
@RestController
@RequestMapping(value="/user")
public class UserController {

    @Autowired
    UserService userService;

    /*
    @RequestBody Map map // application/json
    @RequestParam Map map // x-www-form-urlencoded // & =
    @RequestMapping(value="/", method = RequestMethod.GET)
    private int tetetete(HttpServletRequest request, HttpServletResponse response){
    }
    */
    // ################### /user/ ##########################################
    // 회원가입
    @RequestMapping(value="/", method = RequestMethod.PUT)
    private void signup(HttpServletRequest request, HttpServletResponse response, @RequestBody Map map){
        
/*         String userEmail = request.getParameter("userEmail");
        String userPassword = request.getParameter("userPassword");
        String userNickname = request.getParameter("userNickname"); */
        String userEmail = (String)map.get("userEmail");
        String userPassword = (String)map.get("userPassword");
        String userNickname = (String)map.get("userNickname");

        if (userService.signUp(userEmail, userPassword, userNickname)){

            // 회원가입 성공
            response.setStatus(HttpServletResponse.SC_OK);
        }else{
            // 회원가입 실패
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
        // response.addHeader("access-controll-allow-origin", "http://127.0.0.1:8080");
        return;
    }

    // 로그인
    @RequestMapping(value="/", method = RequestMethod.POST)
    private void signin(HttpServletRequest request, HttpServletResponse response, @RequestBody Map map){
        String userEmail = (String)map.get("userEmail");
        String userPassword = (String)map.get("userPassword");

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
    private List<UserDTO> reportUser(HttpServletRequest request, HttpServletResponse response, @RequestBody Map map){
        response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        return null;
    }

    // 회원정보보기
    @RequestMapping(value="/", method = RequestMethod.GET)
    private UserDTO getUserInfo(HttpServletRequest request, HttpServletResponse response, @RequestParam Map map){
        if(map.get("userNo") == null) return null;

        int userNo = Integer.parseInt((String)map.get("userNo"));

        response.setStatus(HttpServletResponse.SC_OK);
        
        UserDTO user = userService.getUserInfo(userNo);
        user.setUserPassword(null);
        user.setUserEmail(null);
        return user;
    }





    // ################ /user/myinfo/ ###################################

    // 내 정보보기
    @RequestMapping(value="/myinfo", method = RequestMethod.GET)
    private UserDTO getMyUserInfo(HttpServletRequest request, HttpServletResponse response, @RequestParam Map map){
        int userNo = Integer.parseInt((String)map.get("userNo"));

        response.setStatus(HttpServletResponse.SC_OK);
        UserDTO user = userService.getUserInfo(userNo);
        user.setUserPassword(null);
        return user;
    }

    // 내 정보수정
    @RequestMapping(value="/myinfo", method = RequestMethod.PUT)
    private void modifyMyUserInfo(HttpServletRequest request, HttpServletResponse response, @RequestBody Map map){
        int userNo = Integer.parseInt((String)map.get("userNo"));
        String newNickname = (String)map.get("newNickname");
        String currentPassword = (String)map.get("currentPassword");
        String newPassword = currentPassword;


        if(map.get("newPassword") == null || ((String)map.get("newPassword")).contentEquals("") == false){
            newPassword = (String)map.get("newPassword");
        }
        // 현재 패스워드 맞는지 검증
        if (userService.signIn("userEmail", currentPassword) == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        // 유저정보 수정 시작
        if (userService.modifyUserInfo(newPassword, newNickname) == false){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return;
        }
        // 성공
        response.setStatus(HttpServletResponse.SC_OK);
        return;
    }

    // 회원탈퇴
    @RequestMapping(value="/myinfo", method = RequestMethod.DELETE)
    private void DeleteMyUserInfo(HttpServletRequest request, HttpServletResponse response){
        response.setStatus(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
        return;
    }


    
    
}