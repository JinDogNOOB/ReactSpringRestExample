import React, {useState} from 'react';



/*
유저 컴포넌트

비로그인 : 로그인 회원가입 버튼 누르면 팝업
로그인 : ~~님 환영합니다 로그아웃

*/
function UserStatus({isLoggedIn}){
    //var button = document.querySelector("#loginButton");
    //button.addEventListener(modalSwitch)
    // 모달 레퍼런스
    const signinModalRef = React.createRef();
    const signupModalRef = React.createRef();

    // 로그인폼 상태
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    // 회원가입폼에 따른 추가 상태
    const [userNickname, setUserNickname] = useState("");


    const updateUserId = (event) => {
        setUserId(event.target.value);
    }
    const updateUserPassword = (event) => {
        setUserPassword(event.target.value);
    }
    const updateUserNickname = (event) => {
        setUserNickname(event.target.value);
    }




    // id 모달메뉴 껏다켰다 
    const modalSwitch = (modal) =>{
        // var modal = document.querySelector(".modal");
        modal.current.classList.toggle("modal-switch");
    };





    if(!isLoggedIn){
        return(
            <div className="UserStatus">
                {/*  로그인이 안되있을 시  */}
                <div className="UserStatusDiv">
                    <button onClick={() => modalSwitch(signinModalRef)}>로그인</button>
                    <button onClick={() => modalSwitch(signupModalRef)}>회원가입</button>
                </div>

            
                {/* 
                모달 출처http://cosmosjs.blogspot.com/2018/11/css.html
                로그인 회원가입 출력될 모달
                */}
                {/*  로그인  */}
                <div className="modal" ref={signinModalRef} >
                    <div className="modal-content">

                        <div className="container-flex direction-col">
                            <h1>로그인</h1>
                            <div className="container-flex justifyContent-center">
                                <h2>아이디</h2>
                                <input type="text" value={userId} onChange={updateUserId}></input>
                            </div>
                            <div className="container-flex justifyContent-center">
                                <h2>비밀번호</h2>
                                <input type="text" value={userPassword} onChange={updateUserPassword}></input>
                            </div>
                            <div className="container-flex justifyContent-center">
                                <input type="button" className="modal-button" onClick={() => modalSwitch(signinModalRef)} value="취소" />
                                <input type="button" className="modal-button" value="확인" />
                            </div>
                        </div>

                    </div>
                </div>

                {/*  회원가입  */}
                <div className="modal" ref={signupModalRef} >
                    <div className="modal-content">
                        
                        <div className="container-flex direction-col">
                            <h1>회원가입</h1>
                            <div className="container-flex justifyContent-center">
                                <h2>아이디</h2>
                                <input type="text" value={userId} onChange={updateUserId}></input>
                            </div>
                            <div className="container-flex justifyContent-center">
                                <h2>비밀번호</h2>
                                <input type="text" value={userPassword} onChange={updateUserPassword}></input>
                            </div>
                            <div className="container-flex justifyContent-center">
                                <h2>닉네임</h2>
                                <input type="text" value={userNickname} onChange={updateUserNickname}></input>
                            </div>
                            <div className="container-flex justifyContent-center">
                                <input type="button" onClick={() => modalSwitch(signupModalRef)} value="취소" />
                                <input type="button" value="확인" />
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        );
    }else{
        return(
            <div className="UserStatus">
                <div className="UserStatusDiv">
                    <text>님환영 님이 무엇입니까?!!</text>
                    <button>로그아웃</button>
                </div>
            </div>
        );
    }


}


export default UserStatus;