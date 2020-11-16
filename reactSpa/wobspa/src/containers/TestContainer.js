import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosOptions from '../tool/axiosOptions';




function TestContainer(){
    const [count , setCount] = useState(0);
    const [data , setData] = useState({});

    const getTest = async() => {
        try{
            const response = await axios(axiosOptions.get('/board/test/'+count+'/test', {
                a: "get Test a",
                b : "get Test b"
            }));
            setData({
                a: response.data.a,
                b: response.data.b
            });
            setCount(response.data.n+1);
        }catch(e){
            console.log(e);
        }
    }

    const postTest = async() => {
        try{
            const response = await axios(axiosOptions.post('/board/test/'+count+'/test', {
                a: "post Test a",
                b : "post Test b"
            }));
            setData({
                a: response.data.a,
                b: response.data.b
            });
            setCount(response.data.n+1);
        }catch(e){
            console.log(e);
        }

    }

    return (
        <div>
            <div>a {data.a}</div>
            <div>b {data.b}</div>
            <div>n {count}</div>
            <input type="button" onClick={() => getTest()} value="GET TEST" />
            <input type="button" onClick={() => postTest()} value="POST TEST" />

        </div>
    );

}


export default TestContainer;