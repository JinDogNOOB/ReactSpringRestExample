import {useContext} from 'react';
import {Context} from '../contexts/Web3jsProvider';


const useWeb3js = () => {
    const {web3} = useContext(Context);
    return web3;
}

export default useWeb3js;