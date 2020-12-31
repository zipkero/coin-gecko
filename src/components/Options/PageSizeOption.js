import React from 'react';
import Option from './Option';
import {pageSizeOptions} from '../../common/constant';
import {useDispatch, useSelector} from 'react-redux';
import {coinActionCreator} from '../../module/coin';

function PageSizeOption() {
  const pageSize = useSelector(state => state.coin.listOption.pageSize);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(coinActionCreator.changePageSizeOption(e.target.value));
  };

  return <Option value={pageSize} options={pageSizeOptions} onChange={onChange}/>;
}

export default PageSizeOption;
