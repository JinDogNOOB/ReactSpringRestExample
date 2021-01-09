import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import WalletProvider from '../WalletSelector';
import RandomNumberGenerator from '../RandomNumberGenerator';

import useModal from '../../hooks/useModal';
import TestFunctionModal from '../TestFunctionModal';

import './NavItemStyle.css';

function NavItem({boardList}){

    // const testData = ['yo', 'ho~', 'zozo'];
    

    return (
        <ul className="menu_container">
            <li><p href="#">Boards</p><BoardItem datas={boardList}/></li>
            <li><p href="#">FunnyThings</p><FunnyThingsItem /></li>
            <li><p href="#">Notice</p></li>
            <li><p href="#">Etc</p></li>
        </ul>
    );
}


// 게시판 목록 드롭다운 
function BoardItem({datas}){
    return (
      <div className="dropdown_container">
          <div className="dropdown_header">
            <img src={process.env.PUBLIC_URL + '/logo512.png'} />
          </div>
          
          <div className="board_parent">
          {datas.map((data, index) => (
                <div key={index}>
                    <Link to={'/board/' + data.boardNo}>{data.boardName}</Link>
                </div>
              ))}
          </div>
      </div>
    );
}

//FunnyThings 드롭다운
function FunnyThingsItem(){
    const [onPresentTestModal] = useModal(<TestFunctionModal />);
    return (
        <div className="dropdown_container">
            <div className="dropdown_header">
                <img src={process.env.PUBLIC_URL + '/logo512.png'} />
            </div>
            <div className="board_parent">
                <WalletProvider />
                <RandomNumberGenerator />
                <input type="button" onClick={onPresentTestModal} />
            </div>
        </div>
    )
}



export default NavItem;