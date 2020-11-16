import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../modules/user';

// 요거 작성이랑 수정 둘다 PostForm.js 이용하게 바꿔라
import WritingForm from '../components/WritingForm';

function ModifyingPostContainer({boardNo}){
    //리덕스
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));
    const {jwt} = useSelector(state=> ({
        jwt : state.user.jwt
    }));


    const [postName, setPostName] = useState("");
    const [postDesc, setPostDesc] = useState("");

    const onSetPostName = (e) => {
        setPostName(e.target.value);
    }
    const onSetPostDesc = (e) => {
        setPostDesc(e.target.value);
    }

    // axios 
    const onAddPost = async() => {
        try{
            console.log(jwt);
            const response = await axios(axiosOptions.post('/board/'+boardNo+'/post', {
                postName : postName,
                postDesc : postDesc,
                jwt : jwt
            }));

        }catch(e){
            console.log(e);
        }

    }
    

return (
    <WritingForm
        postName = {postName}
        postDesc = {postDesc}
        onSetPostName = {onSetPostName}
        onSetPostDesc = {onSetPostDesc}
        onAddPost = {onAddPost}
    />
);

}


export default WritingPostContainer;