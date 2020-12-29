import React from 'react';
import Option from './Option';

function PageSizeOption() {
  const pageOptions = [
    {value: '10', label: '10개 보기'},
    {value: '30', label: '30개 보기'},
    {value: '50', label: '50개 보기', selected: true},
  ];
  return <Option options={pageOptions}/>;
}

export default PageSizeOption;
