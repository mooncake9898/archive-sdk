"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queues = exports.multiply = void 0;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
var Queues;
(function (Queues) {
    Queues["LOGS"] = "logs";
    Queues["EXTERNAL_API_CALLS"] = "external_api_calls";
    Queues["RESPONSE_TIMES"] = "response_times";
    Queues["SAMPLES"] = "samples";
    Queues["BILLING"] = "billing";
})(Queues || (exports.Queues = Queues = {}));
//# sourceMappingURL=types.js.map