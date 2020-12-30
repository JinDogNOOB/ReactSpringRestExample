import React, {createContext, useEffect, useState} from 'react';
import { parseConfigFileTextToJson } from 'typescript';
import Web3 from 'web3';
import {useWeb3Context} from 'web3-react'

export interface Web3Context{
    web3?: typeof Web3 
}

export const Context = createContext<Web3Context>({
    web3 : undefined
})


const Web3jsProvider: React.FC = ({children}) => {
    const [web3, setWeb3] = useState<any>();
    const web3context = useWeb3Context();


    useEffect(() => {
        // context.active 상태가 바뀌면 동작
        console.log("web3js provider변경감지")
        if(web3context.active == true){
            console.log("web3 신규생성")
            setWeb3(new Web3(web3context.library));
        }else{
            setWeb3(undefined);
            console.log("web3 제거")
        }
    }, [web3context.active])
    
    return <Context.Provider value={{web3}}>{children}</Context.Provider>
    
}

export default Web3jsProvider;