import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './SpecificBoardStyle.css';

function SpecificBoard({
    boardNo,
    boardName,
    boardDesc,
    postList,
    index,
    listAmount,
    onSetIndex,
    onChangeListAmount,
    gotoPostDetailPage

}){

    return(
        <div className="specific_board">
            <div className="title">
                <p className="board_name">Welcome to {boardName} board!</p>
                <p className="board_desc">{boardDesc}</p>
                
                <select className="amount_changer"onChange={onChangeListAmount}>
                    <option value={listAmount}> current {listAmount}</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>


            <div className="post">
                <PostList
                    postList = {postList}
                    gotoPostDetailPage = {gotoPostDetailPage}
                />
                <div>
                    <Link to={'/board/'+boardNo+"/post/addform"}>Write</Link>
                </div>
            </div>


            <div className="index">
                <Index 
                    index = {index}
                    onSetIndex = {onSetIndex}
                />
            </div>

            <div className="search_bar">
                Search

            </div>
        </div>
    );
}


// desc 는 미리보기로 띄워놓자
function PostList({postList, gotoPostDetailPage}){
    return (
        <table className="post_list">
            <colgroup>
                <col width="1%" />
                <col width="20%" />
                <col width="5%" />
                <col width="5%" />
                <col width="2%" />
                <col width="1%" />
            </colgroup>
            <thead>
                <tr>
                    <th>No</th>
                    <th></th>
                    <th>Writer</th>
                    <th>Date</th>
                    <th>View</th>
                    <th>Star</th>
                </tr>
            </thead>
            <tbody>
            {postList.map((val, i) => (
                <tr key={i} onClick={() => {gotoPostDetailPage(val.postNo)}}>
                    <td>{val.postNo}</td>
                    <td>{val.postName}</td>
                    <td>{val.postOwner}</td>
                    <td>not</td>
                    <td>not</td>
                    <td>not</td>
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
        <ul className="post_list_index">
            <li>Begin</li>
            <li>Prev</li>
            {
                indexArray.map((val, i) => (
                    <li key={i} onClick={()=>{onSetIndex(val)}}>{val}</li>
                ))
            }
            <li>Next</li>
            <li>End</li>
        </ul>
    );
}





export default SpecificBoard;