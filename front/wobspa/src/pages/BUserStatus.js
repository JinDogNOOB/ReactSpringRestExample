import React from 'react';
import UserStatusContainer from '../components/UserStatus/UserStatusContainer';

function BUserStatus(){
    return(
        <div className="top_user">
            <img className="small_logo" src={process.env.PUBLIC_URL + '/logo512.png'} />
            <UserStatusContainer />
        </div>
    );
}


export default BUserStatus;