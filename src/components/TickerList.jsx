import React from "react";
import TickerListItem from "components/TickerListItem";
export default function TickerList(props) {


  const composeTickerItems = props.stocks.map(ticker => {
    return (
      <TickerListItem
      key={ticker.symbol}
      name={ticker.name}
      symbol={ticker.symbol}
      pctChange={ticker.pctChange}
      lastSale={ticker.lastSale}
      />
    );
  });

  return (
      <section>
        <ul>{composeTickerItems}</ul>
      </section>
  );
}