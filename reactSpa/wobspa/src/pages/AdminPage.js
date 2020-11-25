import React from 'react';

import './Page.css';

import AdminFunctionContainer from '../components/AdminFunction/AdminFunctionContainer';

function AdminPage(){
    return(
                <div className="admin_function">
                    <AdminFunctionContainer />
                </div>

    );
}

export default AdminPage;