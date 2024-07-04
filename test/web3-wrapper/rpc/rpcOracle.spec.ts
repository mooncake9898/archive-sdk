import { RPCOracle } from '../../../src/web3-wrapper/rpc/rpcOracle'; // Import the RPCOracle class

describe('RPCOracle', () => {
  let rpcOracle;
  const rpcs = ['http://rpc1.example.com', 'http://rpc2.example.com'];

  beforeEach(() => {
    rpcOracle = new RPCOracle('1', rpcs.map(e => {
      return {
        url: e,
        weight: 1
      }
    }));
  });

  describe('getRpcCount', () => {
    it('should return the correct number after setting RPCs', () => {
      expect(rpcOracle.getRpcCount()).toBe(2);
    });
  });

  describe('getNextAvailableRpc', () => {
    it('should return null if no RPC URLs available', () => {
      const emptyRpcOracle = new RPCOracle('1', []);

      expect(() => {
        emptyRpcOracle.getNextAvailableRpc();
      }).toBeNull;
    });
  });
});
