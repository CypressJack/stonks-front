import React from "react";
import "./TickerListItem.scss"

export default function TickerListItem(props) {
  console.log(props);
  let pctClass = "red-percentage";
  let pctDisplay = `${props.pctChange}`;
  let displayNameDeconstructed = [...props.name];
  let displayName = '';
  let displayPrice;

  let percentNum;
  let priceNum;

  if (typeof props.lastSale === 'string') {
    priceNum = parseFloat(props.lastSale.slice(1));
  } else {
    priceNum = props.lastSale;
  };

  if (typeof props.pctChange === 'string') {
    percentNum = parseFloat(props.pctChange);
  } else {
    percentNum = props.pctChange.toFixed(3);
  };
  
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

  const displayPriceMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(priceNum))

  console.log(displayName, "percent change", typeof percentNum)

  return (
    <li className="ticker-list-item" onClick={() => props.onClick(props.symbol)}>
      <header className="ticker-head">
        <span>{displayName}</span><span>{displayPriceMoney}</span>
      </header>
      <footer className="ticker-footer">
        <span>{props.symbol}</span><span className={pctClass}>{`${percentNum}%`}</span>
      </footer>
    </li>
  );
};