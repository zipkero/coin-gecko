import createReducer from '../util/createReducer';

export const coinActionType = {
  loadCoinMarkets: 'coin/loadCoinMarkets',
  loadCoinMarketsSuccess: 'coin/loadCoinMarketsSuccess',
  loadCoinMarketsFailure: 'coin/loadCoinMarketsFailure',

  loadCoinMarketsMore: 'coin/loadCoinMarketsMore',
  loadCoinMarketsMoreSuccess: 'coin/loadCoinMarketsMoreSuccess',
  loadCoinMarketsMoreFailure: 'coin/loadCoinMarketsMoreFailure',

  loadCoinDetail: 'coin/loadCoinDetail',
  loadCoinDetailSuccess: 'coin/loadCoinDetailSuccess',
  loadCoinDetailFailure: 'coin/loadCoinDetailFailure',

  changeListOption: 'coin/changeListOption',
  changeMoneyOption: 'coin/changeMoneyOption',
  changePageSizeOption: 'coin/changePageSizeOption',
};

export const coinActionCreator = {
  loadCoinMarkets: () => ({type: coinActionType.loadCoinMarkets}),
  loadCoinMarketsMore: () => ({type: coinActionType.loadCoinMarketsMore}),
  loadCoinDetail: () => ({type: coinActionType.loadCoinDetail}),

  changeListOption: (value) => ({type: coinActionType.changeListOption, payload: value}),
  changeMoneyOption: (value) => ({type: coinActionType.changeMoneyOption, payload: value}),
  changePageSizeOption: (value) => ({type: coinActionType.changePageSizeOption, payload: value}),
};

const initialState = {
  loadCoinMarketsRequest: false,
  loadCoinMarketsDone: false,
  loadCoinMarketsError: null,

  loadCoinMarketsMoreRequest: false,
  loadCoinMarketsMoreDone: false,
  loadCoinMarketsMoreError: null,

  loadCoinDetailRequest: false,
  loadCoinDetailDone: false,
  loadCoinDetailError: null,

  coins: [],
  bookmarks: [],
  listOption: {
    listType: 'all',
    currency: 'KRW',
    pageIndex: 1,
    pageSize: 50,
  },
  detailOption: {
    moneyOption: 'KRW',
  },
};

const coinReducer = createReducer(initialState, {
  [coinActionType.loadCoinMarkets]: (state, action) => {
    return {
      ...state,
      loadCoinMarketsRequest: true,
      loadCoinMarketsDone: false,
      loadCoinMarketsError: null,
    };
  },
  [coinActionType.loadCoinMarketsSuccess]: (state, action) => {
    return {
      ...state,
      loadCoinMarketsRequest: false,
      loadCoinMarketsDone: true,
      coins: action.payload,
    };
  },
  [coinActionType.loadCoinMarketsFailure]: (state, action) => {
    return {
      ...state,
      loadCoinMarketsRequest: false,
      loadCoinMarketsDone: false,
      loadCoinMarketsError: action.error,
    };
  },

  [coinActionType.loadCoinMarketsMore]: (state, action) => {
    return {
      ...state,
      loadCoinMarketsMoreRequest: true,
      loadCoinMarketsMoreDone: false,
      loadCoinMarketsMoreError: null,
      listOption: {
        ...state.listOption,
        pageIndex: state.listOption.pageIndex + 1,
      },
    };
  },
  [coinActionType.loadCoinMarketsMoreSuccess]: (state, action) => {
    return {
      ...state,
      loadCoinMarketsMoreRequest: false,
      loadCoinMarketsMoreDone: true,
      coins: state.coins.concat(action.payload),

    };
  },
  [coinActionType.loadCoinMarketsMoreFailure]: (state, action) => {
    return {
      ...state,
      loadCoinMarketsMoreRequest: false,
      loadCoinMarketsMoreDone: false,
      loadCoinMarketsMoreError: action.error,
    };
  },

  [coinActionType.loadCoinDetail]: (state, action) => {
    return {
      ...state,
      loadCoinDetailRequest: true,
      loadCoinDetailDone: false,
      loadCoinDetailError: null,
    };
  },
  [coinActionType.loadCoinDetailSuccess]: (state, action) => {
    return {
      ...state,
      loadCoinDetailRequest: false,
      loadCoinDetailDone: true,
    };
  },
  [coinActionType.loadCoinDetailFailure]: (state, action) => {
    return {
      ...state,
      loadCoinDetailRequest: false,
      loadCoinDetailDone: false,
      loadCoinDetailError: action.error,
    };
  },

  [coinActionType.changeListOption]: (state, action) => {
    return {
      ...state,
      listOption: {
        ...state.listOption,
        listType: action.payload,
      },
    };
  },
  [coinActionType.changeMoneyOption]: (state, action) => {
    return {
      ...state,
      listOption: {
        ...state.listOption,
        currency: action.payload,
      },
    };
  },
  [coinActionType.changePageSizeOption]: (state, action) => {
    return {
      ...state,
      listOption: {
        ...state.listOption,
        pageSize: action.payload,
      },
    };
  },
});

export default coinReducer;