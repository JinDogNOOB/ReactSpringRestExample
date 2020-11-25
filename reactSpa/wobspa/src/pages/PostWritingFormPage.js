import React from 'react';


import WritingPostContainer from '../components/PostForm/WritingPostContainer';
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