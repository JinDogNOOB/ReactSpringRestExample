import React from 'react';



function PostModifyingFormPage({match}){
    if(match.params.postNo == null){
        console.log("postNo 입력안댐");
    }else{
        console.log("postNo 입력됨" + match.params.postNo);
    }
    return(
        <div>
            wring form boardNo{match.params.boardNo} postNo{match.params.postNo}
        </div>
    );
}

export default PostModifyingFormPage;