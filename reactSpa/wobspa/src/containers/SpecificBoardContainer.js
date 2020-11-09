import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';
import SpecificBoard from '../components/SpecificBoard';

/**
 * 
 * int boardNo = boardNumber
 */
function SpecificBoardContainer({boardNo}){
    
    // 게시판 정보
    const [boardName, setBoardName] = useState("");
    const [boardDesc, setBoardDesc] = useState("");

    // 게시글 리스트 & 인덱스 번호 (아 이거 글보고 뒤로가기했을때 기억이 되면 좋겠다 테스트 요망)
    /*
1 ~ 10      5         =           
11 ~ 20     14 16 
21 ~ 30


0~9 로 두고  10 ~ 19 로 두고 10으로 나눠서 


0 - 9
10 - 19
20 - 29

(index-1) / 10) * 10 = 왼쪽 끝
(((index-1) / 10)+1) * 10 - 1= 오른쪽끝

    */
    const [postList, setPostList] = useState([]);
    const [index, setIndex] = useState(1);
    
    


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
    const onGetPostList = async(boardNo, indexNumber) =>{
        const response = await axios(axiosOptions.get('/board/'+boardNo+'/post', {}));
        

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