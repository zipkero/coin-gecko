import coinReducer from './coin';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import {composeWithDevTools} from 'redux-devtools-extension';

const saga = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(
    saga,
));

const rootReducer = combineReducers({
  coin: coinReducer,
});

const store = createStore(rootReducer, enhancer);

saga.run(rootSaga);

export default store;