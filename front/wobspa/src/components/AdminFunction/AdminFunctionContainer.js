import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../../tool/axiosOptions';

import AdminFunction, {USER, BOARD, REQUESTEDBOARD} from './AdminFunction';


function AdminFunctionContainer(){
    
    // 버튼 눌린 상태 저장 defualt 유저버튼
    const [mode, setMode] = useState(0);

    // modal 에 올라갈 userinfo
    const [userNo, setUserNo] = useState(0);
    const [userEmail, setUserEmail] = useState("");
    const [userNickname, setUserNickname] = useState("");
    const [userStatus, setUserStatus] = useState(0);

    // 게시판추가 modal 에 올라갈 boardinfo
    const [boardName, setBoardName] = useState("");
    const [boardDesc, setBoardDesc] = useState("");

    // 유저정보리스트 
    const [userInfoList, setUserInfoList] = useState([]);
    // 게시판리스트
    const [boardInfoList, setBoardInfoList] = useState([]);


    // 모달 on off 상태
    const [userMgmtModalStatus, setUserMgmtModalStatus] = useState(false);
    const [boardMgmtModalStatus, setBoardMgmtModalStatus] = useState(false);
    const [boardReqMgmtModalStatus, setBoardReqMgmtModalStatus] = useState(false);

    
    // ###################################################
    // 콜백함수
    // 모드변경
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
    const onSetBoardName = (event) => {
        setBoardName(event.target.value);
    }
    const onSetBoardDesc = (event) => {
        setBoardDesc(event.target.value);
    }
    /**
     * @param {*} modalNum 0:없음 1:유저 2:보드 3:보드요청
     */
    const onSetModalStatus = (modalNum) => {
        switch(modalNum){
            case 1:{setUserMgmtModalStatus(true);break;}
            case 2:{setBoardMgmtModalStatus(true);break;}
            case 3:{setBoardReqMgmtModalStatus(true);break;}
            default: {
                setUserMgmtModalStatus(false);
                setBoardMgmtModalStatus(false);
                setBoardReqMgmtModalStatus(false);
                break;
            }
        }
    }

    // ###################################################
    // Axios [유저리스트, 유저정보, 유저수정, 유저차단삭제는보류]
    const requestUserInfoList = async() =>{
        try{
            const response = await axios(axiosOptions.get('/admin/user',{}));
            let tempArray = [];
            // 이거 테스트 한번 해보자 잘 들어가면 이대로 가자 안댄다 ㅠㅠ 
            response.data.map((val, index) =>{
                const tem = {
                    userNo : val.userNo,
                    userEmail : val.userEmail,
                    userNickname : val.userNickname,
                    userStatus : val.userStatus
                }
                tempArray.push(tem);
            });
            setUserInfoList(tempArray); 
        }catch(e){
            console.log(e);
        }
    }
    const requestUserInfo = async(userNo) => {
        try{
            const response = await axios(axiosOptions.get('/admin/user'+userNo, {}));
            setUserNo(response.data.userNo);
            setUserEmail(response.data.userEmail);
            setUserNickname(response.data.userNickname);
            setUserStatus(response.data.userStatus);

            onSetModalStatus(1);
        }catch(e){
            console.log(e);
        }
    }
    const requestModifyUserInfo = async() => {
        try{
            // 앗 백엔드 유저정보수정을 일반유저정보수정그걸로 해놨다.. 보류
        }catch(e){
            console.log(e);
        }
    }
    // Axios 게시판
    /**
     * 게시판 목록 요청 get
     */
    const requestBoardList = async() => {
        try{
            const response = await axios(axiosOptions.get("/admin/board", {}));
            let tempArray = [];
            response.data.map((val, index)=>{
                const temp = {
                    boardNo : val.boardNo,
                    boardName : val.boardName,
                    boardDesc : val.boardDesc,
                    boardProposer : val.boardProposer,
                    boardStatus : val.boardStatus
                }
                tempArray.push(temp);
            });
            setBoardInfoList(tempArray);
        }catch(e){
            console.log(e);
        }
    }

     /**
      * 게시판 추가 post
      */
    const requestForAddingBoard = async(userNo, boardName, boardDesc) => {
        try{
            const response = await axios(axiosOptions.post("/admin/board", {
                userNo : userNo,
                boardName : boardName,
                boardDesc : boardDesc
            }));
            alert("게시판 추가 성공했습니다.");
            onSetModalStatus(0);
            requestBoardList();
        }catch(e){
            console.log(e);
            alert("게시판 추가 에러.");
        }
    }




    // ###################################################
    // useEffect
    useEffect(() => {
        // switch 돌자 
        switch(mode){
            case USER:{
                requestUserInfoList();
                break;
            }
            case BOARD:{
                requestBoardList();
                break;
            }
            case REQUESTEDBOARD:{
                console.log("C");
                break;
            }
            default:{
                break;
            }
        }
    }, [mode]);


    return (
        <AdminFunction 
        mode = {mode}
        
        m_userNo = {userNo}
        m_userEmail = {userEmail}
        m_userNickname = {userNickname}
        m_userStatus = {userStatus}
        userInfoList = {userInfoList}
        boardInfoList = {boardInfoList}
        m_boardName = {boardName}
        m_boardDesc = {boardDesc}

        requestUserInfo = {requestUserInfo}
        requestForAddingBoard = {requestForAddingBoard}
        onSetMode = {onSetMode}
        onSetModalStatus = {onSetModalStatus}
        onSetUserNickname = {onSetUserNickname}
        onSetUserStatus = {onSetUserStatus}
        onSetBoardName = {onSetBoardName}
        onSetBoardDesc = {onSetBoardDesc}

        userMgmtModalStatus = {userMgmtModalStatus}
        boardMgmtModalStatus = {boardMgmtModalStatus}
        boardReqMgmtModalStatus = {boardReqMgmtModalStatus}

        />
    );
}


export default AdminFunctionContainer;