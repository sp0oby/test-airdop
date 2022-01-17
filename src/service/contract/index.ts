import ContractJSON from "./SeleneAirdrop.json";
import Web3 from "web3";
import web3Utils from "web3-utils";
import abiJSON from "./abi.json"
import { List } from "postcss/lib/list";

// const contractJSON = ContractJSON as { abi: any };

const contractJSON = abiJSON as { abi: any };
// TODO change the contract address
export default class ContractOperator {
    public static web3 = new Web3(new Web3.providers.HttpProvider("https://andromeda.metis.io/?owner=1088"));
    // public static Contract = new ContractOperator.web3.eth.Contract(
    //     contractJSON.abi,
    //     "0x70D4Fe3d2aDAF9829D7DEBEd7F4769a1721981a0",
    // );
    public static Contract = new ContractOperator.web3.eth.Contract(
        contractJSON.abi,
        "0x1A70055df11e5E447D1Bfd0b7889Eb315EA48AdA",
    );
    public static utils = web3Utils;

    // public static async airdropToken(token: string, to: string[], amounts: bigint[]) {
    //     const result = await ContractOperator.Contract.methods.bulksendToken(token, to, amounts).call();
    //     return result;
    // }

    public static async airdropToken() {
        const result = await ContractOperator.Contract.methods.bulksendToken(
            // enter arguments here


        ).call();
        return result;
    }

    // public static async addToWhitelist() {
    //     const result = await ContractOperator.Contract.methods
    //         .addToWhitelist(
    //             ["0x0dd874F41cE844FcdaeBA33714B6197136D89B7F", "0xC96B80cc21cF2F507ca53C9e12A2b730B93696b5"],
    //             ["69", "420"],
    //         )
    //         .call();
    //     return result;
    // }

    // public static async isInWhitelist(address: string) {
    //     const result = await ContractOperator.Contract.methods.isInWhitelist(address).call();
    //     return result;
    // }

    // public static async whoIsOwner() {
    //     const result = await ContractOperator.Contract.methods.owner().call();
    //     return result;
    // }

    // public static async claimAirdrop() {
    //     const result = await ContractOperator.Contract.methods.claimAirdrop().call();
    //     return result;
    // }
}
