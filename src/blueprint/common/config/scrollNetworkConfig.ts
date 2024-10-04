import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from '../../../constants';


export class ScrollNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number {
        return 1;
    }

    getNetwork(): number {
        return Number(CHAINID.SCROLL);
    }

    getNetworkName(): string {
        return 'Scroll';
    }

    isContractNameLookupEnabled(): boolean {
        return false;
    }
}
