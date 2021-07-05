import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TrxHistoryList from "../components/profile/TrxHistoryList";
import TrxHistoryListItem from "../components/profile/TrxHistoryListItem";

const stocks = [
  {id: 1, name: "Bitcoin", amount: 55, price: 261.55},
  {id: 2, name: "Etherium", amount: 15, price: 55.31},
  {id: 3, name: "Nettie Inc.", amount: 234, price: 18.45}
]

storiesOf("Transaction History", module)
  .add("TRX history list item", () => (
    <TrxHistoryListItem
    amount={55}
    name={"Bitcoin"}
    price={261.55}
    />
  ))
  .add("Trx History List", () => (
    <TrxHistoryList
    stocks={stocks}
    />
  ));