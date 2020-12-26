import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../../tool/axiosOptions';

import NavItem from './NavItem';
// https://maxrozen.com/learn-useeffect-dependency-array-react-hooks/ 
// useEffect infinite loop when fetch the data 
function NavItemContainer(){
    
    // 게시판 목록 상태저장중
    const [boardList, setBoardList] = useState([]);

    //axios 게시판 목록 get
    const onRequestBoardList = async() => {
        try{
            console.log("ononReq");

                const response = await axios(axiosOptions.get('/board', {}));
                let tempBoardLists = [];
    
                // console.log(response.data);
                //response.data boardNo boardName boardDesc boardProposer boardStatus
                response.data.map((boardInfo, index) =>{
                    // console.log(boardInfo, index);
                    const data = {
                        boardNo :  boardInfo.boardNo,
                        boardName : boardInfo.boardName,
                        boardDesc : boardInfo.boardDesc
                    }
                    tempBoardLists.push(data);
                });
                setBoardList(tempBoardLists);
            
            
        }catch(e){
            console.log(e);
        }
    }

   
    // variables in [] means "hey run only if variables is changed"

     // run this code only 1 time
    useEffect( () => {
        onRequestBoardList();
    }, []);




    return(
        <NavItem 
        boardList = {boardList}
        />
    );

}


export default NavItemContainer;