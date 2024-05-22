import { TokenInfo } from '../../models/tokenInfo';
import { TokenMetadata } from '../../models/tokenMetadata';
import { ETHER_GAS_TOKEN_DECIMALS, ETHER_GAS_TOKEN_IDENTIFIER, ETHER_GAS_TOKEN_SYMBOL } from '../../models/constants';
import { BlueprintContext } from '../../models/blueprintContext';
// import { EvmContractReader } from '../evmContractReader';
import { TokenMetadataOracle } from './tokenMetadataOracle';

export class EvmTokenMetadataOracle implements TokenMetadataOracle {
  // private contractReader: EvmContractReader;

  constructor(private context: BlueprintContext) {}

  // TODO use multicall instead of calling 3 different times to get the information
  async getMetadata(tokenInfo: TokenInfo): Promise<TokenMetadata | null> {
    // this.contractReader = this.context.getContractReader();

    try {
      const [tokenName, tokenSymbol, decimals] = await Promise.all([
        this.getTokenName(tokenInfo.identifier),
        // this.contractReader.getTokenSym(tokenInfo.identifier),
        "TEST TOKEN",
        this.getDecimalPlaces(tokenInfo.identifier),
      ]);
      return new TokenMetadata(tokenInfo.identifier, tokenName, tokenSymbol, decimals);
    } catch (e) {
      this.context.getLogger().error('Could not fetch token metadata', e.message, e.stack);
      return new TokenMetadata(tokenInfo.identifier, tokenInfo.identifier, '()', 18);
    }
  }

  private async getTokenName(identifier: string): Promise<string> {
    if (identifier == ETHER_GAS_TOKEN_IDENTIFIER) {
      return Promise.resolve(ETHER_GAS_TOKEN_SYMBOL);
    }
    // return await this.contractReader.getTokenNameElseReturnTokenAddress(identifier);
    return "Test Token"
  }

  private async getDecimalPlaces(identifier: string): Promise<number> {
    if (identifier == ETHER_GAS_TOKEN_IDENTIFIER) {
      return Promise.resolve(ETHER_GAS_TOKEN_DECIMALS);
    }
    // return await this.contractReader.getDecimalPlaces(identifier);
    return 18;
  }
}
