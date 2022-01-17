import React, { useState, useEffect, useContext, useCallback } from "react";
import Template from "../components/Template";
import ProgressBar from "../components/ProgressBar";
import Logo from "../components/Logo";
import Head from "next/head";
import ContractOperator from "../service/contract";
import { WalletContext } from "../service/context/wallet-context";
import MetamaskButton from "../components/MetamaskButton";

const Home: React.FC = () => {
    // const [error, setError] = useState("");
    // const { walletAddress } = useContext(WalletContext);
    // const [canClaim, setCanClaim] = useState<boolean>(false);

    // const claim = useCallback(async () => {
    //     if (!walletAddress) {
    //         setError("Connect metamask");
    //         return;
    //     }
    //     let r = null;
    //     try {
    //         r = await ContractOperator.claimAirdrop();
    //         console.log(r);
    //     } catch (err: any) {
    //         setError(
    //             err["message"].slice(0, err["message"].indexOf("\n")).slice(err["message"].indexOf(":") + 2),
    //         );
    //     }
    // }, [walletAddress]);

    // useEffect(() => {
    //     async function fetchClaimability() {
    //         if (walletAddress) {
    //             await setCanClaim(await ContractOperator.isInWhitelist(walletAddress));
    //         }
    //     }
    //     fetchClaimability();
    // }, [walletAddress]);

    // console.log(ContractOperator.whoIsOwner());
    return (
        <Template>
            <Head>
                <title>Rinkeby Test Airdrop | Home</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <div className="pb-20">
                <Logo className="text-4xl font-display text-center mt-6" variant="light" />
                <img
                    className="w-4/12 block mx-auto mt-16 homeshadow"
                    src={"images/shroom.png"}
                    alt="The chadest Mushroom"
                />
                <h1 className="font-display text-center text-4xl h1shadow max-w-3xl mx-auto uppercase text-white mt-16">
                    Just click send after changing the ../service/contract/index.ts
                </h1>
                <div>
                    <button
                        onClick={async () => await ContractOperator.airdropToken()}
                        className="text-white font-semibold p-5 rounded-2xl mx-auto block uppercase text-4xl w-64 py-4 bg-main-contrast mt-8 md:my-12 "
                    >
                        SEND
                    </button>
                    {/* {walletAddress ? (
                        <button
                            onClick={async () => await ContractOperator.airdropToken()}
                            className={
                                "text-white font-semibold p-5 rounded-2xl mx-auto block uppercase text-4xl w-64 py-4 bg-main-contrast mt-8 md:my-12 " +
                                (!canClaim ? "opacity-50 cursor-default" : "opacity-100")
                            }
                            disabled={!canClaim}
                        >
                            claim
                        </button>
                    ) : (
                        <div className="mt-4">
                            <MetamaskButton />
                        </div>
                    )}
                    {!!error && <span className="text-red-500 text-xl block mt-5 text-center">{error}</span>}
                    {!canClaim && canClaim !== null && (
                        <span className="text-red-500 text-xl block mt-5 text-center">
                            You don&apos;t have any mintpasses to claim
                        </span>
                    )} */}
                </div>
            </div>
        </Template>
    );
};

export default Home;
