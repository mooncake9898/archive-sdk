import { BlueprintContext, TokenInfo, TokenMetadata, TokenMetadataOracle } from '../../models';
import axios from 'axios';

export class SolanaTokenMetadataOracle implements TokenMetadataOracle {

  constructor(private context: BlueprintContext) {
  }

  async getMetadata(tokenInfo: TokenInfo): Promise<TokenMetadata | null> {
    const tokenAddress = tokenInfo.identifier;
    try {
      const response = await axios.get(
        `https://token-list-api.solana.cloud/v1/search?query=${tokenAddress}&start=0&limit=5&chainId=101`,
      );
      const token = response.data.content.find((i) => i.address === tokenAddress);
      if (!token) {
        return new TokenMetadata(tokenAddress, 'NOTFOUND', 'NOTFOUND', 9);
      }
      return new TokenMetadata(token.address, token.name, token.symbol, token.decimals);
    } catch (e) {
      this.context.getLogger().error('Could not fetch token metadata', e.message, e.stack);
      return new TokenMetadata(tokenInfo.identifier, tokenInfo.identifier, '', 9);
    }
  }
}
