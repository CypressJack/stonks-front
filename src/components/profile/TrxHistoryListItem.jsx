import React from 'react';
import "../TickerListItem.scss";
import classNames from 'classnames';
export default function TrxHistoryListItem(props) {
  let displayTotal = (props.amount * props.price).toFixed(2);
  let buySell = 'Bought';
  const priceClass = classNames(
    {"sell-trx": props.type === false, "buy-trx": props.type === true}
  );
  
  if(props.type === false) {
    buySell = 'Sold'
  }

  return (
    <li className="ticker-list-item" onClick={props.onClick}>
    <header className="ticker-head">
      <span>{props.name}</span><span>{`$${props.price}`}</span>
    </header>
    <footer className="ticker-footer">
      <span>{`${props.amount} ${buySell}`}</span><span className={priceClass}>{`${props.type === true ? '-' : '+'}$${displayTotal}`}</span>
    </footer>
  </li>
  );
}