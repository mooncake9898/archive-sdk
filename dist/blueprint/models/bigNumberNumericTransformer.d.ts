import BigNumber from 'bignumber.js';

export declare class BigNumberNumericTransformer {
  to(data: BigNumber): string;
  from(data: string): BigNumber;
}
