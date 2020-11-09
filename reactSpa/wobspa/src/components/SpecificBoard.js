import React, {useState, useEffect} from 'react';

import './SpecificBoard.css';

function SpecificBoard(){

    return(
        <div className="specific_board">
            <div className="title">
                제목
            </div>

            <div className="post_list">
                <ul>
                    <Post />
                </ul>
                <div>
                    글쓰기 
                </div>

            </div>

            <div className="index">
                인덱스

            </div>

            <div className="search_bar">
                검색창

            </div>
        </div>
    );
}

function Post(){
    return (
        <div>
            글
        </div>
    );
}





export default SpecificBoard;