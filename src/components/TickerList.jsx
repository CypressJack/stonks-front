import React from "react";
import TickerListItem from "./TickerListItem";
export default function TickerList(props) {

  console.log("Here", props.stocks.stocks)

  let composeTickerItems;

  if (props.stocks.stocks){
    composeTickerItems = props.stocks.stocks.map(ticker => {
      return (
        <TickerListItem
        onClick={props.onClick}
        key={ticker.symbol}
        name={ticker.name}
        symbol={ticker.symbol}
        pctChange={ticker.pctchange}
        lastSale={ticker.lastsale}
        />
      );
    });
  } else {
    composeTickerItems = props.stocks.map(ticker => {
      return (
        <TickerListItem
        onClick={props.onClick}
        key={ticker.symbol}
        name={ticker.name}
        symbol={ticker.symbol}
        pctChange={ticker.pctchange}
        lastSale={ticker.lastSale}
        />
      );
    });
  }

  return (
      <section>
        <ul>{composeTickerItems}</ul>
      </section>
  );
}