import { TokenInfo } from '../../models/tokenInfo';
import { TokenMetadata } from '../../models/tokenMetadata';
import { BlueprintContext } from '../../models/blueprintContext';
import { TokenMetadataOracle } from './tokenMetadataOracle';
export declare class EvmTokenMetadataOracle implements TokenMetadataOracle {
    private context;
    constructor(context: BlueprintContext);
    getMetadata(tokenInfo: TokenInfo): Promise<TokenMetadata | null>;
    private getTokenName;
    private getDecimalPlaces;
}
