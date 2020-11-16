import React, {useState} from 'react';
import './Component.css';


function WritingForm({
    postName,
    postDesc,
    onSetPostName,
    onSetPostDesc,
    onAddPost
}) { 

    return (
        <div className="writing_form">
            <div>글제목</div>
            <div><input type="text" value={postName} onChange={onSetPostName} /></div>
            <div>글내용</div>
            <div><textarea type="text" value={postDesc} onChange={onSetPostDesc} /></div>
            <div>
                <input type="button" value="확인" onClick={() => {onAddPost()}}/>
                <input type="button" value="취소"/>
            </div>

        </div>
    );
}

export default WritingForm;
