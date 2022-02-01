import { ReactElement, ReactComponentElement } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider: any) {
  return new Web3(provider);
}

const DecentralizedTwitter = ({ Component, pageProps }): ReactElement => {
  console.log("DecentralizedTwitter");

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
};

export default DecentralizedTwitter;
