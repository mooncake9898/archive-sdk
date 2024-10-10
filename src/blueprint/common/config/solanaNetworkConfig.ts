import { EvmGasOracle } from '../../../blueprint/common/gas/evmGasOracle';
import { BlueprintContext } from '../../../blueprint/models';
import { CHAINID } from '../../../constants';
import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { NullOpBlockTimeOracle } from '../blocktime/nullOpBlockTimeOracle';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';

export abstract class SolanaNetworkConfig implements NetworkConfig {
  protected tokenMetadataOracle: TokenMetadataOracle;
  protected gasOracle: GasOracle;

  getInitStartBlock(): number {
    // https://solscan.io/block/1
    return 1; // first valid block with valid txs
  }

  getNetwork(): number {
    return Number(CHAINID.SOLANA);
  }

  getNetworkName(): string {
    return 'Solana';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getBlockTimeOracle(_context: BlueprintContext): BlockTimeOracle {
    return new NullOpBlockTimeOracle();
  }

  getGasOracle(context: BlueprintContext): GasOracle {
    if (!this.gasOracle) {
      // logic is the same as EVM (gasUsed * gasTokenPrice)
      this.gasOracle = new EvmGasOracle(context);
    }
    return this.gasOracle;
  }

  abstract getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;
  abstract getMainProviderUrl(): Promise<string>;
}
