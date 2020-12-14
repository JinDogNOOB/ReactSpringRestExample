import React from 'react';
import NavItemContainer from '../components/NavItem/NavItemContainer';

function BLogoNNav(){
    return(
        <div className="logo_nav">

            <div className="logo_area">
                <img src={process.env.PUBLIC_URL + '/logo512.png'} />
            </div>

            <div className="nav_area">
                <NavItemContainer />
            </div>
        </div>
    );
}


export default BLogoNNav;