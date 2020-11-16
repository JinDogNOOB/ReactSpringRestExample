import React from 'react';

import './Page.css';
import NavItemContainer from '../containers/NavItemContainer';
import UserStatusContainer from '../containers/UserStatusContainer';
import AdminFunctionContainer from '../containers/AdminFunctionContainer';

function AdminPage(){
    return(
                <div className="admin_function">
                    <AdminFunctionContainer />
                </div>

    );
}

export default AdminPage;