import { FC, useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/connectors";

// import { Erc20__factory } from "../contracts/types";

const Index: FC = () => {
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
  } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={connect}>Connect</button>
      <p>Account: {account}</p>

      <p>Token Balance: 0</p>
    </>
  );
};

export default Index;
