import React from 'react';

import UserStatusContainer from '../containers/UserStatusContainer';
import NavItemContainer from '../containers/NavItemContainer';
import TestContainer from '../containers/TestContainer';
import WritingFormContainer from '../containers/WritingFormContainer';
import './Page.css';


function PostWritingFormPage({match}){
    
    return(
            <div className="grid_container">
                <div className="head">
                    <div className="logo_area">
                        로고
                    </div>
                    헤드
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
                

                <div className="full_content">
                    <WritingFormContainer 
                        boardNo = {match.params.boardNo}
                    />
                </div>

                <div className="footer">
                    푸터 
                </div>

            </div>
    );
}

export default PostWritingFormPage;