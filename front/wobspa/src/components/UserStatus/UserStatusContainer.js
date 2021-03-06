import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import axiosOptions from '../../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../../modules/user';
import UserStatus from './UserStatus';

import {useHistory} from 'react-router-dom';





function UserStatusContainer(){
    const history = useHistory();
    // redux store
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));
    const {jwt} = useSelector(state=> ({
        jwt : state.user.jwt
    }));
    const {userNickname} = useSelector(state=> ({
        userNickname : state.user.userNickname
    }));

    const dispatch = useDispatch();

    // common
    const onClickGotoSigninPage = () => {history.push('/user/signin');}
    const onClickGotoSignupPage = () => {history.push('/user/signup');}
    const onClickLogOut = () => {
        dispatch(setJwt(""));
        dispatch(setLoginStatus(false));
    }
    const tsetFunction = () => {
        alert(jwt);
    }

    // 로그인 유효 체크 반복이있어야할듯 여기에
    return(
            <UserStatus className="top_user" 
            isLoggedIn = {isLoggedIn}
            onClickGotoSigninPage = {onClickGotoSigninPage}
            onClickGotoSignupPage = {onClickGotoSignupPage}
            onClickLogOut = {onClickLogOut}
            tsetFunction = {tsetFunction}
            userNickname = {userNickname}
            />
    );

}

export default UserStatusContainer;

