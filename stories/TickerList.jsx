import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";


import TickerList from "components/TickerList";

const tickerData = [
  {symbol: "AA", name: "Alcoa Corporation Common Stock ", pctChange: "0.326%", lastSale: "$147.79"},
  {symbol: "AAC", name: "Ares Acquisition Corporation Class A Ordinary Shares", pctChange: "-0.02%", lastSale: "$36.96"},
  {symbol: "AAIC^C", name: "Arlington Asset Investment Corp 8.250% Seies C Fix…ing Rate Cumulative Redeemable Preferred Stock", pctChange: "0.52%", lastSale: "$25.14"}
];

storiesOf("TickerList", module)
  .add("TickerList", () => (
    <TickerList
      stocks={tickerData}
      onClick={action("Button Clicked!")}
    />
  ));