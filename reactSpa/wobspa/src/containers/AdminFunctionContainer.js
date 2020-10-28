import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';

import AdminFunction from '../components/AdminFunction';


function AdminFunctionContainer(){
    // 버튼 눌린 상태 저장 defualt 유저버튼
    const [mode, setMode] = useState(1);

    // modal 에 올라갈 userinfo
    const [userNo, setUserNo] = useState(0);
    const [userEmail, setUserEmail] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const [userStatus, setUserStatus] = useState(0);

    // 유저정보리스트 
    const [userInfoList, setUserInfoList] = useState([]);
    
    // ###################################################
    // 콜백함수
    const onSetMode = (i) => {
        setMode(i);
    }
    // 회원정보 강제 수정 <모달>
    const onSetUserNickname = (event) =>{
        setUserNickname(event.target.value);
    }
    const onSetUserStatus = (event) => {
        setUserStatus(event.target.value);
    }

    // ###################################################
    // Axios [유저리스트, 유저정보, 유저수정, 유저차단, 삭제는보류]

    return (
        <AdminFunction 
        mode = {mode}
        onSetMode = {onSetMode}
        m_userNo = {userNo}
        m_userEmail = {userEmail}
        m_userNickname = {userNickname}
        m_userStatus = {userStatus}
        />
    );
}


export default AdminFunctionContainer;