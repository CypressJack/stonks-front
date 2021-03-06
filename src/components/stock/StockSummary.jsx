import React from "react";
import "./StockSummary.scss";

export default function StockSummary(props) {

  const marketCap = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format( [props.marketCap] )

  let formattedCap = marketCap
  //$000,000,000.00

  if (marketCap.length === 19) {
    formattedCap = `${marketCap.slice(0, 3)}B`
  }

  if (marketCap.length === 18) {
    formattedCap = `${marketCap.slice(0, 3)}B`
  };

  if (marketCap.length === 17) {
    formattedCap = `${marketCap.slice(0, 2)}B`
  };

  if (marketCap.length === 15) {
    formattedCap = `${marketCap.slice(0, 4)}M`
  };

  if (marketCap.length === 14) {
    formattedCap = `${marketCap.slice(0, 3)}M`
  };

  if (marketCap.length === 13) {
    formattedCap = `${marketCap.slice(0, 2)}M`
  }

  const undef = (value) => {
    if (!value || value === 'None'){
      return 'N/A'
    }
    return `$${value}`;
  }
  
  return (
    <article className={"stock-summary"} onClick={props.onClick}>
      <header className={"stock-title"}>Summary</header>
      <div className={"stock-row"}>
        <div className={"stock-column"}>
          <div className={"stock-item"}>
            <b className='stock-item-name -mrkt-cap' >Market Cap: </b>
            <div className='stock-item-value'>{formattedCap}</div>
          </div>
          <div className={"stock-item"}>
            <b className='stock-item-name -open' >Open: </b>
            <div className='stock-item-value'>{`$${props.open}`}</div>
          </div>
          <div className={"stock-item"}>
            <b className='stock-item-name -bid' >Bid: </b>
            <div className='stock-item-value'>{props.bid}</div>
          </div>
          <div className={"stock-item"}>
            <b className='stock-item-name -ask' >Ask: </b>
            <div className='stock-item-value'>{`$${props.ask.toFixed(2)}`}</div>
          </div>
        </div>
        <div className={"stock-column"}>
          <div className={"stock-item"}>
            <b className='stock-item-name -eps'>EPS: </b>
            <div className='stock-item-value'>{undef(props.eps)}</div>
          </div>
          <div className={"stock-item"}>
            <b className='stock-item-name -pe-ratio'>PE ratio: </b>
            <div className='stock-item-value'>{undef(props.peRatio)}</div>
            </div>
          <div className={"stock-item-52wk"}>
            <b className='stock-item-name -wk-rng'>52 Week Range: </b>
            <div className='stock-item-value'>{props.range}</div>
          </div>
          <div className={"stock-item"}>
            <b className='stock-item-name -amnt-owned'>Owned: </b>
            <div className='stock-item-value'>{props.amountOwned}</div>
          </div>
        </div>
      </div>
    </article>
  );
}