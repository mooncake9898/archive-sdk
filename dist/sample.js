"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCall = void 0;
const ethers_1 = require("ethers");
function testCall() {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new ethers_1.ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com');
        try {
            const blockNumber = yield provider.getTransactionReceipt('0x4c9f66bb333e730ef63f767b78ab8121168fe23e0abcd4e07bd221dd7f7ae0ac');
            console.log('Current block number: ', blockNumber);
            return blockNumber;
        }
        catch (err) {
            console.error('Error occured ');
        }
    });
}
exports.testCall = testCall;
testCall();
//# sourceMappingURL=sample.js.map