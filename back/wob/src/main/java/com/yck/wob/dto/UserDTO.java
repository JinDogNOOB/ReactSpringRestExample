package com.yck.wob.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDTO {
    private int userNo;
    private String userPassword;
    private String userEmail;
    private String userNickname;
    private UserRoleType userStatus;
}