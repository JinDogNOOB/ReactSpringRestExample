package com.yck.wob.config.security.filter;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
    
    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
        super.setAuthenticationManager(authenticationManager);
    }

    /**
     * 여기서 추가적인 유효성검사를 userEmail userPw에 해주는게 좋을수있다.
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String userEmail = request.getParameter("userEmail");
        if (userEmail == null) throw new AuthenticationServiceException("userEmail is null");
        String userPw = request.getParameter("userPassword");
        if (userPw == null) throw new AuthenticationCredentialsNotFoundException("userPw is null");

        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(userEmail, userPw);
        setDetails(request, authRequest);
        log.info("email pw 파싱 성공 및 매니저에게 인증위임");
        return this.getAuthenticationManager().authenticate(authRequest);
    }

    
}


