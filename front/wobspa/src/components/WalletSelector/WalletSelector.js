import React, {useEffect} from 'react';
import {useWeb3Context} from 'web3-react';


const WalletSelector= ({}) => {
    const context = useWeb3Context();

    if (!context.active && !context.error) {
        console.log("loading");
      } else if (context.error) {
        console.log("error");
      } else {
        console.log("success");
      }
    
    const connectWallet = async() => {
        await context.setFirstValidConnector(['MetaMask']);
        console.log();
    }
    const disconnectWallet = async() => {
        await context.unsetConnector();
        alert("disconnected");
    }
    
    return (
        <div>
            {context.active ? (
                <p onClick={() => {disconnectWallet();}}>DisconnectWallet</p>
            ):(
                <p onClick={() => {connectWallet();}}>ConnectWallet</p>
            )}
        </div>
    
    )
}

export default WalletSelector;