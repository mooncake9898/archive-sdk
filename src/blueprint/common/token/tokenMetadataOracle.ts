import { TokenInfo } from '../../models/tokenInfo';
import { TokenMetadata } from '../../models/tokenMetadata';

export interface TokenMetadataOracle {
  getMetadata(tokenInfo: TokenInfo): Promise<TokenMetadata | null>;
}
