import React from 'react';
import "../TickerListItem.scss";

export default function TrxHistoryListItem(props) {
  let displayTotal = (props.amount * props.price).toFixed(2);
  return (
    <li className="ticker-list-item" onClick={props.onClick}>
    <header className="ticker-head">
      <span>{props.name}</span><span>{`$${props.price}`}</span>
    </header>
    <footer className="ticker-footer">
      <span>{`${props.amount} owned`}</span><span>{`$${displayTotal}`}</span>
    </footer>
  </li>
  );
}