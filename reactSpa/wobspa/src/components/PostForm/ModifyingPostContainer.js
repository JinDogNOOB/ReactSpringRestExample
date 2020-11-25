import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import axiosOptions from '../../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../../modules/user';
import {useHistory} from 'react-router-dom';
// 요거 작성이랑 수정 둘다 PostForm.js 이용하게 바꿔라
import PostForm from './PostForm';

function ModifyingPostContainer({boardNo, postNo}){
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
    const onSetPostName = (e) => {setPostName(e.target.value);}
    const onSetPostDesc = (e) => {setPostDesc(e.target.value);}

    // common 
    const onCancel = () => {
        history.push('/board/'+boardNo+'/post/'+postNo);
    }

    // axios 
    // 게시글 수정
    const onModifyPost = async() => {
        try{
            console.log(jwt);
            const response = await axios(axiosOptions.put('/board/'+boardNo+'/post/'+postNo, {
                postName : postName,
                postDesc : postDesc,
                jwt : jwt
            }));

        }catch(e){
            console.log(e);
        }
    }
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
        title = "temp Title"
        postName = {postName}
        postDesc = {postDesc}
        onSetPostName = {onSetPostName}
        onSetPostDesc = {onSetPostDesc}
        onClickCancel = {onCancel}
        onClickSubmit = {onModifyPost}
    />
);

}


export default ModifyingPostContainer;