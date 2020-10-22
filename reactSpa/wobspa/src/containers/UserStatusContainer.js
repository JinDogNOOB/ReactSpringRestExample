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
            const response = await axios.put(serverUrl+'/user/', {params:{
                userEmail : userEmail,
                userPassword : userPassword,
                userNickname : userNickname
            }});

            response = await axios.put('http://127.0.0.1:8080/user/', {params:{
                userEmail : userEmail,
                userPassword : userPassword,
                userNickname : userNickname
            }});
            
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

