import { BlueprintContext } from '../models/blueprintContext';
import { AxiosError } from 'axios';

// export async function axiosGet(context: BlueprintContext, url: string) {
//   const axios = await context.getAxios();
//   return await axios.get(url);
// }
// export async function axiosPost(context: BlueprintContext, url: string, data: any) {
//   const axios = await context.getAxios();
//   return axios.post(url, data);
// }

export function generateAxiosErrorMessage(functionName: string, url: string, e: AxiosError, params = {}) {
  return `Axios Error when calling ${functionName}. url: ${url}, params: ${JSON.stringify(params)}, code: ${
    e.code
  }, status: ${e.response?.status}, statusText: ${e.response?.statusText}, errorName: ${e.name}, message: ${
    e.message
  }, stackTrace: ${e.stack}`;
}

export function getRequestHeaders(): Record<string, string> {
  if (process.env.API_KEY) {
    return {
      'api-key': process.env.API_KEY,
    };
  } else {
    console.error('API_KEY for API request is not set in environment variable');
    return {};
  }
}

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
