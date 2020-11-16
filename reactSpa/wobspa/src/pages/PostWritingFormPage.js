import React from 'react';

import UserStatusContainer from '../containers/UserStatusContainer';
import NavItemContainer from '../containers/NavItemContainer';
import TestContainer from '../containers/TestContainer';
import WritingPostContainer from '../containers/WritingPostContainer';
import './Page.css';


function PostWritingFormPage({match}){
    
    return(
                <div className="full_content">
                    <WritingPostContainer 
                        boardNo = {match.params.boardNo}
                    />
                </div>
    );
}

export default PostWritingFormPage;