package com.yck.wob.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

/**
 * use spring security passwordEncorder instead
 */
@Deprecated
public class PasswordHash {
    
    public static String hashPasswordWithSHA256(String plainText){
        try{
        String salt = getRandomSalt();

        MessageDigest md = MessageDigest.getInstance("SHA-256");

        md.update(Base64.getDecoder().decode(salt));
        md.update(plainText.getBytes());
        
        return salt + ":" + (new String(Base64.getEncoder().encode(md.digest())));
        }catch(NoSuchAlgorithmException e){
            e.printStackTrace();
            return null;
        }
    }

    
    public static boolean comparePassword(String plainText, String targetPassword){

        try{
            String salt = targetPassword.substring(0, 16);
            
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            
            md.update(Base64.getDecoder().decode(salt));
            md.update(plainText.getBytes());

            String hashedPlainText = new String(Base64.getEncoder().encode(md.digest()));
            if(hashedPlainText.contentEquals(targetPassword.substring(17, targetPassword.length()))){
                return true;
            }

        }catch(NoSuchAlgorithmException e){
            e.printStackTrace();
            return false;
        }
        return false;
    }


    private static String getRandomSalt()throws NoSuchAlgorithmException{
        SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
        byte[] bytes = new byte[12];
        random.nextBytes(bytes);
        return (new String(Base64.getEncoder().encode(bytes)));
    }
}