import React from "react";
import "./TickerListItem.scss"

export default function TickerListItem(props) {
  let pctClass = "red-percentage";
  let displayNameDeconstructed = [...props.name];
  let displayName = '';
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
  }

  if (displayNameDeconstructed.length > 17) {
    displayNameDeconstructed.splice(18, displayNameDeconstructed.length - 17)
    displayName = displayNameDeconstructed.join('')
    displayName = `${displayName}...`
  } else {
    displayName = props.name
  }

  const displayPriceMoney = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(priceNum))

  const tutFunc = function(tutMode, event) {
    if (tutMode === true) {
      switch (event.target.classList[1]) {
        case "-ticker-item":
          props.setTooltip(["Ticker:", "The ticker shows basic information about a share, click on the individual pieces to find out more.", "ticker-item"])
          break;
        case "-ticker-name":
          props.setTooltip(["Company Name:", "This is a shortened version on the companies name.", "ticker-name"])
          break;
        case "-ticker-price":
          props.setTooltip(["Current Price:", "The current price of the share.", "ticker-price"])
          break;
        case "-ticker-symbol":
          props.setTooltip(["Company Symbol:", "A shortform version of the company name.", "ticker-symbol"])
          break;
        case "-ticker-percent":
          props.setTooltip(["Percent Change:", "Amount of change between the current price and the last close price or todays opening price as a percent.", "ticker-percent"])
          break;
        default:
          props.setTooltip(["Ticker List:", "A list containing tickers related to the currently selected filter.", "list"])
          break;
      }
    }
  }
  
  React.useEffect(() => {
    if (props.tutMode === false) {
      props.setTooltip([])
    }
  }, [props.tutMode]);

  return (
    <li className="ticker-list-item -ticker-item" onClick={(event) => { props.tutMode ? tutFunc(props.tutMode, event) : props.onClick(props.symbol, props.filter)}}>
      <header className="ticker-head -ticker-name">
        <span className={"display-name -ticker-name"} onClick={(event) => {props.tutMode ? tutFunc(props.tutMode, event) : props.onClick(props.symbol, props.filter)}}><b className={"bold -ticker-name"} onClick={(event) => { props.tutMode ? tutFunc(props.tutMode, event) : props.onClick(props.symbol, props.filter)}}>{displayName}</b></span><span className={"display-price -ticker-price"} onClick={(event) => { props.tutMode ? tutFunc(props.tutMode, event) : props.onClick(props.symbol, props.filter)}}>{displayPriceMoney}</span>
      </header>
      <footer className="ticker-footer">
        <span className={"ticker-symbol -ticker-symbol"} onClick={(event) => { props.tutMode ? tutFunc(props.tutMode, event) : props.onClick(props.symbol, props.filter)}}>{props.symbol}</span><span className={`${pctClass} -ticker-percent`} onClick={(event) => { props.tutMode ? tutFunc(props.tutMode, event) : props.onClick(props.symbol, props.filter)}}>{`${percentNum}%`}</span>
      </footer>
    </li>
  );
};