import { LoggerManager } from '../../logging/LoggerManager';
import BigNumber from 'bignumber.js';

// bigNumberNumericTransformer
export class BigNumberNumericTransformer {
  to(data: BigNumber): string {
    try {
      if (!data) {
        return null;
      }
      return data.toFixed(data.decimalPlaces());
    } catch (e) {
      LoggerManager.getLogger().warn(`Cannot convert ${data} to string, returning 0`);
      return BigNumber(0).toString();
    }
  }
  from(data: string): BigNumber {
    if (!data) {
      return null;
    }
    return BigNumber(data);
  }
}
