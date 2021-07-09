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

  let percentNum;
  let priceNum;

  if (typeof props.currentPrice === 'string') {
    priceNum = parseFloat(props.currentPrice.slice(1));
  } else {
    priceNum = props.currentPrice;
  };

  if (typeof props.pctChange === 'string') {
    percentNum = parseFloat(props.pctChange);
  } else {
    priceNum = props.currentPrice;
  };

  
  if (parseFloat(props.pctChange) >= 0.00) {
    pctClass = "green-percentage"
    pctDisplay = `+${props.pctChange}`
  }
  if (typeof props.pctChange === 'number' && props.pctChange > 0 ) {
    pctDisplay = `+${props.pctChange.toFixed(3)}%`
  }
  
  if (typeof props.pctChange === 'number' && props.pctChange < 0 ) {
    pctDisplay = `${props.pctChange.toFixed(3)}%`
  }
  
  if (displayNameDeconstructed.length > 17) {
    displayNameDeconstructed.splice(18, displayNameDeconstructed.length - 17)
    displayName = displayNameDeconstructed.join('')
    displayName = `${displayName}...`
  } else {
    displayName = props.name
  }
  
  const displayPriceMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(priceNum))
  displayPrice = displayPriceMoney;

  totalPrice = (parseFloat(props.amountOwned) * parseFloat(priceNum)).toFixed(2);
  const totalPriceMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(totalPrice))

  return (
    <li className="ticker-list-item" onClick={props.onClick}>
      <header className="ticker-head">
        <span><b>{displayName}</b><span className={pctClass}>{pctDisplay}</span></span><span>{displayPrice}</span>
      </header>
      <footer className="ticker-footer">
        <span>{`${props.amountOwned} owned`}</span><span>{totalPriceMoney}</span>
      </footer>
    </li>
  );
};