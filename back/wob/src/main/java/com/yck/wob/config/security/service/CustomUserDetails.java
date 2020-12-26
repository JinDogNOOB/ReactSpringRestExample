package com.yck.wob.config.security.service;

import java.util.Collection;

import com.yck.wob.dto.UserDTO;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.Delegate;

@AllArgsConstructor
@Getter
public class CustomUserDetails implements UserDetails {

    @Delegate
    private UserDTO user;
    private Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return user.getUserEmail();
    }
    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return user.getUserPassword();
    }


    // 여기는 실제 개발할때 구현하고
    // 일단 전부 true 리턴 이것땜시 테스트가 안됬다
    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }


}
