package com.yck.wob.dto;

import com.yck.wob.dto.usertypehandler.CodeEnum;
import com.yck.wob.dto.usertypehandler.CodeEnumTypeHandler;

import org.apache.ibatis.type.MappedTypes;

import lombok.Getter;

/**
 * MyBatis 에 EnumType java db ADMIN 01 USER 02 이런식으로 코드로 관리하고싶을때 enum 클래스는
 * TypeHandler를 구현해야한다 TypeHandler는 MyBatis가 PreparedStatement에 파라미터를 설정하고
 * ResultSet에서 값을 가져올때마다 적절한 자바타입의 값을 가져오거나 Insert시에 PreparedStatement에 적절한
 * 자바타입의 값을 set할때 사용한다.
 * 
 * 세션팩토리에 핸들러 등록
 */
public enum UserRoleType implements CodeEnum {
    ROLE_ANONY(10),
    ROLE_USER(20),
    ROLE_ADMIN(99);

    @Getter
    private int roleType;

    UserRoleType(int roleType) {
        this.roleType = roleType;
    }

    @MappedTypes(UserRoleType.class)
    public static class TypeHandler extends CodeEnumTypeHandler<UserRoleType> {
        public TypeHandler() {
            super(UserRoleType.class);
        }
    }

    @Override
    public int getCode() {
        // TODO Auto-generated method stub
        return roleType;
    }

    


}
