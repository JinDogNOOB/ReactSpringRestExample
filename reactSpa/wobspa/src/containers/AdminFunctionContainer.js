import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';

import AdminFunction from '../components/AdminFunction';


function AdminFunctionContainer(){
    // 버튼 눌린 상태 저장 defualt 유저버튼
    const [mode, setMode] = useState(1);

    const onSetMode = (i) => {
        setMode(i);
    }

    return (
        <AdminFunction 
        mode = {mode}
        onSetMode = {onSetMode}
        />
    );
}


export default AdminFunctionContainer;