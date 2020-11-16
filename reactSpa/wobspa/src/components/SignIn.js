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
        <div>
            <div>아이디</div>
            <input type="text" value={userEmail} onChange={onSetUserEmail} />
            
            <div>패스워드</div>
            <input type="text" value={userPassword} onChange={onSetUserPassword} />

            <div>
                <input type="button" onClick={() => {requestLogin();}} value="확인" />
                <input type="button" onClick={() => {onClickGotoMainPage();}} value="취소" />
            </div>
        </div>
    );
}


export default SignIn;