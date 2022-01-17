import PassSignatures from '../service/contract/OUTPUT.json';

export const isInJSON = (address: string) => {
    const filtered = PassSignatures.filter((voucher) => voucher.reciever.toLowerCase() == address.toLowerCase());
    if (filtered.length > 0) return true;
    return false;
};
