"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveLogger = exports.REQUEST_ID = exports.LogLevel = void 0;
const dotenv_1 = require("dotenv");
const logging_1 = require("../logging");
(0, dotenv_1.config)();
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["ERROR"] = "error";
    LogLevel["INFO"] = "info";
    LogLevel["TRACE"] = "trace";
    LogLevel["WARNING"] = "warning";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
exports.REQUEST_ID = 'requestId';
class ArchiveLogger extends logging_1.LoggerManager {
    // to override the kafka configs, override the getKafkaConfig method
    static getDefaultBlueprintIdentifier() {
        return 'web3-wrapper-default'; // default has no blueprint ID
    }
}
exports.ArchiveLogger = ArchiveLogger;
//# sourceMappingURL=logger.js.map