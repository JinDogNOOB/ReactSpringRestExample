import React, {useState} from 'react';
import './Component.css';


function PostDetail({
    postName,
    postDesc,
    onClickCancel,
    onClickModify
}) { 

    return (
        <div>
            <div>글제목</div>
            <div>{postName}</div>
            <div>글내용</div>
            <div>{postDesc}</div>
            <div>
                <input type="button" value="수정" onClick={() => {onClickModify()}}/>
                <input type="button" value="취소" onClick={() => {onClickCancel()}} />
            </div>

        </div>
    );
}

export default PostDetail;
