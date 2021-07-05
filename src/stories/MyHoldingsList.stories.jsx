import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MyHoldingsListItem from "../components/MyHoldingsListItem";
import MyHoldingsList from "../components/MyHoldingsList";

const tickerData = [
  {symbol: "AA", name: "Alcoa Corporation Common Stock ", pctChange: "0.326%", lastSale: "$147.79", c: 261.74, amountOwned: 33},
  {symbol: "AAC", name: "Ares Acquisition Corporation Class A Ordinary Shares", pctChange: "-0.02%", lastSale: "$36.96", c: 157.88, amountOwned: 12},
  {symbol: "AAIC^C", name: "Arlington Asset Investment Corp 8.250% Seies C Fix…ing Rate Cumulative Redeemable Preferred Stock", pctChange: "0.52%", lastSale: "$25.14", c: 476.21, amountOwned: 8}
];

storiesOf("My Holdings List Item", module)
  .add("Positive change", () => (
    <MyHoldingsListItem
    currentPrice={tickerData[0].c}
    name={tickerData[0].name}
    symbol={tickerData[0].symbol}
    pctChange={tickerData[0].pctChange}
    onClick={action("Button Clicked!")}
    amountOwned={tickerData[1].amountOwned}
    />
  ))
  .add("Negative change", () => (
    <MyHoldingsListItem
    currentPrice={tickerData[1].c}
    name={tickerData[1].name}
    symbol={tickerData[1].symbol}
    pctChange={tickerData[1].pctChange}
    onClick={action("Button Clicked!")}
    amountOwned={tickerData[1].amountOwned}
    />
  ));

storiesOf("My Holdings List", module)
    .add("holdings list", () => (
      <MyHoldingsList
      stocks={tickerData}
      />
    ));