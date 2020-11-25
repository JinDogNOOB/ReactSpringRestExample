import React, {useState} from 'react';
import '../Component.css';


/*
유저 컴포넌트

비로그인 : 로그인 회원가입 버튼 누르면 팝업
로그인 : ~~님 환영합니다 로그아웃

*/
function UserStatus({
    isLoggedIn,
    onClickGotoSigninPage,
    onClickGotoSignupPage,
    onClickLogOut,
    tsetFunction,
    userNickname
}){
    //var button = document.querySelector("#loginButton");
    //button.addEventListener(modalSwitch)
    // 모달 레퍼런스

    if(!isLoggedIn){
        return(
            <div className="UserStatus">
                {/*  로그인이 안되있을 시  */}
                <input type="button" className="ck_button" value="로그인" onClick={() => {onClickGotoSigninPage()}} />
                <input type="button" className="ck_button" value="회원가입" onClick={() => {onClickGotoSignupPage()}} />
            </div>
        )
    }else{
        return(
            <div className="UserStatus">
                <div className="UserStatusDiv">
                안녕하세요! {userNickname}님
                    <input type="button" className="ck_button" value="로그아웃" onClick={()=>{onClickLogOut()}}/>
                    <input type="button" className="ck_button" value="jwt체크" onClick={() => {tsetFunction()}} />
                </div>
            </div>
        );
    }


}


export default UserStatus;