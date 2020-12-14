import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import axiosOptions from '../../tool/axiosOptions';

import {setLoginStatus, setJwt} from '../../modules/user';

import {useHistory} from 'react-router-dom';

// import WritingForm from '../components/WritingForm';
import PostForm from './PostForm';


function WritingPostContainer({boardNo}){
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
        history.push('/board/'+boardNo);
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
    <PostForm
        title = "temp Title"
        postName = {postName}
        postDesc = {postDesc}
        onSetPostName = {onSetPostName}
        onSetPostDesc = {onSetPostDesc}
        onClickCancel = {onCancel}
        onClickSubmit = {onAddPost}
    />
);

}


export default WritingPostContainer;