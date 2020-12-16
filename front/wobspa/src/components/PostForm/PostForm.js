import React, {useState} from 'react';
import './PostFormStyle.css';

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
        <div className="postFormContainer">
            <div>
                <p>{title} 하기</p>
            </div>
            <div>
                <input className="textbox" type="text" value={postName} onChange={onSetPostName} placeholder="write title for post"/>
            </div>
            <div>
                <textarea className="textbox" type="text" value={postDesc} onChange={onSetPostDesc} placeholder="write the post here" />
            </div>
        
            <div>
                <input type="button" onClick={() => {onClickSubmit();}} value="확인" />
                <input type="button" onClick={() => {onClickCancel();}} value="취소" />
            </div>
        </div>
    );
}

export default PostForm;