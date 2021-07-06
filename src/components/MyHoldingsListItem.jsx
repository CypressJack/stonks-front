import React from "react";
import "./TickerListItem.scss"

export default function MyHoldingsListItem(props) {
  let pctClass = "red-percentage";
  let pctDisplay = `${props.pctChange}`;
  let displayNameDeconstructed = [...props.name];
  let displayName = '';
  let displayPrice;
  let totalPrice;
  let toParse;
  if (parseFloat(props.pctChange) >= 0.00) {
    pctClass = "green-percentage"
    pctDisplay = `+${props.pctChange}`
  }

  if (displayNameDeconstructed.length > 17) {
    displayNameDeconstructed.splice(18, displayNameDeconstructed.length - 17)
    displayName = displayNameDeconstructed.join('')
    displayName = `${displayName}...`
  } else {
    displayName = props.name
  }

  if (typeof(props.currentPrice) === 'number') {
    displayPrice = `$${parseFloat(props.currentPrice).toFixed(4)}`;
  } else {
    displayPrice = props.currentPrice.substr(1, props.currentPrice.length);
  }
  
  if (typeof(props.currentPrice) === 'number') {
    toParse = props.currentPrice;
  } else {
    toParse = displayPrice;
  }
  totalPrice = (parseFloat(props.amountOwned) * parseFloat(toParse)).toFixed(2);
  return (
    <li className="ticker-list-item" onClick={props.onClick}>
      <header className="ticker-head">
        <span>{displayName} <span className={pctClass}>{pctDisplay}</span></span><span>{displayPrice}</span>
      </header>
      <footer className="ticker-footer">
        <span>{`${props.amountOwned} owned`}</span><span>{`$${totalPrice}`}</span>
      </footer>
    </li>
  );
};