import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Profile from "../components/profile/index";

const data = [
  { argument: 1, value: 10 },
  { argument: 3, value: 20 },
  { argument: 4, value: 30 },
  { argument: 5, value: 55 },
  { argument: 7, value: 45 },
  { argument: 8, value: 85 },
  { argument: 9, value: 100 },
];

const tickerData = [
  {symbol: "AA", name: "Alcoa Corporation Common Stock ", pctChange: "0.326%", lastSale: "$147.79", c: 261.74, amountOwned: 33},
  {symbol: "AAC", name: "Ares Acquisition Corporation Class A Ordinary Shares", pctChange: "-0.02%", lastSale: "$36.96", c: 157.88, amountOwned: 12},
  {symbol: "AAIC^C", name: "Arlington Asset Investment Corp 8.250% Seies C Fix…ing Rate Cumulative Redeemable Preferred Stock", pctChange: "0.52%", lastSale: "$25.14", c: 476.21, amountOwned: 8}
];


storiesOf("Profile", module)
  .add("Positive Day", () => (
    <Profile
      name='My Profile'
      value={20000}
      startValue={10000}
      timeline={'Past Month'}
      data={data}
      tickerData={tickerData}
    />
  ))
  .add("Negative Day", () => (
    <Profile
      name='My Profile'
      value={2500}
      startValue={10000}
      timeline={'Past Month'}
      data={data}
      tickerData={tickerData}
    />
  ));