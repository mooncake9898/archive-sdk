import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { NullOpBlockTimeOracle } from '../blocktime/nullOpBlockTimeOracle';
import { GasOracle } from '../gas/gasOracle';
import { NullOpGasOracle } from '../gas/nullOpGasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';
import { CHAINID } from '../../../constants';

import { BlueprintContext } from '../../models';
import { SolanaTokenMetadataOracle } from '../token/solanaTokenMetadataOracle';

export class SolanaNetworkConfig implements NetworkConfig {
  protected gasOracle: GasOracle;
  protected tokenMetadataOracle: TokenMetadataOracle;
  private blockTimeOracle: BlockTimeOracle;

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

  getGasOracle(context: BlueprintContext): GasOracle {
    // TODO implement this for Solana
    return new NullOpGasOracle();
  }

  getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle {
    if (!this.tokenMetadataOracle) {
      this.tokenMetadataOracle = new SolanaTokenMetadataOracle(context);
    }
    return this.tokenMetadataOracle;
  }

  getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle {
    return new NullOpBlockTimeOracle();
  }
}
