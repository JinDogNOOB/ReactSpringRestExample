import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../modules/user';
import {useSelector, useDispatch} from 'react-redux';
import SignIn from '../components/SignIn';


// 매뉴얼한 페이지이동을 위해애애
import {useHistory} from 'react-router-dom';

function SignInContainer(){
    // 매뉴얼한 페이지 이동을 위해
    const history = useHistory();


    // redux
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));
    const {jwt} = useSelector(state=> ({
        jwt : state.user.jwt
    }));
    const dispatch = useDispatch();
    const onSetLogInStatus = (bool) => dispatch(setLoginStatus(bool));
    const onSetJwt = (jwt) => dispatch(setJwt(jwt));

    // state
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const onSetUserEmail = (e) => {setUserEmail(e.target.value);}
    const onSetUserPassword = (e) => {setUserPassword(e.target.value);}

    // common 
    const onClickGotoMainPage = () => {history.push('/')}

    // axios
    // 로그인
    const requestLogin = async() => {
        try{
            const response = await axios(axiosOptions.post('/user/', {
                userEmail : userEmail,
                userPassword : userPassword
            }));
            const tempjwt = response.data.jwt;
            onSetJwt(tempjwt);
            onSetLogInStatus(true);
            alert("로그인에 성공했습니다");
            history.push('/');
            
            

        }catch(exception){
            // http status 400대일때 일로 빠지네,,.
            console.log(exception);
            alert("실패함, 다시시도하시오");
        }
    }

    return (
        <SignIn 
            userEmail = {userEmail}
            userPassword = {userPassword}
            onSetUserEmail = {onSetUserEmail}
            onSetUserPassword = {onSetUserPassword}
            requestLogin = {requestLogin}
            onClickGotoMainPage = {onClickGotoMainPage}

        />
    )




}


export default SignInContainer;
