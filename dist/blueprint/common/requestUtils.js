"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestHeaders = exports.generateAxiosErrorMessage = void 0;
// export async function axiosGet(context: BlueprintContext, url: string) {
//   const axios = await context.getAxios();
//   return await axios.get(url);
// }
// export async function axiosPost(context: BlueprintContext, url: string, data: any) {
//   const axios = await context.getAxios();
//   return axios.post(url, data);
// }
function generateAxiosErrorMessage(functionName, url, e, params = {}) {
    var _a, _b;
    return `Axios Error when calling ${functionName}. url: ${url}, params: ${JSON.stringify(params)}, code: ${e.code}, status: ${(_a = e.response) === null || _a === void 0 ? void 0 : _a.status}, statusText: ${(_b = e.response) === null || _b === void 0 ? void 0 : _b.statusText}, errorName: ${e.name}, message: ${e.message}, stackTrace: ${e.stack}`;
}
exports.generateAxiosErrorMessage = generateAxiosErrorMessage;
function getRequestHeaders() {
    if (process.env.API_KEY) {
        return {
            'api-key': process.env.API_KEY,
        };
    }
    else {
        console.error('API_KEY for API request is not set in environment variable');
        return {};
    }
}
exports.getRequestHeaders = getRequestHeaders;
// export async function queryLastSyncedBlock(context: BlueprintContext, subgraphUrl: string): Promise<number> {
//   try {
//     const payload = `{ _meta { block { number } } }`;
//     const response = (await axiosPost(context, subgraphUrl, { query: payload })).data;
//     return parseInt(response.data._meta.block.number);
//   } catch (e) {
//     context.getLogger().error(`queryLastSyncedBlock failed for subgraph ${subgraphUrl}. Error: ${e}`);
//     return null;
//   }
// }
//# sourceMappingURL=requestUtils.js.map