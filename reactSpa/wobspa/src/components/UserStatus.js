import React, {useState} from 'react';
import './Component.css';


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
    tsetFunction
}){
    //var button = document.querySelector("#loginButton");
    //button.addEventListener(modalSwitch)
    // 모달 레퍼런스

    if(!isLoggedIn){
        return(
            <div className="UserStatus">
                {/*  로그인이 안되있을 시  */}
                <button onClick={() => {onClickGotoSigninPage()}}>로그인</button>
                <button onClick={() => {onClickGotoSignupPage()}}>회원가입</button>
            </div>
        )
    }else{
        return(
            <div className="UserStatus">
                <div className="UserStatusDiv">
                    님환영 님이 무엇입니까?!!
                    <input type="button" value="로그아웃" onClick={()=>{onClickLogOut()}}/>
                    <input type="button" value="jwt체크" onClick={() => {tsetFunction()}} />
                </div>
            </div>
        );
    }


}


export default UserStatus;