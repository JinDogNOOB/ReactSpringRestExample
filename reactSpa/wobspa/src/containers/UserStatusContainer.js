import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {serverUrl} from '../conf';

import {setLoginStatus} from '../modules/user';
import UserStatus from '../components/UserStatus';







function UserStatusContainer(){
    
    // redux store
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));

    const dispatch = useDispatch();
    const onSetIsLoggedInStatus = (bool) => dispatch(setLoginStatus(bool));

    // axios 통신
    const onRequestSignup = async(userEmail, userPassword, userNickname) => {
        try{
             /* const response = await axios.put(serverUrl+'/user/test',
             {params:{userEmail : userEmail, userPassword : userPassword, userNickname : userNickname
            }}); get할때는 params post 등 다른거는 그냥 params */
            const options = {
                method: 'PUT',
                url: serverUrl+'/user/test',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }, // x-www-form-urlencoded
                 data: {
                    userEmail : userEmail,
                    userPassword : userPassword,
                    userNickname : userNickname
                } 
               /*  params: { 
                    userEmail : userEmail,
                    userPassword : userPassword,
                    userNickname : userNickname
                } */
                // 이거 생성 함수 만들어줘야겠다 ㅎㅎ
            };
            const response = await axios(options);

   
            console.log(response);

        }catch(exception){
            console.log(exception);
        }
        /*
        axios.put(serverUrl+'/user/', {params:{
            userEmail : userEmail,
            userPassword : userPassword,
            userNickname : userNickname
        }})
        .then(response => {console.log(response)})
        .catch(response => {console.log(response)});
        */
    };




    return(
        <div>
            <UserStatus 
            // onSetIsLoggedInStatus = {onSetIsLoggedInStatus}
            isLoggedIn = {isLoggedIn}
            onRequestSignup = {onRequestSignup}
            />

        </div>
    )

}

export default UserStatusContainer;

