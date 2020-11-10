import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../modules/user';
import UserStatus from '../components/UserStatus';






function UserStatusContainer(){

    console.log("container rerender");
    // redux store
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));
    const {jwt} = useSelector(state=> ({
        jwt : state.user.jwt
    }));

    const dispatch = useDispatch();
    const onSetIsLoggedInStatus = (bool) => dispatch(setLoginStatus(bool));

    // axios
    // 회원가입
    const onRequestSignup = async(userEmail, userPassword, userNickname, callback) => {
        try{
            const response = await axios(axiosOptions.put('/user/', {
                userEmail : userEmail,
                userPassword : userPassword,
                userNickname : userNickname
            }));
            console.log(response);
            if(response.status / 100 == 2){
                callback(true);
                //성공
                // 아 axios 400뜨면 exception발생시키는구나 
            }else{
                // 100 300 500 아 500은 excepiton 빠질라나
                callback(false);
            }
        }catch(exception){
            callback(false);
            console.log(exception);
        }
    };
    // axios
    // 로그인
    const onRequestLogin = async(userEmail, userPassword, callback) => {
        try{
            const response = await axios(axiosOptions.post('/user/', {
                userEmail : userEmail,
                userPassword : userPassword
            }));
            if(response.status / 100 == 2){
                callback(true);
                // console.log(response.data.jwt);
                dispatch(setJwt(response.data.jwt));
                //성공
            }else{
                callback(false);
                // 실패
            }

        }catch(exception){
            // http status 400대일때 일로 빠지네,,.
            callback(false);
            console.log(exception);
        }
    }




    return(
        <div>
            <UserStatus 
            onSetIsLoggedInStatus = {onSetIsLoggedInStatus}
            isLoggedIn = {isLoggedIn}
            onRequestSignup = {onRequestSignup}
            onRequestLogin = {onRequestLogin}
            />

        </div>
    );

}

export default UserStatusContainer;

