import React from 'react';

import UserStatusContainer from '../containers/UserStatusContainer';
import NavItemContainer from '../containers/NavItemContainer';
import TestContainer from '../containers/TestContainer';
import WritingFormContainer from '../containers/WritingFormContainer';
import './Page.css';


function PostWritingFormPage({match}){
    
    return(
                <div className="full_content">
                    <WritingFormContainer 
                        boardNo = {match.params.boardNo}
                    />
                </div>
    );
}

export default PostWritingFormPage;