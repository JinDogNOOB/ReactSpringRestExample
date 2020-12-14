import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './NavItemStyle.css';

function NavItem({boardList}){

    // const testData = ['yo', 'ho~', 'zozo'];

    return (
        <ul className="menu_container">
            <li><p href="#">게시판</p><BoardItem datas={boardList}/></li>
            <li><p href="#">기능</p></li>
            <li><p href="#">공지사항</p></li>
            <li><p href="#">기타</p></li>
        </ul>
    );
}



function BoardItem({datas}){
    return (
      <div className="dropdown_container">
          <div className="dropdown_header">
            <img src={process.env.PUBLIC_URL + '/logo512.png'} />
          </div>
          <div className="board_parent">
          {datas.map((data, index) => (
                <div key={index}>
                    <Link to={'/board/' + data.boardNo}>{data.boardName} 게시판</Link>
                </div>
              ))}
          </div>
          

      </div>
    );
}



export default NavItem;