import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Component.css';

function NavItem({boardList}){

    // const testData = ['yo', 'ho~', 'zozo'];

    return (
        <ul className="menu_container">
            <li><a href="#">게시판</a><BoardItem datas={boardList}/></li>
            <li>기능</li>
            <li>공지사항</li>
            <li>기타</li>
        </ul>
    );
}



function BoardItem({datas}){
    return (
      <div className="dropdown_container">
          <div className="dropdown_header">
              드롭다운헤더
          </div>
          {datas.map((data, index) => (
                <div key={index}>
                    <Link to={'/board/' + data.boardNo}>{data.boardName}</Link>
                </div>
              ))}

      </div>
    );
}



export default NavItem;