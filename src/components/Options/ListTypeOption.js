import React from 'react';
import Option from './Option';
import {listOptions} from '../../common/constant';
import {useDispatch, useSelector} from 'react-redux';
import {coinActionCreator} from '../../module/coin';

function ListTypeOption() {
  const listType = useSelector(state => state.coin.listOption.listType);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(coinActionCreator.changeListOption(e.target.value));
  };
  return <Option value={listType} options={listOptions} onChange={onChange}/>;
}

export default ListTypeOption;
