"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveLogger = exports.LogLevel = void 0;
const logging_1 = require("../logging");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["ERROR"] = "error";
    LogLevel["INFO"] = "info";
    LogLevel["TRACE"] = "trace";
    LogLevel["WARNING"] = "warning";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class ArchiveLogger extends logging_1.LoggerManager {
    static getDefaultBlueprintIdentifier() {
        return 'archive-axios-default';
    }
}
exports.ArchiveLogger = ArchiveLogger;
//# sourceMappingURL=logger.js.map