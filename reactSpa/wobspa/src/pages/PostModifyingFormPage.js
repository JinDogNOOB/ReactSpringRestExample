import React from 'react';

import ModifyingPostContainer from '../components/PostForm/ModifyingPostContainer';

function PostModifyingFormPage({match}){
    return(
        <div className="full_content">
        <ModifyingPostContainer 
            boardNo = {match.params.boardNo}
            postNo = {match.params.postNo}
        />
        </div>
    );
}

export default PostModifyingFormPage;