import React from "react";
import "./TickerListItem.scss"

export default function TickerListItem(props) {
  let pctClass = "red-percentage";
  let pctDisplay = `${props.pctChange}`;
  let displayNameDeconstructed = [...props.name];
  let displayName = '';
  let displayPrice;
  
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
  //if lastsale comes in as a string, will parse to float and round to 2 decimals also format with dollar sign
  if (typeof(props.lastSale) === 'number') {
    displayPrice = `$${props.lastSale.toFixed(2)}`
  } else {
    displayPrice = props.lastSale
  }

  return (
    <li className="ticker-list-item" onClick={() => props.onClick(props.symbol)}>
      <header className="ticker-head">
        <span><b>{displayName}</b></span><span>{displayPrice}</span>
      </header>
      <footer className="ticker-footer">
        <span>{props.symbol}</span><span className={pctClass}>{pctDisplay}</span>
      </footer>
    </li>
  );
};