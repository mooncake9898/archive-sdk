import { BlueprintContext } from '../../../blueprint/models';
import { RpcInfo } from '../../../web3-wrapper';
import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';
export declare abstract class BaseEvmNetworkConfig implements NetworkConfig {
    protected gasOracle: GasOracle;
    protected tokenMetadataOracle: TokenMetadataOracle;
    abstract getInitStartBlock(): number;
    abstract getMainProviderUrl(): Promise<string>;
    abstract getNetwork(): number;
    abstract getNetworkName(): string;
    abstract isContractNameLookupEnabled(): boolean;
    abstract getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;
    abstract getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle;
    getGasOracle(context: BlueprintContext): GasOracle;
    selectRpcUrl(rpcInfos: RpcInfo[]): string;
}
