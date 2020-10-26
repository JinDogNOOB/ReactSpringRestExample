import React from 'react';

import UserStatusContainer from '../containers/UserStatusContainer';
import './MainPage.css';
/*
헤더 : 로고, 전광판
컨텐트 : 왼쪽은실시간 중앙은 검색 오른쪽은 유저
서브컨텐트 : 메뉴
메인 : 왼쪽 게시판  중앙 볼것들장마다달라 오른쪽 광고
푸터 : 맨밑 저작권 등등
*/

function MainPage(){

    if(true){
        return(
            <div className="grid_container">
                <div className="head">
                    헤드
                </div>

                <div className="nav">
                    내브
                </div>

                <div className="sub_nav">
                    부가메뉴..검색판
                </div>

                <div className="content">
                    컨텐트
                </div>

                <div className="footer">
                    푸터
                </div>

            </div>
        );
    }

    return(
        <div>
            <div className="header">
                
                header
            </div>
            <div className="content">
                <ul>
                    <li>실시간</li>
                    <li>검색창</li>
                    <li><UserStatusContainer /></li>
                </ul>
            </div>
            <div className="subContent">
                <ul>
                    <li><a>메뉴</a></li>
                    <li><a>메뉴</a></li>
                    <li><a>메뉴</a></li>
                    <li><a>메뉴</a></li>
                    <li><a>메뉴</a></li>
                    <li><a>메뉴</a></li>
                    <li><a>메뉴</a></li>
                </ul>
            </div>
            <div className="main">

            </div>
            <footer className="footer">
                footer
            </footer>
            
        </div>
    );
}

export default MainPage;