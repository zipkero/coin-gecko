import {coinActionType} from '../module/coin';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import coinApi from '../api/coinApi';

function* loadCoinMarkets() {
  try {
    const isOk = yield call(coinApi.checkStatus);
    if (!isOk) {
      throw Error('server is not working');
    }
    const state = yield select();
    const param = state.coin.listOption;
    const coins = yield call(coinApi.getCoinList, param);
    yield put({type: coinActionType.loadCoinMarketsSuccess, payload: coins});

  } catch (e) {
    yield put({type: coinActionType.loadCoinMarketsFailure, error: e.message});
  }
}

function* loadCoinMarketsMore(action) {
  try {
    const isOk = yield call(coinApi.checkStatus);
    if (!isOk) {
      throw Error('server is not working');
    }
    const state = yield select();
    const param = state.coin.listOption;
    const coins = yield call(coinApi.getCoinList, param);
    yield put({type: coinActionType.loadCoinMarketsMoreSuccess, payload: coins});
  } catch (e) {
    yield put({type: coinActionType.loadCoinMarketsMoreFailure, error: e.message});
  }
}

function* loadCoinDetail() {
  try {
    const isOk = yield call(coinApi.checkStatus);
    if (!isOk) {
      throw Error('server is not working');
    }
  } catch (e) {
    yield put({type: coinActionType.loadCoinDetailFailure, error: e.message});
  }
}

export function* coinSaga() {
  yield takeLatest(coinActionType.loadCoinMarkets, loadCoinMarkets);
  yield takeLatest(coinActionType.loadCoinMarketsMore, loadCoinMarketsMore);
  yield takeLatest(coinActionType.loadCoinDetail, loadCoinDetail);
}