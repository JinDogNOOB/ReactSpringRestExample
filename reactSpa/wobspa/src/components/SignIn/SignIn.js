import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

function SignIn({
    userEmail,
    userPassword,
    onSetUserEmail,
    onSetUserPassword,
    requestLogin,
    onClickGotoMainPage
}){

    return (
        <div className="signin_out">
            <div className="signin_in">
                <div>아이디</div>
                <input type="text" value={userEmail} onChange={onSetUserEmail} />
            
                <div>패스워드</div>
                <input type="text" value={userPassword} onChange={onSetUserPassword} />

                <div>
                    <input type="button" className="ck_button" onClick={() => {requestLogin();}} value="확인" />
                    <input type="button" className="ck_button" onClick={() => {onClickGotoMainPage();}} value="취소" />
                </div>
            </div>
        </div>
    );
}


export default SignIn;