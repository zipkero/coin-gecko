import React from 'react';
import Option from './Option';

function MoneyOption() {
  const moneyOptions = [
    {
      value: 'KRW',
      label: 'KRW',
    },
    {
      value: 'USD',
      label: 'USD',
    },
  ];
  return <Option options={moneyOptions}/>;
}

export default MoneyOption;
