import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StockSummary from "../components/stock/StockSummary";

const stockData = {name: "Etherium", symbol: "ETH", marketCap: "$689,125.12", EPS: "N/A", open: "$2,200.65", PeRatio: "N/A", bid: "$2,543.34", range: "$1,700.35 - $3,664.38", ask: 2176.08}

storiesOf("stock summary", module)
  .add("Summary", () => (
    <StockSummary
    name={stockData.name}
    symbol={stockData.symbol}
    marketCap={stockData.marketCap}
    eps={stockData.EPS}
    open={stockData.open}
    peRatio={stockData.PeRatio}
    bid={stockData.bid}
    range={stockData.range}
    ask={stockData.ask}
    />
  ));