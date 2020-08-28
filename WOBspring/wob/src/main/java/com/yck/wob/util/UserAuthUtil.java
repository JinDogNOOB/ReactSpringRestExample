package com.yck.wob.util;

import java.security.Key;
import java.util.Date;

import com.yck.wob.dto.UserDTO;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class UserAuthUtil {
    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    // String jws = Jwts.builder().setSubject("Joe").signWith(key).compact();

    public static final int EXPIRETIME_FOREVER = 100;
    public static final int EXPIRETIME_ONEDAY = 101;

    public static final int STATUS_USER = 200;
    public static final int STATUS_ADMIN = 201;
    // jwt parameters
    /*
     헤더 설정도 하고
     claims 도 넣는다. claims 는 jwt 수령자한테 보여주고자하는 데이터를 넣는다.
     여기서는 유저넘버랑.. 권한이랑... 권한이랑... nickname 넣어놓자 ㅎㅎ >> custom claims
     claims{
         issuer 
         subject
         audience
         expiration java.util.date
         notbefore
         issuedat
         setid
     }
    */

    // 로그인 성공 jwt 발급 
    public static String getJwtContainsUserInfo(UserDTO user, int EXPIRETIME){
        String jws = "";
        if(EXPIRETIME == EXPIRETIME_FOREVER){
            jws = Jwts.builder()
            .claim("userNo", user.getUserNo())
            .claim("userStatus", user.getUserStatus())
            .claim("userNickname", user.getUserNickname())
            .signWith(key)
            .compact();
        }else if(EXPIRETIME == EXPIRETIME_ONEDAY){
            jws = Jwts.builder()
            .claim("userNo", user.getUserNo())
            .claim("userStatus", user.getUserStatus())
            .claim("userNickname", user.getUserNickname())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000))
            .signWith(key)
            .compact();
        }else{
            jws = Jwts.builder()
            .claim("userNo", user.getUserNo())
            .claim("userStatus", user.getUserStatus())
            .claim("userNickname", user.getUserNickname())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000))
            .signWith(key)
            .compact();
        }

        return jws;
    }

    // jws 확인
    public static boolean validateJwtNStatus(String jwsString, int STATUS){
        // Jws<Claims> jws;
        int userStatus = 0;
        try{
            
            userStatus = Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(jwsString)
            .getBody()
            .get("claimName", Integer.class)
            .intValue();

            switch (STATUS) {
                case STATUS_ADMIN :{
                    if(userStatus != 99){
                        return true;
                    }
                    return false;
                }
                case STATUS_USER :{
                    if(userStatus >= 20){
                        return true;
                    }
                    return false;
                }
                default:{
                    return false;
                }
            }
            
        }catch(JwtException e){
            e.printStackTrace();
            return false;
        }
    }

    public static Claims getClaimsFromJws(String jwsString){
        try{      
             return Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(jwsString)
            .getBody();

        }catch(JwtException e){
            e.printStackTrace();
            return null;
        }
    }

}