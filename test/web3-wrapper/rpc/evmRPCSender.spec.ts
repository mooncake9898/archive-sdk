import { CHAINID } from '../../../src/constants';
import { EvmRPCSender } from '../../../src/web3-wrapper';

describe('EvmRPCSender', () => {
  const testRequestId = '03a0bfdc-9bcf-4436-a200-c85e11b3926c';
  const mockProxyUrl = 'https://mock.proxy.url';
  const rpcs = [
    {
      url: 'http://rpc1.example.com',
      weight: 1,
    },
    {
      url: 'http://rpc2.example.com',
      weight: 1,
    },
  ];

  describe('calling executeCallOrSend', () => {
    it('should return a valid result', async () => {
      const sender = new EvmRPCSender(
        CHAINID.ETHEREUM,
        'ethereum',
        mockProxyUrl,
        testRequestId,
      );
      const result = await sender.executeCallOrSend(
        rpcs,
        async (_) => {
          return 5;
        },
      );

      expect(result).not.toBeNull();
    });
  });
});
