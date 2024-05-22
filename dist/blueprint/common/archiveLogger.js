"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveLogger = void 0;
// import { config } from 'dotenv';
const logging_1 = require("../../logging");
class ArchiveLogger extends logging_1.LoggerManager {
    // to override the kafka configs, override the getKafkaConfig method
    static getDefaultBlueprintIdentifier() {
        return ''; // default has no blueprint ID
    }
}
exports.ArchiveLogger = ArchiveLogger;
//# sourceMappingURL=archiveLogger.js.map