import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../modules/user';
import {useHistory} from 'react-router-dom';
// 요거 작성이랑 수정 둘다 PostForm.js 이용하게 바꿔라
import PostForm from '../components/PostDetail';

function PostDetailContainer({boardNo, postNo}){
    const history = useHistory();
    //리덕스
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));
    const {jwt} = useSelector(state=> ({
        jwt : state.user.jwt
    }));

    // state
    const [postName, setPostName] = useState("");
    const [postDesc, setPostDesc] = useState("");

    // common 
    const onCancel = () => {
        history.push('/board/'+boardNo);
    }
    const gotoModifyingPage = () => {
        history.push('/board/'+boardNo+'/post/modform/'+postNo);
    }

    // axios 

    // 게시글 가져오기
    const onLoadPost = async() => {
        try{
            const response = await axios(axiosOptions.get('/board/'+boardNo+'/post/'+postNo, {}));
            setPostName(response.data.postName);
            setPostDesc(response.data.postDesc);
        }catch(e){
            console.log(e);
        }
    }

    
    // useEffect
    useEffect(() => {
        onLoadPost();
    }, []);
    

return (
    <PostForm
        postName = {postName}
        postDesc = {postDesc}
        onClickCancel = {onCancel}
        onClickModify = {gotoModifyingPage}
    />
);

}


export default PostDetailContainer;