import React from 'react';

import './Page.css';
import NavItemContainer from '../containers/NavItemContainer';
import UserStatusContainer from '../containers/UserStatusContainer';
import SpecificBoardContainer from '../containers/SpecificBoardContainer';


function SpecificBoardPage({match}){
    return(
                <div className="center_content">
                    <SpecificBoardContainer 
                        boardNo = {match.params.boardNo}
                    />
                </div>

    );
}


export default SpecificBoardPage;