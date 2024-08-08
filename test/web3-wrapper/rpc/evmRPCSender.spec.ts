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
        rpcs,
        CHAINID.ETHEREUM,
        'ethereum',
        async (_) => {
          return 5;
        },
        mockProxyUrl,
        testRequestId,
      );
      const result = await sender.executeCallOrSend();

      expect(result).not.toBeNull();
    });

    it('should throw an error when calling with an unknown chain id', async () => {
      try {
        const sender = new EvmRPCSender(
          rpcs,
          500,
          'unknown',
          async (_) => {
            return 5;
          },
          mockProxyUrl,
          testRequestId,
        );
      } catch (err) {
        expect(err.message).toBe('Chain with ID 500 not found.');
      }
    });
  });
});
