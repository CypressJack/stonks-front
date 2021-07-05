import React from "react";
import TickerListItem from "./TickerListItem";
import SearchBar from "./SearchBar";

export default function TickerList(props) {

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
  } 

  return (
      <section>
        <SearchBar/>
        <ul>{composeTickerItems}</ul>
      </section>
  );
}