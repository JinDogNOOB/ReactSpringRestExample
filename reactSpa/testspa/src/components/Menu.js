import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color : 'green',
        fontSize: '2em'
    };

    return (
        <div>
            <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link exact to="/Signup/hello/boo">Signup</Link></li>
                <li><Link exact to="/Signup/hello/boo?hey=123&why=345">SignupMess</Link></li>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/Signup/hello/boo" activeStyle={activeStyle}>Signup</NavLink></li>
                <li><NavLink exact to="/Signup/hello/boo?hey=123&why=345" activeStyle={activeStyle}>SignupMess</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu;