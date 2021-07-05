import React from 'react';
import TrxHistoryListItem from './TrxHistoryListItem';

export default function TrxHistoryList(props) {

  const composeHistoryList = props.stocks.map(stock => {
    return (
      <TrxHistoryListItem
      key={stock.id}
      name={stock.name}
      price={stock.price}
      amount={stock.amount}
      />
    );
  })

  return (
    <ul>
      {composeHistoryList}
    </ul>
  );
}