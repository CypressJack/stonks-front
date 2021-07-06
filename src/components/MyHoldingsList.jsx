import React from "react";
import MyHoldingsListItem from "./MyHoldingsListItem";
import "./MyHoldingsList.scss"

export default function MyHoldingsList(props) {
  const composeHoldingsList = props.stocks.map(stock => {

    return (
      <MyHoldingsListItem
      key={props.stocks.indexOf(stock)}
      name={stock.name}
      pctChange={stock.pctchange}
      amountOwned={stock.amount}
      currentPrice={stock.currentPrice}
      />
    );
  })

  return (
    <ul className='my-holdings-list'>
      {composeHoldingsList}
    </ul>
  );
}