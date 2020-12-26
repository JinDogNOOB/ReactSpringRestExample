package com.yck.wob.config.security.util;

import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


import com.yck.wob.dto.UserDTO;
import com.yck.wob.dto.UserRoleType;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TokenUtils {
    // private static final String secretKey = "thisistestSecretKeyforJwtExample";
    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static String generateJwtToken(UserDTO account){
        JwtBuilder builder = Jwts.builder()
            .setSubject(account.getUserEmail())
            .setHeader(createHeader())
            .setClaims(createClaims(account))
            .setExpiration(createExpireDateForOneYear())
            .signWith(key);

        return builder.compact();
    }

    public static boolean isValidToken(String token){
        try{
            if (token == null) throw new NullPointerException();
            Claims claims = getClaimsFromToken(token);
            log.info("isValidToekn()");
            log.info("expireTime : " + claims.getExpiration());
            log.info("email" + claims.get("email"));
            log.info("role" + claims.get("role"));
            return true;
        }catch(ExpiredJwtException e){
            log.error("Token Expired");
            return false;
        }catch(JwtException e){
            log.error("Token Tampered");
            return false;
        }catch(NullPointerException e){
            log.error("Token is null");
            return false;
        }
    }
    /**
     * 
     * @param header
     * @return if authorization is empty it returns null
     */
    public static String getTokenFromHeader(String header){
        try{
            return header.split(" ")[1];
        }catch(ArrayIndexOutOfBoundsException e){
            log.info("authorization token is empty");
            return null;
        }
    }

    private static Date createExpireDateForOneYear(){
        // 토큰 만료시간 30일
        Calendar c = Calendar.getInstance();
        c.add(Calendar.DATE, 30);
        return c.getTime();
    }

    private static Map<String, Object> createHeader(){
        Map<String, Object> header = new HashMap<String, Object>();
        header.put("type", "JWT");
        header.put("alg", "HS256");
        header.put("regDate", System.currentTimeMillis());
        return header;
    }

    private static Map<String, Object> createClaims(UserDTO account){
        // 공개 클레임에 사용자의 이름과 이메일을 설정하여 정보조회 가능
        Map<String, Object> claims = new HashMap<String, Object>();
        claims.put("email", account.getUserEmail());
        claims.put("userno", account.getUserNo());
        claims.put("nickname", account.getUserNickname());
        claims.put("role", account.getUserStatus().toString());
        return claims;
    }

/*     private static Key createSigningKey(){
        // byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(secretKey);
        // return new SecretKeySpec(apiKeySecretBytes, SignatureAlgorithm.HS256.getJcaName());
        return Keys.secretKeyFor(SignatureAlgorithm.HS256);
    } */

    private static Claims getClaimsFromToken(String token){
        return Jwts.parserBuilder()
            .setSigningKey(key).build()
            .parseClaimsJws(token).getBody();
    }

    public static String getUserEmailFromToken(String token){
        Claims claims = getClaimsFromToken(token);
        return (String)claims.get("email");
    }
    public static UserRoleType getRoleFromToken(String token){
        Claims claims = getClaimsFromToken(token);
        
        return UserRoleType.valueOf((String)claims.get("role"));
    }

}
