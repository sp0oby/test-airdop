import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useMemo, useState } from "react";
import { WalletContext } from "../service/context/wallet-context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const walletContext = useMemo(() => ({ walletAddress }), [walletAddress]);
    // checks the instance of web3
    useEffect(() => {
        if (typeof window !== "undefined" && !!window.ethereum) {
            (async () => {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                setWalletAddress(accounts[0] ?? null);
            })();

            window.ethereum.on("accountsChanged", (accounts: string[]) => {
                setWalletAddress(accounts[0] ?? null);
            });
        }
    }, []);
    return (
        <WalletContext.Provider value={walletContext}>
            <Head>
                <title>Magic Mushrooms NFT</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Component {...pageProps} />
        </WalletContext.Provider>
    );
}
export default MyApp;
