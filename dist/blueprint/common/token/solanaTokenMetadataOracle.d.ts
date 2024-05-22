import { BlueprintContext, TokenInfo, TokenMetadata, TokenMetadataOracle } from '../../models';
export declare class SolanaTokenMetadataOracle implements TokenMetadataOracle {
    private context;
    constructor(context: BlueprintContext);
    getMetadata(tokenInfo: TokenInfo): Promise<TokenMetadata | null>;
}
