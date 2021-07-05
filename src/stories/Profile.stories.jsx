import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";

import Profile from "../components/profile/index";


const tickerData = [
  {symbol: "AA", name: "Alcoa Corporation Common Stock ", pctChange: "0.326%", lastSale: "$147.79", c: 261.74, amountOwned: 33},
  {symbol: "AAC", name: "Ares Acquisition Corporation Class A Ordinary Shares", pctChange: "-0.02%", lastSale: "$36.96", c: 157.88, amountOwned: 12},
  {symbol: "AAIC^C", name: "Arlington Asset Investment Corp 8.250% Seies C Fix…ing Rate Cumulative Redeemable Preferred Stock", pctChange: "0.52%", lastSale: "$25.14", c: 476.21, amountOwned: 8}
];


storiesOf("Profile", module)
  .add("Dynamic", () => (
    <StylesProvider injectFirst>
    <Profile
      tickerData={tickerData}
    />
    </StylesProvider>
  ));