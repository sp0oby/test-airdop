import React, { useContext } from "react";
import Link from "next/link";
// import { isAppOwner } from '../utils/web3';
import Logo from "./Logo";
import MetamaskButton from "./MetamaskButton";
import { useRouter } from "next/router";
import { WalletContext } from "../service/context/wallet-context";
type TemplateProps = {
    children: React.ReactElement | React.ReactElement[];
};

const Template: React.FC<TemplateProps> = ({ children }) => {
    const routerLocation = useRouter();
    const { walletAddress } = useContext(WalletContext);

    return (
        <div className="bg-main-light relative">
            <div className="px-20 min-h-screen">
                <div className="absolute top-0 h-136 w-full bg-main-dark left-0 z-0" />
                <div className="flex py-10 relative z-10 items-center">
                    <div className="flex gap-8 mr-auto">
                        <Link href="/">
                            <span className="font-display text-white uppercase hover:text-main-light cursor-pointer text-sm">
                                overview
                            </span>
                        </Link>
                        <Link href="/buy">
                            <span className="font-display text-white uppercase hover:text-main-light cursor-pointer text-sm">
                                buy
                            </span>
                        </Link>
                        {/* <Link href="/gallery">
                            <span className="font-display text-white uppercase hover:text-main-light cursor-pointer text-sm">
                                gallery
                            </span>
                        </Link> */}
                        {/* <Link href="/provenance">
                            <span className="font-display text-white uppercase hover:text-main-light cursor-pointer text-sm">
                                provenance
                            </span>
                        </Link> */}
                        <Link href="/wallet">
                            <span className="font-display text-white uppercase hover:text-main-light cursor-pointer text-sm">
                                my wallet
                            </span>
                        </Link>
                    </div>

                    <div className="items-center ml-auto">
                        <MetamaskButton />
                    </div>
                </div>
                <div className="relative z-10">{children}</div>
            </div>
            <footer className="bg-main-dark px-48 py-16 relative z-20">
                <Logo className="text-xl text-main-dark" variant="light" />
            </footer>
        </div>
    );
};

export default Template;
