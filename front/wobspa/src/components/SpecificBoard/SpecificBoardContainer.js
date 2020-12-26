import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../../tool/axiosOptions';
import useHistoryState from '../../tool/useHistoryState';
import SpecificBoard from './SpecificBoard';

import {setLoginStatus, setJwt} from '../../modules/user';
import {useSelector, useDispatch} from 'react-redux';

import {useHistory} from 'react-router-dom';

/**
 * 
 * int boardNo = boardNumber
 */
function SpecificBoardContainer({boardNo}){
    
    const history = useHistory();

    // 리덕스 (유저정보)
    const {isLoggedIn} = useSelector(state=> ({
        isLoggedIn: state.user.isLoggedIn
    }));
    const {jwt} = useSelector(state=> ({
        jwt : state.user.jwt
    }));
    const dispatch = useDispatch();


    // 게시판 정보
    const [boardName, setBoardName] = useState("");
    const [boardDesc, setBoardDesc] = useState("");

    // 게시글 리스트 & 인덱스 번호 (아 이거 글보고 뒤로가기했을때 기억이 되면 좋겠다 테스트 요망)
    /*
1 ~ 10      5         =           
11 ~ 20     14 16 

(index-1) / 10) * 10 = 왼쪽 끝
(((index-1) / 10)+1) * 10 - 1= 오른쪽끝
    */
    const [postList, setPostList] = useState([]);
    // const [index, setIndex] = useHistoryState(1, "index");
    const [index, setIndex] = useState(1);
    const [indexList, setIndexList] = useState([]);
    const [listAmount, setListAmount] = useState(30);
    
    const onSetIndex = (index) => {
        setIndex(index);
    }
    const onChangeListAmount = (e) => {
        setListAmount(e.target.value);
    }

    // common 
    const gotoPostDetailPage = (postNo) => {
        history.push('/board/'+boardNo+'/post/'+postNo);
    }


    // axios
    // 특정 게시판 정보 가져오기
    const onGetBoardInfo = async(boardNo) =>{
        try{
            const response = await axios(axiosOptions.get('/board/'+boardNo, {}));
            setBoardName(response.data.boardName);
            setBoardDesc(response.data.boardDesc);
        }catch(e){
            console.log(e);
        }
    }
    // 게시글 리스트 가져오기, 
    const onGetPostList = async(boardNo, indexNumber, listAmount) =>{
        try{
            const response = await axios(axiosOptions.get('/board/'+boardNo+'/post', {
                index : indexNumber,
                listAmount : listAmount
            }));

            let tempArray = [];
            response.data.map((val, index) => {
                let temp = {
                    postNo : val.postNo,
                    postName : val.postName,
                    postDesc : val.postDesc,
                    postOwner : val.postOwner
                }
                tempArray.push(temp);
            });
            setPostList(tempArray);
            
        }catch(e){
            console.log(e);
        }
    }
    // 게시글 작성 
    const onRequestAddingPost = async(postName, postDesc) => {
        try{
            const response = await axios(axiosOptions.post('/board/'+boardNo+'/post', {
                postName : postName,
                postDesc : postDesc
            }, jwt));

        }catch(e){
            console.log(e);
        }
    }
    


    // useEffect 
    useEffect(() => {
        onGetBoardInfo(boardNo);
    },[boardNo]);
    useEffect(() => {
        onGetPostList(boardNo, index, listAmount);
    },[boardNo, index, listAmount]);
    


    return(
        <SpecificBoard 
        boardNo = {boardNo}
        boardName = {boardName}
        boardDesc = {boardDesc}
        postList = {postList}
        index = {index}
        listAmount = {listAmount}
        onSetIndex = {onSetIndex}
        onChangeListAmount = {onChangeListAmount}
        gotoPostDetailPage = {gotoPostDetailPage}
        />

    );
}

export default SpecificBoardContainer;