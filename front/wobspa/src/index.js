import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import rootReducer from './modules';
import {Provider} from 'react-redux';

import {UseWalletProvider} from 'use-wallet';
import connectors from './tool/connectors'
import Web3Provider from 'web3-react';
import Web3 from 'web3';

import Web3jsProvider from './contexts/Web3jsProvider';
import ModalsProvider from './contexts/Modals';
const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Web3Provider 
          connectors={connectors}
          libraryName={'web3.js'}
          web3Api={Web3}
          >
            <Web3jsProvider>
            <ModalsProvider>
        <Root />
        </ModalsProvider>
      </Web3jsProvider>
      </Web3Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
