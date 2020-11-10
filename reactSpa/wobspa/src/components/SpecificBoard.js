import React, {useState, useEffect} from 'react';

import './SpecificBoard.css';

function SpecificBoard({
    boardName,
    boardDesc,
    postList,
    index,
    listAmount,
    onSetIndex,
    onSetListAmount

}){

    // 인덱스 번호 계산
    

    return(
        <div className="specific_board">
            <div className="title">
                {boardName} 게시판 설명 {boardDesc} , {listAmount}개씩 출력
            </div>

            <div className="post_list">
                <PostList
                    postList = {postList}
                />
                <div>
                    글쓰기 버튼
                </div>

            </div>

            <div className="index">
                <Index 
                    index = {index}
                    onSetIndex = {onSetIndex}
                />
            </div>

            <div className="search_bar">
                검색창

            </div>
        </div>
    );
}


// desc 는 미리보기로 띄워놓자
function PostList({postList}){
    return (
        <table>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>작성일</th>
                    <th>조회수</th>
                    <th>추천</th>
                </tr>
            </thead>
            <tbody>
            {postList.map((val, i) => (
                <tr key={i}>
                    <td>{val.postNo}</td>
                    <td>{val.postName}</td>
                    <td>{val.postOwner}</td>
                    <td>미정</td>
                    <td>미정</td>
                    <td>미정</td>
                </tr>
            ))}
            </tbody>

        </table>
    );
}

function Index({
    index,
    onSetIndex
}){
    let indexArray = [];
    let start = ( Math.floor(((index-1) / 10)) * 10) +1
    let end = start+10;
    for(start; start < end; start++){
        indexArray.push(start);
    }

    return(
        <ul>
            <li>처음</li>
            <li>이전</li>
            {
                indexArray.map((val, i) => (
                    <li key={i} onClick={()=>{onSetIndex(val)}}>{val}</li>
                ))
            }
            <li>다음</li>
            <li>끝</li>
        </ul>
    );
}





export default SpecificBoard;