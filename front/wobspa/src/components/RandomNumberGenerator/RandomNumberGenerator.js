import React, {useEffect} from 'react';

import { useWeb3Context } from 'web3-react'
import Web3 from 'web3';
import useWeb3js from '../../hooks/useWeb3js';

const RandomNumberGenerator = () => {
    const context = useWeb3Context();
   /*  const web3 = new Web3(context.library);
    console.log(context);
    console.log(web3);
    console.log(web3.currentProvider); */

    
    const web3prov = useWeb3js();

    // console.log(context.library.currentProvider);
    /*
    context.library 가 Web3 객체네 web3js
    */

    const test = async() => {
        console.log((await web3prov.eth.getBlock("latest")).hash);
        console.log((await web3prov.eth.getBlockNumber()));
        // var result = await web3.eth.getAccounts();
        var hash = (await web3prov.eth.getBlock("latest")).hash;
        alert(hash%1000);
        
    }
    return (
        <div>{context.active ? (
                <p onClick={()=>test()}>연결된 네트워크블록을 이용한 랜덤번호생성</p>
            ):(
                
                <p>연결필요</p>
            )
        }
            
        </div>
    )
}

export default RandomNumberGenerator;

