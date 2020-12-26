package com.yck.wob.config.security.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yck.wob.config.security.constants.AuthHeaderConstants;
import com.yck.wob.config.security.service.CustomUserDetails;
import com.yck.wob.config.security.util.TokenUtils;
import com.yck.wob.dto.UserDTO;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

public class CustomLoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws ServletException, IOException {
        // TODO Auto-generated method stub
        // SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDTO userDTO = ((CustomUserDetails)authentication.getPrincipal()).getUser();

        String token = TokenUtils.generateJwtToken(userDTO);

        response.addHeader(AuthHeaderConstants.AUTH_HEADER, AuthHeaderConstants.TOKEN_TYPE + " " + token);
        response.addHeader("Access-Control-Expose-Headers", AuthHeaderConstants.AUTH_HEADER); 
        // axios가 이거 없으면 안보여준다 토큰헤더를;; 아니 리스폰스에는 떡하니 보이는데 -> 보안을 위해서 그랬다고함
        // https://stackoverflow.com/questions/37897523/axios-get-access-to-response-header-fields 참고
        // response.sendRedirect("/welcome");
    }
    
    
}