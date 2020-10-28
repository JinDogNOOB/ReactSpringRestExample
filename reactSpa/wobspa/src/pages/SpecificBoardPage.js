import React from 'react';

function SpecificBoardPage({match}){
    return(
        <div>
            SpecificBoardPage {match.params.boardNo}
        </div>
    );
}


export default SpecificBoardPage;