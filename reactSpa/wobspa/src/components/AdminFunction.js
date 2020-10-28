import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './AdminFunction.css';

export const USER = 1;
export const BOARD = 2;
export const REQUESTEDBOARD = 3;



function AdminFunction(){
    // admin menu 가 무엇이 눌렀느냐에 따라서 
    // amdin info 가 그려져야한다... 흠 생각생각하즈아아

    let adminInfoJSX = (<div>null</div>);


    let testArray = ['a', 'b', 'c', 'd'];
    if(true){
        adminInfoJSX = 
            testArray.map((data, index) => (
                <div key={index}>
                    <h1>{data}</h1>
                </div>
            ));
    }
    switch(1){
        case USER:{

            break;
        }
        case BOARD:{

            break;
        }
        case REQUESTEDBOARD:{

            break;
        }
        default:{
            break;
        }
    }

    return (
        <div className="admin_function_container">
            <div className="admin_menu">

            </div>
            <div className="admin_info">
                {adminInfoJSX}
            </div>

        </div>
    );
}


export default AdminFunction;