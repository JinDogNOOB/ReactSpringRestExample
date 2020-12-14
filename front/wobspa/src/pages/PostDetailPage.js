import React from 'react';

import PostDetailContainer from '../components/PostDetail/PostDetailContainer';

function PostDetailPage({match}){
    return(
        <div className="center_content">
            <PostDetailContainer 
                boardNo = {match.params.boardNo}
                postNo = {match.params.postNo}
            />
        </div>
    );
}

export default PostDetailPage;