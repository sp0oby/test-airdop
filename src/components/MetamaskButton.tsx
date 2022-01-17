import React, { useContext } from "react";
import { WalletContext } from "../service/context/wallet-context";
// import { connectWalletPrompt } from '../utils/web3';

const MatamaskButton: React.FC = () => {
    const { walletAddress } = useContext(WalletContext);
    return (
        <>
            {typeof window !== "undefined" && !!window.ethereum ? (
                <button
                    onClick={(e) => {
                        if (!walletAddress) {
                            window.ethereum.request({ method: "eth_requestAccounts" });
                        }
                    }}
                    className="py-1 px-3 bg-white flex items-center ml-auto rounded-md origin-center transform hover:scale-105 transition-all"
                >
                    <img
                        className="h-8 ml-auto"
                        src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
                        alt="MetaMask logo"
                    />
                    {!!walletAddress ? (
                        <>
                            <div className="bg-green-500 h-2 w-2 mx-2 rounded-full"></div>
                            <span className="text-green-500 text-base font-bold">Connected</span>
                        </>
                    ) : (
                        <span className="text-green-500 text-base font-bold px-3">Connect</span>
                    )}
                </button>
            ) : (
                <a
                    href="https://metamask.io/download.html"
                    className="py-1 px-3 bg-white flex items-center ml-auto rounded-md origin-center transform hover:scale-105 transition-all"
                >
                    <img
                        className="h-8 ml-auto "
                        src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
                        alt="MetaMask logo"
                    />
                    <>
                        <div className="bg-green-500 h-2 w-2 mx-2 rounded-full"></div>
                        <span className="text-green-500 text-base font-bold">Install metamask</span>
                    </>
                </a>
            )}
        </>
    );
};

export default MatamaskButton;
