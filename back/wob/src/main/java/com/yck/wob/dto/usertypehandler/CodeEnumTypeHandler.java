package com.yck.wob.dto.usertypehandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeException;
import org.apache.ibatis.type.TypeHandler;

// https://www.holaxprogramming.com/2015/11/12/spring-boot-mybatis-typehandler/
// TypeHandler를 구현한 CodeEnumTypeHandler 클래스
public abstract class CodeEnumTypeHandler<E extends Enum<E>> implements TypeHandler<CodeEnum> {
    private Class<E> type;
    

    public CodeEnumTypeHandler(Class<E> type) {
        this.type = type;
    }

    @Override
    public void setParameter(PreparedStatement ps, int i, CodeEnum parameter, JdbcType jdbcType) throws SQLException {
        ps.setInt(i, parameter.getCode());
    }

    @Override
    public CodeEnum getResult(ResultSet rs, String columnName) throws SQLException {
        int code = rs.getInt(columnName);
        return getCodeEnum(code);
    }

    @Override
    public CodeEnum getResult(ResultSet rs, int columnIndex) throws SQLException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public CodeEnum getResult(CallableStatement cs, int columnIndex) throws SQLException {
        // TODO Auto-generated method stub
        return null;
    }


    private CodeEnum getCodeEnum(int code){
        try{
            CodeEnum[] enumConstants = (CodeEnum[]) type.getEnumConstants();
            for(CodeEnum codeEnum: enumConstants){
                if(codeEnum.getCode() == code){
                    return codeEnum;
                }
            }
            return null;
        }catch(Exception e){
            throw new TypeException("Can't make enum Object '"+ type + "'" + e);
        }
    }


    
}
