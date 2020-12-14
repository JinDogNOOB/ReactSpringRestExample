import React from 'react';


import SpecificBoardContainer from '../components/SpecificBoard/SpecificBoardContainer';


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