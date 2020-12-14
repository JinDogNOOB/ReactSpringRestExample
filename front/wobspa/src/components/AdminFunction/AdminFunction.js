import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './AdminFunctionStyle.css';

export const USER = 1;
export const BOARD = 2;
export const REQUESTEDBOARD = 3;



function AdminFunction({mode,
    onSetMode,
    m_userNo,
    m_userEmail,
    m_userNickname, 
    m_userStatus,
    userInfoList,
    boardInfoList,
    m_boardName,
    m_boardDesc,

    requestUserInfo,
    onSetModalStatus,
    onSetUserNickname,
    onSetUserStatus,
    onSetBoardName,
    onSetBoardDesc,

    userMgmtModalStatus,
    boardMgmtModalStatus,
    boardReqMgmtModalStatus,
    requestForAddingBoard

}){
    // admin menu 가 무엇이 눌렀느냐에 따라서 
    // amdin info 가 그려져야한다... 흠 생각생각하즈아아

    let adminInfoJSX = (<div>null</div>);

    /*
    테스트 코드임 
    let testArray = ['a', 'b', 'c', 'd'];
    if(true){
        adminInfoJSX = 
            testArray.map((data, index) => (
                <div key={index}>
                    <h1>{data}</h1>
                </div>
            ));
    } */

    switch(mode){
        case USER:{
            adminInfoJSX = (
                <table className="user_list">
                    <thead>
                        <tr>UserList</tr>
                        <tr>
                            <th>No</th><th>Email</th><th>nickName</th><th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userInfoList.map((data, index) => (
                        <tr key={index} onClick={() => requestUserInfo(data.userNo)}>
                            <td>{data.userNo}</td><td>{data.userEmail}</td><td>{data.userNickname}</td><td>{data.userStatus}</td>
                        </tr>
                    ))}
                    </tbody>
                    
                </table>
            );
            break;
        }
        case BOARD:{
            adminInfoJSX = (
                <table className="board_list">
                    <thead>
                        <tr>BoardList <input type="button" onClick={() => {onSetModalStatus(2)}} value="게시판추가"></input></tr>
                        <tr>
                            <th>No</th><th>Name</th><th>Desc</th><th>Proposer</th><th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boardInfoList.map((data, index) => (
                            <tr key={index}><td>{data.boardNo}
                            </td><td>{data.boardName}</td><td>{data.boardDesc}</td><td>{data.boardProposer}</td><td>{data.boardStatus}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            );
            break;
        }
        case REQUESTEDBOARD:{
            adminInfoJSX = (<div>requestedBoardMode</div>);
            break;
        }
        default:{
            break;
        }
    }

    
    return (
        <div className="admin_function_container">
            { userMgmtModalStatus && <UserMgmtModal 
            m_userNo = {m_userNo}
            m_userEmail = {m_userEmail}
            m_userNickname = {m_userNickname}
            m_userStatus = {m_userStatus}
            onSetModalStatus = {onSetModalStatus}
            onSetUserNickname = {onSetUserNickname}
            onSetUserStatus = {onSetUserStatus}
            />}
            {boardMgmtModalStatus && <BoardMgmtModal
            m_boardName = {m_boardName}
            m_boardDesc = {m_boardDesc}
            onSetBoardName = {onSetBoardName}
            onSetBoardDesc = {onSetBoardDesc}
            onSetModalStatus = {onSetModalStatus}
            requestForAddingBoard = {requestForAddingBoard}
            />}

            <div className="admin_menu">
                <a href="#" onClick={() => onSetMode(USER)}>유저관리</a>
                <a href="#" onClick={() => onSetMode(BOARD)}>게시판관리</a>
                <a href="#" onClick={() => onSetMode(REQUESTEDBOARD)}>게시판생성요청관리</a>

            </div>
            <div className="admin_info">
                {adminInfoJSX}
            </div>

        </div>
    );
}



function UserMgmtModal({

    m_userNo,
    m_userEmail,
    m_userNickname,
    m_userStatus,
    onSetModalStatus,
    onSetUserNickname,
    onSetUserStatus
}){
    const [mode, setMode] = useState(1)
    //1:정보 2:수정

    return(
            <div >
                <div className="new_modal" >
                    <div className="modal-content">
                        {
                            mode==1 && (
                        <div className="container-flex direction-col">

                            <h1>회원정보</h1>
                            <div className="container-flex justifyContent-center">
                                <h2>번호</h2>
                                <span>{m_userNo}</span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <h2>아이디</h2>
                                <span>{m_userEmail}</span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <h2>닉네임</h2>
                                <span>{m_userNickname}</span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <h2>상태</h2>
                                <span>{m_userStatus}</span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <input type="button" className="modal-button" onClick={() => {onSetModalStatus(0)}} value="밴" />
                                <input type="button" className="modal-button" onClick={() => {onSetModalStatus(0)}} value="확인" />
                                <input type="button" className="modal-button" onClick={() => {setMode(2)}} value="수정" />
                            </div>

                        </div>
                        )}

                        {
                            mode==2 && (
                        <div className="container-flex direction-col">

                            <h1>회원정보 수정</h1>
                            <div className="container-flex justifyContent-center">
                                <h2>번호</h2>
                                <span>{m_userNo}</span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <h2>아이디</h2>
                                <span>{m_userEmail}</span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <h2>닉네임</h2>
                                <span><input type="text" value={m_userNickname} onChange={onSetUserNickname}></input></span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <h2>상태</h2>
                                <span><input type="text" value={m_userStatus} onChange={onSetUserStatus}></input></span>
                            </div>

                            <div className="container-flex justifyContent-center">
                                <input type="button" className="modal-button" onClick={() => {setMode(1)}} value="뒤로가기" />
                                <input type="button" className="modal-button" onClick={() => {onSetModalStatus(0)}} value="요청전송" />
                            </div>

                        </div>
                        )}


                        

                    </div>
                </div>
            </div>
    );
}


function BoardMgmtModal({
    m_boardName,
    m_boardDesc,
    onSetBoardName,
    onSetBoardDesc,
    onSetModalStatus,
    requestForAddingBoard
}){


    return(
            <div >
                <div className="new_modal" >
                    <div className="modal-content">
                        <div className="container-flex direction-col">

                            <h1>게시판 추가</h1>

                            <div className="container-flex justifyContent-center">
                                <h2>게시판 이름</h2>
                                <input type="text" value={m_boardName} onChange={onSetBoardName} />
                            </div>

                            <div className="container-flex justifyContent-center">
                                <h2>게시판 설명</h2>
                                <input type="text" value={m_boardDesc} onChange={onSetBoardDesc} />
                            </div>

                            <div className="container-flex justifyContent-center">
                                <input type="button" className="modal-button" onClick={() => {onSetModalStatus(0)}} value="취소" />
                                <input type="button" className="modal-button" onClick={() => {requestForAddingBoard(0, m_boardName, m_boardDesc)}} value="확인" />
                            </div>

                        </div>

                        

                    </div>
                </div>
            </div>
    );
}








export default AdminFunction;