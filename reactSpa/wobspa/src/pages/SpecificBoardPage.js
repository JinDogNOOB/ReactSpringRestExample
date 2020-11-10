import React from 'react';

import './Page.css';
import NavItemContainer from '../containers/NavItemContainer';
import UserStatusContainer from '../containers/UserStatusContainer';
import SpecificBoardContainer from '../containers/SpecificBoardContainer';


function SpecificBoardPage({match}){
    return(
        <div className="grid_container">
                <div className="head">
                    <div className="logo_area">
                        로고
                    </div>
                    <div className="user_area">
                        <UserStatusContainer />
                    </div>

                </div>

                <div className="nav">
                    <NavItemContainer />
                </div>


                <div className="sub_nav">
                    부가메뉴..검색판
                </div>
                
                <div className="left_content">
                    왼쪽 컨텐트 
                </div>

                <div className="center_content">
                    <SpecificBoardContainer 
                        boardNo = {match.params.boardNo}
                    />
                </div>


                <div className="footer">
                    푸터
                </div>

            </div>
    );
}


export default SpecificBoardPage;