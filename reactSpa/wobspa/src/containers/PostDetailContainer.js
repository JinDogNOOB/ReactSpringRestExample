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
    // 본글
    const [postName, setPostName] = useState("");
    const [postDesc, setPostDesc] = useState("");
    // 댓글 입력, 수정용
    const [subPostDesc, setSubPostDesc] = useState("");
    const onSetSubPostDesc = (e) => {setSubPostDesc(e.target.value)}
    // 댓글 리스트
    const [subPostList, setSubPostList] = useState([]);
    

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

    // 댓글 가져오기
    const onLoadSubPost = async() => {
        try{
            const response = await axios(axiosOptions.get('/board/'+boardNo+'/post/'+postNo+'/sub', {
            }));
            let tempArray = [];
            response.data.map((val, index) => {
                let temp = {
                    postSubNo : val.postSubNo,
                    postSubDesc : val.postSubDesc,
                    postSubOwner : val.postSubOwner
                }
                tempArray.push(temp);
            });
            setSubPostList(tempArray);

        }catch(e){
            console.log(e);
        }
    }
    // 댓글 쓰기
    const onInsertSubPost = async() => {
        try{
            const response = await axios(axiosOptions.post('/board/'+boardNo+'/post/'+postNo+'/sub', {
                postSubDesc : subPostDesc,
                jwt : jwt
            }));
            setSubPostDesc("");
            onLoadSubPost();
        }catch(e){
            console.log(e);
        }
    }
    // 댓글 수정 XXXXXXXXXXXXXX 수정 ㄴㄴㄴ 아니다
    // 수정이 필요없다 삭제만 넣자
    const onModifySubPost = async(postSubNo) => {
        try{
            const response = await axios(axiosOptions.put('/board/'+boardNo+'/post/'+postNo+'/sub/'+postSubNo, {
                postSubDesc : subPostDesc,
                jwt : jwt
            }));
            setSubPostDesc("");
        }catch(e){
            console.log(e);
        }
    }
    // 댓글 삭제
    const onDeleteSubPost = async(postSubNo) => {
        try{
            const response = await axios(axiosOptions.delete('/board/'+boardNo+'/post/'+postNo+'/sub/'+postSubNo, {
                jwt : jwt
            }));

        }catch(e){
            console.log(e);
        }
    }

    
    // useEffect
    useEffect(() => {
        onLoadPost();
        onLoadSubPost();
    }, []);
    

return (
    <PostForm
        postName = {postName}
        postDesc = {postDesc}
        onClickCancel = {onCancel}
        onClickModify = {gotoModifyingPage}

        subPostList = {subPostList}
        subPostDesc = {subPostDesc}
        onSetSubPostDesc = {onSetSubPostDesc}
        onInsertSubPost = {onInsertSubPost}
        

    />
);

}


export default PostDetailContainer;