package com.yck.wob.config.security.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

import com.yck.wob.dao.UserDao;
import com.yck.wob.dto.UserDTO;
import com.yck.wob.dto.UserRoleType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsServiceImpl implements UserDetailsService{

    @Autowired UserDao userDao;
    
    // loadUserByUsername 반드시 구현
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDTO temp = new UserDTO();
        temp.setUserEmail(username);

        Optional<UserDTO> byUserEmail = Optional.of(
            userDao.selectUserByEmail(temp)
            );

        UserDTO userDTO = byUserEmail.orElseThrow(() -> new UsernameNotFoundException(username));
        return new CustomUserDetails(userDTO, authorities(userDTO.getUserStatus()));
    }
    
    private Collection<? extends GrantedAuthority> authorities(UserRoleType userRoleType){
        return Arrays.asList(new SimpleGrantedAuthority(userRoleType.toString()));
    }

}
