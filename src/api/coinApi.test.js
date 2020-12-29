import coinApi from './coinApi';

describe('coinApi test', () => {
  let coinId;

  it('api status check', async () => {
    const result = await coinApi.checkStatus();
    expect(result).toBe(true);
  });

  it('api coin list length', async () => {
    const result = await coinApi.getCoinList({pageSize: 10});
    expect(result.length).toBe(10);
    coinId = result[0].id;
    expect(coinId).not.toBeUndefined();
  });

  it('api coin detail result check', async () => {
    const result = await coinApi.getCoinDetailInfo({coinId});
    expect(result).not.toBeUndefined();
  });
});