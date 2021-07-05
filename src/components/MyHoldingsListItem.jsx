import React from "react";
import "./TickerListItem.scss"

export default function MyHoldingsListItem(props) {
  let pctClass = "red-percentage";
  let pctDisplay = `${props.pctChange}`;
  let displayNameDeconstructed = [...props.name];
  let displayName = '';

  if (parseFloat(props.pctChange) >= 0.00) {
    pctClass = "green-percentage"
    pctDisplay = `+${props.pctChange}`
  }

  if (displayNameDeconstructed.length > 17) {
    displayNameDeconstructed.splice(18, displayNameDeconstructed.length - 17)
    displayName = displayNameDeconstructed.join('')
    displayName = `${displayName}...`
  }

  return (
    <li className="ticker-list-item" onClick={props.onClick}>
      <header className="ticker-head">
        <span>{displayName}</span><span className={pctClass}>{pctDisplay}</span><span>{`$${props.currentPrice}`}</span>
      </header>
      <footer className="ticker-footer">
        <span>{`${props.amountOwned} owned`}</span><span>{`$${props.amountOwned * props.currentPrice}`}</span>
      </footer>
    </li>
  );
};