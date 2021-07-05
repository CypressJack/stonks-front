import React from "react";
import MyHoldingsListItem from "./MyHoldingsListItem";

export default function MyHoldingsList(props) {

  const composeHoldingsList = props.stocks.map(stock => {
    return (
      <MyHoldingsListItem
      key={stock.symbol}
      name={stock.name}
      pctChange={stock.pctChange}
      amountOwned={stock.amountOwned}
      currentPrice={stock.c}
      />
    );
  })

  return (
    <ul>
      {composeHoldingsList}
    </ul>
  );
}