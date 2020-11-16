import React from 'react';
import UserStatusContainer from '../containers/UserStatusContainer';

function Banner(){
    return(
        <div className="head">
            <div className="logo_area">
                로고
            </div>
                헤드
            <div className="user_area">
                <UserStatusContainer />
            </div>
        </div>
    );
}

export default Banner;