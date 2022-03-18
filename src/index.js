import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

ReactDOM.render(
  <React.StrictMode>
        <iframe title="This is a unique title" 
    src="https://gateway.ipfscdn.io/ipfs/QmcH9f3GLFUuGW2REdBVZpgY2ZTTdoZNs9K7QrxsxNDcBV/marketplace.html?contract=0x7E180C3eC7aE1600Ae6e4Dd326E2f92406c5e5b2&chainId=4&listingId=0"
    width="600px"
    height="600px"
    frameborder="0"
    ></iframe>
    

  
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
