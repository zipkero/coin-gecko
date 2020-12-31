import React from 'react';
import Star from '../Icons/Star';
import Title from '../Cells/Title';
import Price from '../Cells/Price';
import {moneyPrefix} from '../../common/constant';
import Percentage from '../Cells/Percentage';

function CoinRow({coin, currency}) {
  return (
      <tr>
        <td>
          <Star checked={false} size="1x"/>
        </td>
        <td>
          <img width="18" src={coin.image}/>
        </td>
        <Title title={coin.name} to={`/${coin.id}`}/>
        <td>{coin.symbol}</td>
        <Price prefix={moneyPrefix[currency]} price={coin.current_price}/>
        <Percentage figure={coin.price_change_percentage_1h_in_currency}/>
        <Percentage figure={coin.price_change_percentage_24h_in_currency}/>
        <Percentage figure={coin.price_change_percentage_7d_in_currency}/>
        <Price prefix={moneyPrefix[currency]} price={coin.total_volume}/>
      </tr>
  );
}

export default CoinRow;
