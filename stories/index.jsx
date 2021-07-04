import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";

// import Button from "@material-ui/core/Button";
import Button from "components/Button";
import TickerListItem from "components/TickerListItem";
storiesOf("Button", module)
  .add("Base", () => <StylesProvider injectFirst><Button onClick={action("Button Clicked!")}>Base</Button></StylesProvider>)
  .add("Sell", () => <StylesProvider injectFirst><Button className="red-button" onClick={action("Button Clicked!")}>Sell</Button></StylesProvider> )
  .add("Tutorial", () => <StylesProvider injectFirst><Button className="MuiButton-tutorial" onClick={action("Button Clicked!")} completed={false}>Tutorial 1.</Button></StylesProvider>)
  .add("Completed tutorial", () => <StylesProvider injectFirst><Button className="MuiButton-tutorial" onClick={action("Button Clicked!")} completed={true} >Tutorial 1.</Button></StylesProvider>);

const tickerData = [
  {symbol: "AA", name: "Alcoa Corporation Common Stock ", pctChange: "0.326%", lastSale: "$147.79"},
  {symbol: "AAC", name: "Ares Acquisition Corporation Class A Ordinary Shares", pctChange: "-0.02%", lastSale: "$36.96"},
  {symbol: "AAIC^C", name: "Arlington Asset Investment Corp 8.250% Seies C Fix…ing Rate Cumulative Redeemable Preferred Stock", pctChange: "0.52%", lastSale: "$25.14"}
];

storiesOf("TickerListItem", module)
  .add("Positive_Percent", () => (<TickerListItem
  name={tickerData[0].name}
  symbol={tickerData[0].symbol}
  pctChange={tickerData[0].pctChange}
  lastSale={tickerData[0].lastSale}
  />
  ))
  .add("Negative_Percent", () => (<TickerListItem
  name={tickerData[1].name}
  symbol={tickerData[1].symbol}
  pctChange={tickerData[1].pctChange}
  lastSale={tickerData[1].lastSale}
  />
  ))

  // fullname    per item
  // ticker       percent_change