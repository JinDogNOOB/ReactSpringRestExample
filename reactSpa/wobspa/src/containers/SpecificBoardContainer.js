import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';
import SpecificBoard from '../components/SpecificBoard';

import {setLoginStatus, setJwt} from '../modules/user';
import {useSelector, useDispatch} from 'react-redux';

/**
 * 
 * int boardNo = boardNumber
 */
function SpecificBoardContainer({boardNo}){
    

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
    const [index, setIndex] = useState(1);
    const [listAmount, setListAmount] = useState(30);
    
    


    // axios
    // 게시판 정보 가져오기
    const onGetBoardInfo = async(boardNo) =>{
        try{
            const response = await axios(axiosOptions.get('/board/', {}));
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
        }catch(e){
            console.log(e);
        }
    }
    // 게시글 작성 
    const onRequestAddingPost = async(postName, postDesc) => {
        try{
            const response = await axios(axiosOptions.post('/board/'+boardNo+'/post', {
                postName : postName,
                postDesc : postDesc,
                jws : jwt
            }));

        }catch(e){
            console.log(e);
        }
    }
    


        // useEffect
    useEffect(() => {
        onGetBoardInfo();
    },);



    return(
        <SpecificBoard />

    );
}

export default SpecificBoardContainer;