import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';
import SpecificBoard from '../components/SpecificBoard';

import {setLoginStatus, setJwt} from '../modules/user';
import {useSelector, useDispatch} from 'react-redux';
import SignUp from '../components/SignUp';


function SignUpContainer(){
    
    // 회원가입 순서 
    // 동의 >> 회원정보 입력 >> 완료 0 1 2 
    const [step, setStep] = useState(0);
    const onIncreaseStep = () => {if(step < 2) setStep(step+1);}
    const onDecreaseStep = () => {if(step > 0) setStep(step-1);}

    // 유저정보
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const onSetUserEmail = (e) => {setUserEmail(e.target.value);}
    const onSetUserPassword = (e) => {setUserPassword(e.target.value);}
    const onSetUserNickname = (e) => {setUserNickname(e.target.value);}



    // axios
    // 회원가입
    const onRequestSignup = async() => {
        try{
            const response = await axios(axiosOptions.put('/user/', {
                userEmail : userEmail,
                userPassword : userPassword,
                userNickname : userNickname
            }));
            console.log(response);
            alert("회원가입 성공!");
            onIncreaseStep();
        }catch(exception){
            console.log(exception);
            setStep(-1);
        }
    };

    return (
        <SignUp 
            step = {step}
            onIncreaseStep = {onIncreaseStep}
            onDecreaseStep = {onDecreaseStep}
            userEmail = {userEmail}
            userPassword = {userPassword}
            userNickname = {userNickname}
            onSetUserEmail = {onSetUserEmail}
            onSetUserPassword = {onSetUserPassword}
            onSetUserNickname = {onSetUserNickname}
            onRequestSignup = {onRequestSignup}
        />
    );
}

export default SignUpContainer;