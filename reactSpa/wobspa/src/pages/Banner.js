import React from 'react';
import UserStatusContainer from '../containers/UserStatusContainer';

function Banner(){
    return(
        <div className="head">
            <div className="logo_area">
                <img src={process.env.PUBLIC_URL + '/logo512.png'} />
            </div>
            <div className="title_area">
                어서오세요
            </div>
            <div className="user_area">
                <UserStatusContainer />
            </div>
        </div>
    );
}

export default Banner;