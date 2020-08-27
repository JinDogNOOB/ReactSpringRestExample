package com.yck.wob.service;

import com.yck.wob.dao.UserDao;
import com.yck.wob.dto.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserService{
    
    @Autowired
    UserDao userDao;

    
    // ### 회원가입
    boolean signUp(String userEmail, String userPassword, String userNickname){
        UserDTO user = new UserDTO();
        user.setUserEmail(userEmail);
        user.setUserPassword(userPassword);
        user.setUserNickname(userNickname);

        // 아이디 중복 체크 
        if(userDao.selectUserByEmail(user) != null){
            return false;
        }

        // 회원가입 진행
        user.setUserStatus(20);
        userDao.insertUser(user);

        return true;
    }

    // ### 로그인
    UserDTO signIn(String userEmail, String userPassword){
        UserDTO user = new UserDTO();
        user.setUserEmail(userEmail);
        user.setUserPassword(userPassword);

        // 디비 유저 정보 가져오기 & 널체크 
        UserDTO dbUser = userDao.selectUserByEmail(user);
        if(dbUser == null){
            return null;
        }
        // 패스워드 비교 
        if(dbUser.getUserPassword().contentEquals(user.getUserPassword())){
            // 성공
            return dbUser;
        }
        // 실패
        return null;
    }

    // ### 회원정보 보기 
    UserDTO getUserInfo(int userNo){
        UserDTO user = new UserDTO();
        user.setUserNo(userNo);
        return userDao.selectUserByNo(user);
    }

    // ### 회원정보 수정
    boolean modifyUserInfo(String userPassword, String userNickname){
        UserDTO user = new UserDTO();
        user.setUserPassword(userPassword);
        user.setUserNickname(userNickname);
        try{
            userDao.updateUser(user); 
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    // ### 회원 탈퇴 
    boolean deleteUserInfo(int userNo){
        UserDTO user = new UserDTO();
        user.setUserNo(userNo);
        try{
            userDao.deleteUser(user);
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }


}