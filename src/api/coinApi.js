import Axios from 'axios';
import 'regenerator-runtime/runtime';

const axios = Axios.create({
  baseURL: `https://api.coingecko.com/api/v3`,
});

const coinApi = {
  checkStatus: async () => {
    const resp = await axios.get('/ping');
    return resp.status === 200;
  },

  getCoinList: async ({currency = 'KRW', pageSize, pageIndex = 1}) => {
    const resp = await axios.get('/coins/markets', {
      params: {
        vs_currency: currency,
        per_page: pageSize,
        page: pageIndex,
        price_change_percentage: '1h,24h,7d',
      },
    });
    return resp.data;
  },

  getCoinDetailInfo: async ({coinId}) => {
    const resp = await axios.get(`/coins/${coinId}`);
    return resp.data;
  },
};

export default coinApi;