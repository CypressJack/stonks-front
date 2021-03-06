import React from 'react';
import TrxHistoryListItem from './TrxHistoryListItem';
import './TrxHistoryList.scss';
export default function TrxHistoryList(props) {
  let count = 0;

  const countFunc = function() {
    count ++;
    return count
  }

  const composeHistoryList = props.stocks.map(stock => {
    return (
      <TrxHistoryListItem
      key={countFunc()}
      name={stock.symbol}
      price={stock.cost}
      amount={stock.shares}
      type={stock.type}
      />
    );
  })

  return (
    <ul className={"history-list"}>
      {composeHistoryList}
    </ul>
  );
}