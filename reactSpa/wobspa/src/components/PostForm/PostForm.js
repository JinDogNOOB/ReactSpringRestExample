import React, {useState} from 'react';

/**
 * title = Purpose of this Component
 * postName
 * postDesc
 * cancel callback
 * ok callback
 */
function PostForm({
    title,
    postName,
    postDesc,
    onSetPostName,
    onSetPostDesc,
    onClickCancel,
    onClickSubmit

}){

    return (
        <div>
            <div>{title}</div>
            <div>제목</div>
            <input type="text" value={postName} onChange={onSetPostName} />
            <div>내용</div>
            <textarea type="text" value={postDesc} onChange={onSetPostDesc} />
            <div>
                <input type="button" onClick={() => {onClickSubmit();}} value="확인" />
                <input type="button" onClick={() => {onClickCancel();}} value="취소" />
            </div>
        </div>
    );
}

export default PostForm;