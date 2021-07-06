import React from "react";
import "./StockSummary.scss";

export default function StockSummary(props) {

  const formattedCap = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format( [props.marketCap] )

  return (
    <article className={"stock-summary"}>
      <header className={"stock-title"}>Summary</header>
      <div className={"stock-row"}>
        <div className={"stock-column"}>
          <span className={"stock-item"}><b>Market Cap: </b>{formattedCap}</span>
          <span className={"stock-item"}><b>Open: </b>{`$${props.open}`}</span>
          <span className={"stock-item"}><b>Bid: </b>{props.bid}</span>
          <span className={"stock-item"}><b>Ask: </b>{`$${props.ask.toFixed(2)}`}</span>
        </div>
        <div className={"stock-column"}>
          <span className={"stock-item"}><b>EPS: </b>{props.eps}</span>
          <span className={"stock-item"}><b>PE ratio: </b>{props.peRatio}</span>
          <span className={"stock-item"}><b>52 Week Range: </b>{props.range}</span>
          <span className={"stock-item"}><b>Amount Owned: </b>{props.amountOwned}</span>
        </div>
      </div>
    </article>
  );
}