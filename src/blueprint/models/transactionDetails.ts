/**
 * Represents a TransactionDetails from the blueprint
 */
export class TransactionDetails {
  constructor(
    public userAddress: string,
    public txHash: string,
    public blockNumber: number = 0,
    public timestamp: number = 0,
  ) {}

  static asUniqueList(a: TransactionDetails[]): TransactionDetails[] {
    const seen = [];
    return a.filter((item) => {
      const txHash = item.txHash;
      if (seen.includes(txHash)) {
        return false;
      }
      seen.push(txHash);
      return true;
    });
  }
}

export class TransactionDetailsWithHeadBlock {
  constructor(
    public headBlock: number,
    public transactionDetails: TransactionDetails[],
  ) {}
}

export class TransactionData {
  constructor(
    public transactionDetails: TransactionDetails,
    public transactionIndex: number,
    public isLast: boolean,
  ) {}
}
