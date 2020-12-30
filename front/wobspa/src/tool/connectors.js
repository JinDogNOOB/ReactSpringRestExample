import {Connectors } from 'web3-react';

const {InjectedConnector, NetworkOnlyConnector} = Connectors;

const MetaMask = new InjectedConnector({suppotedNetworks: [1, 4]});

const Infura = new NetworkOnlyConnector({
    providerURL: 'https://mainnet.infura.io/v3/.... etc'
});
const connectors = {MetaMask, Infura};

export default connectors;