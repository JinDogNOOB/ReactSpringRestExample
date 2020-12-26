import React from 'react';
import MyInfo from './MyInfo';

import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import axiosOptions from '../../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../../modules/user';
import {useHistory} from 'react-router-dom';


function MyInfoContainer() {

    //리덕스
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));
    const {jwt} = useSelector(state=> ({
        jwt : state.user.jwt
    }));

    // axios
    // 내 정보 가져오기 
    const onLoadMyinfo = async() => {
        try{
            const response = await axios(axiosOptions.get('/user/myinfo', {
            }, jwt));

        }catch(e){
            console.log(e);
        }

    }



    return (
        <MyInfo />
    );
}

export default MyInfoContainer;