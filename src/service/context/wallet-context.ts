import { createContext } from "react";

export interface IWalletContext {
    walletAddress: string | null;
}

export const WalletContext = createContext<IWalletContext>({ walletAddress: null });
