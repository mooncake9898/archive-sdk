"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queues = void 0;
exports.multiply = multiply;
function multiply(a, b) {
    return a * b;
}
var Queues;
(function (Queues) {
    Queues["LOGS"] = "logs";
    Queues["EXTERNAL_API_CALLS"] = "external_api_calls";
    Queues["RESPONSE_TIMES"] = "response_times";
    Queues["SAMPLES"] = "samples";
    Queues["BILLING"] = "billing";
    Queues["RPC_FAILURE"] = "rpc_failure";
})(Queues || (exports.Queues = Queues = {}));
//# sourceMappingURL=types.js.map