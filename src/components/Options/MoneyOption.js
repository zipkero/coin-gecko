import React from 'react';
import Option from './Option';
import {moneyOptions} from '../../common/constant';
import {useDispatch, useSelector} from 'react-redux';
import {coinActionCreator} from '../../module/coin';

function MoneyOption() {
  const currency = useSelector(state => state.coin.listOption.currency);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(coinActionCreator.changeMoneyOption(e.target.value));
  };

  return <Option value={currency} options={moneyOptions} onChange={onChange}/>;
}

export default MoneyOption;
