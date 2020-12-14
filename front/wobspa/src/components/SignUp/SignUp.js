import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

function SignUp({
    step,
    onIncreaseStep,
    onDecreaseStep,
    userEmail,
    userPassword,
    userNickname,
    onSetUserEmail,
    onSetUserPassword,
    onSetUserNickname,
    onRequestSignup

}) {

    let form = (<div>?</div>);
    switch(step){
        case 0: {
            form = (
                <div>
                    <div>동의하십니까</div>
                    <div>동의하십니까</div>
                    <div>동의하십니까</div>
                    <input type="button" onClick={() => {onIncreaseStep();}} value="동의하고 넘어가기" />
                </div>
            );
            break;
        }
        case 1: {
            form = (
                <div>
                    <div>이메일</div>
                    <div><input type="text" value={userEmail} onChange={onSetUserEmail} /></div>
                    <div>비밀번호</div>
                    <div><input type="password" value={userPassword} onChange={onSetUserPassword} /></div>
                    <div>닉네임</div>
                    <div><input type="text" value={userNickname} onChange={onSetUserNickname} /></div>

                    <input type="button" onClick={() => {onDecreaseStep();}} value="뒤로가기" />
                    <input type="button" onClick={() => {onRequestSignup();}} value="회원가입 완료" />
                </div>
                );
                break;

        }
        case 2: {
            form = (
                <div>
                    <div>회원가입이 완료되었습니다</div>
                    <div>동의하십니까</div>
                    <div>동의하십니까</div>
                    <Link to={'/'} >돌아가기</Link>
                </div>
                );
                break;
        }
        default: {
            form = (
                <div>
                    <div>에라 발생</div>
                    <Link to={'/'} >돌아가기</Link>
                </div>
                );
            break;
        }
    }


    return (
        <div className="full_content">
            {form}
        </div>
    );
}





export default SignUp;