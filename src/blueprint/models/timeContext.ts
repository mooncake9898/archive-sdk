export class TimeContext {
  constructor(
    public blockNumber: number,
    public timestamp: number,
  ) {
    this.blockNumber = Number(blockNumber);
    this.timestamp = Number(timestamp);
  }
}
