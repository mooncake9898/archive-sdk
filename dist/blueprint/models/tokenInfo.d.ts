import { TokenTag } from './constants';
import BigNumber from 'bignumber.js';
export declare class TokenInfo {
    identifier: string;
    priceUsd: number;
    amount: BigNumber;
    source: string;
    tag: TokenTag;
    isVirtualToken: boolean;
    constructor(identifier: string, // token address | pool id (masterchef type)
    priceUsd: number, amount: BigNumber, // amount divided by token decimals
    source: string, // price source
    tag?: TokenTag, // tag for special tokens
    isVirtualToken?: boolean);
}
