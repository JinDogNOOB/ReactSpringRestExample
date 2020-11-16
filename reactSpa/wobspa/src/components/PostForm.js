import React, {useState} from 'react';

/**
 * title = Purpose of this Component
 * postName
 * postDesc
 * cancel callback
 * ok callback
 */
function PostForm({

}){

    return (
        <div>
            <div>~~하기</div>
            <div>제목</div>
            <input type="text" />
            <div>내용</div>
            <textarea type="text" />
            <div>
                <input type="button" value="확인" />
                <input type="button" value="취소" />
            </div>
        </div>
    );
}

export default PostForm;