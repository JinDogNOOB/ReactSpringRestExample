/* 액션 타입 만들기 */
// Ducks 패턴(다몰아서 뭉쳐뭉쳐) 을 따를때는 액션의 이름에 접두사를 넣어줘야한다.
// 이렇게 하면 다른 모듈과 핵션 이름이 중복되는 것을 방지할 수 있다.

import AdminFunction from "../components/AdminFunction";

const SET_LOGIN_STATUS = 'user/SET_LOGIN_STATUS';
const SET_JWT = "user/SET_JWT";
const SET_USERNO = "user/SET_USERNO";
const SET_USERNICKNAME = "user/SET_USERNICKNAME";
const SET_USERSTATUS = "user/SET_USERSTATUS";

/* 액션객체 생성함수 만들기 */
export const setLoginStatus = (isLoggedIn) => ({type: SET_LOGIN_STATUS, isLoggedIn});
export const setJwt = (jwt) => ({type:SET_JWT, jwt});
export const setUserNo = (userNo) => ({type:SET_USERNO, userNo});
export const setUserNickname = (userNickname) => ({type:SET_USERNICKNAME, userNickname});
export const setUserStatus = (userStatus) => ({type:SET_USERSTATUS, userStatus});

/* 초기상태 선언*/
const initialState = {
    isLoggedIn: false,
    jwt: "",
    userNo : -1,
    userNickname : "",
    userStatus : -1
};


/* 리듀서 선언 */
// 리듀서는 export default 로 내보내줘라
export default function user(state=initialState, action){
    switch(action.type){
        case SET_LOGIN_STATUS:
            return{...state, isLoggedIn: action.isLoggedIn};
        case SET_JWT:
            return{...state, jwt: action.jwt };
        case SET_USERNO:
            return{...state, userNo: action.userNo};
        case SET_USERNICKNAME:
            return{...state, userNickname: action.userNickname};
        case SET_USERSTATUS:
            return{...state, userStatus: action.userStatus};
        default :
            return state;
    }
}

