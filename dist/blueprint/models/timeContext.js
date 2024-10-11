"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeContext = void 0;
class TimeContext {
    constructor(blockNumber, timestamp) {
        this.blockNumber = blockNumber;
        this.timestamp = timestamp;
        this.blockNumber = Number(blockNumber);
        this.timestamp = Number(timestamp);
    }
}
exports.TimeContext = TimeContext;
//# sourceMappingURL=timeContext.js.map