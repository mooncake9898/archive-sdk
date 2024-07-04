import { CHAINID } from '../../src/constants';
import { executeCallOrSend } from '../../src/web3-wrapper';

describe('utils functions', () => {
  const testRequestId = '03a0bfdc-9bcf-4436-a200-c85e11b3926c';
  const rpcs = [{
    url: 'http://rpc1.example.com',
    weight: 1
  },
  {
    url: 'http://rpc2.example.com',
    weight: 1
  }
  ];

  describe('calling executeCallOrSend', () => {
    it('should return a valid result', async () => {
      const result = await executeCallOrSend(
        rpcs,
        CHAINID.ETHEREUM,
        async (provider) => {
          return 5;
        },
        testRequestId,
      );

      expect(result).not.toBeNull();
    });

    it('should throw an error when calling with an unknown chain id', async () => {
      const result = await executeCallOrSend(
        rpcs,
        500,
        async (provider) => {
          return 5;
        },
        testRequestId,
      ).catch((err) => err);

      expect(result.message).toBe('Chain with ID 500 not found.');
    });
  });
});
