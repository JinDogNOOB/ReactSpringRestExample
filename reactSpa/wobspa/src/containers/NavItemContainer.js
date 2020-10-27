import React, {useState} from 'react';

import NavItem from '../components/NavItem';

function NavItemContainer(){

    const [boardName, setBoardName] = useState([]);
    return(
        <NavItem />
    );

}


export default NavItemContainer;