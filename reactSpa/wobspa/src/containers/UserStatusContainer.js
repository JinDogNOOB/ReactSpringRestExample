import React, {useState} from 'react';
import UserStatus from '../components/UserStatus';

import {useSelector, useDispatch} from 'react-redux';
import {setLoginStatus} from '../modules/user';

function UserStatusContainer(){

    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));

    const dispatch = useDispatch();
    const onSetIsLoggedInStatus = (bool) => dispatch(setLoginStatus(bool));

    return(
        <div>
            <UserStatus 
            // onSetIsLoggedInStatus = {onSetIsLoggedInStatus}
            isLoggedIn = {isLoggedIn}
            />

        </div>
    )

}

export default UserStatusContainer;

