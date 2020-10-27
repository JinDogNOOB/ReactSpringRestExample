import React, {useState} from 'react';

import './NavItem.css';

function NavItem(){

    const testData = ['yo', 'ho~', 'zozo'];

    return (
        <ul className="menu_container">
            <li><a href="#">게시판</a><Item datas={testData}/></li>
            <li>기능</li>
            <li>공지사항</li>
            <li>기타</li>
        </ul>
    );
}



function Item({datas}){
    return (
      <ul className="dropdown_container">
          {datas.map((data, index) => (
                <li key={index}>
                    <span>{data}</span>
                </li>
              ))}

      </ul>
    );
}



export default NavItem;