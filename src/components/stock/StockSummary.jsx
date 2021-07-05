import React from "react";
import "./StockSummary.scss";

export default function StockSummary(props) {


  return (
    <article className={"stock-summary"}>
      <header className={"stock-title"}>{props.name} {`(${props.symbol})`}</header>
      <div className={"stock-row"}>
        <div className={"stock-column"}>
          <span className={"stock-item"}>{`Market Cap: ${props.marketCap}`}</span>
          <span className={"stock-item"}>{`Open: ${props.open}`}</span>
          <span className={"stock-item"}>{`Bid: ${props.bid}`}</span>
          <span className={"stock-item"}>{`Ask: ${props.ask}`}</span>
        </div>
        <div className={"stock-column"}>
          <span className={"stock-item"}>{`EPS: ${props.eps}`}</span>
          <span className={"stock-item"}>{`PE ratio: ${props.peRatio}`}</span>
          <span className={"stock-item"}>{`52 Week Range: ${props.range}`}</span>
        </div>
      </div>
    </article>
  );
}