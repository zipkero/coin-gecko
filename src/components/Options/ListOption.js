import React from 'react';
import Option from './Option';

function ListOption() {
  const listOptions = [
    {
      value: 'all',
      label: '전체 보기',
    },
    {
      value: 'bookmark',
      label: '북마크 보기',
    },
  ];
  return <Option options={listOptions}/>;
}

export default ListOption;
