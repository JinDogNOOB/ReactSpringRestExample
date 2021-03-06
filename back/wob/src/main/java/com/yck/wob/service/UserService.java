package com.yck.wob.service;

import java.util.List;

import com.yck.wob.dao.UserDao;
import com.yck.wob.dto.UserDTO;
import com.yck.wob.dto.UserRoleType;
import com.yck.wob.util.PasswordHash;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class UserService{
    
    @Autowired UserDao userDao;
    @Autowired PasswordEncoder passwordEncoder;
    
    // ### 회원가입
    public boolean signUp(String userEmail, String userPassword, String userNickname){
        UserDTO user = new UserDTO();
        user.setUserEmail(userEmail);
        user.setUserPassword(passwordEncoder.encode(userPassword));
        user.setUserNickname(userNickname);

        // 아이디 중복 체크 
        if(userDao.selectUserByEmail(user) != null){
            return false;
        }

        // 회원가입 진행 테스트용으로 무조건 어드민으로 
        user.setUserStatus(UserRoleType.ROLE_ADMIN);
        userDao.insertUser(user);

        return true;
    }

    // ### 로그인
    public UserDTO signIn(String userEmail, String userPassword){
        UserDTO user = new UserDTO();
        user.setUserEmail(userEmail);
        user.setUserPassword(userPassword);

        // 디비 유저 정보 가져오기 & 널체크 
        UserDTO dbUser = userDao.selectUserByEmail(user);
        if(dbUser == null){
            return null;
        }
        // 패스워드 비교 
        if(PasswordHash.comparePassword(userPassword, dbUser.getUserPassword())){
            // 성공
            return dbUser;
        }
        // 실패
        return null;
    }

    /**
     * 회원정보 리스트
     * @return userList
     */
    public List<UserDTO> getUserList(){
        return userDao.selectUsers();
    }

    // ### 회원정보 보기 
    public UserDTO getUserInfo(int userNo){
        UserDTO user = new UserDTO();
        user.setUserNo(userNo);
        return userDao.selectUserByNo(user);
    }
    public UserDTO getUserInfo(String userEmail){
        UserDTO user = new UserDTO();
        user.setUserEmail(userEmail);
        return userDao.selectUserByEmail(user);
    }

    // ### 회원정보 수정
    public boolean modifyUserInfo(String userEmail, String userPassword, String userNickname){
        UserDTO user = getUserInfo(userEmail);
        user.setUserPassword(passwordEncoder.encode(userPassword));
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
    public boolean deleteUserInfo(int userNo){
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