import React from 'react';

import './AdminPage.css';
import './MainPage.css';
import NavItemContainer from '../containers/NavItemContainer';
import UserStatusContainer from '../containers/UserStatusContainer';
import AdminFunctionContainer from '../containers/AdminFunctionContainer';

function AdminPage(){
    return(
            <div className="grid_container">
                <div className="head">
                    <div className="logo_area">
                        로고
                    </div>
                    ADMIN 페이지입니다 ㅎㅎ
                    <div className="user_area">
                        <UserStatusContainer />
                    </div>

                </div>

                <div className="nav">
                    <NavItemContainer />
                </div>

                <div className="admin_function">
                    <AdminFunctionContainer />
                </div>





                <div className="footer">
                    푸터
                </div>

            </div>
    );
}

export default AdminPage;