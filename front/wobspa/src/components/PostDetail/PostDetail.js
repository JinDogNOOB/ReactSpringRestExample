import React, {useState} from 'react';
import './PostDetailStyle.css';


function PostDetail({
    postName,
    postDesc,
    onClickCancel,
    onClickModify,

    subPostList,
    subPostDesc,
    onSetSubPostDesc,
    onInsertSubPost
}) { 



    return (
        <div className="post_detail">
            <div className="post_title">{postName}</div>
            <div className="post_content">{postDesc}</div>

            <div>
                <input type="button" value="수정" onClick={() => {onClickModify()}}/>
                <input type="button" value="취소" onClick={() => {onClickCancel()}} />
            </div>

            <SubPost 
            subPostList = {subPostList}
            subPostDesc = {subPostDesc}
            onSetSubPostDesc = {onSetSubPostDesc}
            onInsertSubPost = {onInsertSubPost}
            />


        </div>
    );
}

function SubPost({
    subPostList,
    subPostDesc,
    onSetSubPostDesc,
    onInsertSubPost
}){
        const SubPostList = () => {
            return (
            <div>
                {subPostList.map((val, index) => (
                    <tr>
                        <td>{val.postSubNo}</td>
                        <td>{val.postSubDesc}</td>
                        <td>{val.postSubOwner}</td>
                    </tr>
                ))}
            </div>
            )

        }
        
        return(
            <div>
                <div>
                    <input type="text" value={subPostDesc} onChange={onSetSubPostDesc} />
                    <input type="button" value="댓글작성" onClick={() => {onInsertSubPost()}} />
                </div>
                <div>
                    <SubPostList />
                </div>
            </div>

        );
}





export default PostDetail;
