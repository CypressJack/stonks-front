import React from 'react';
//import components
import BalanceHeader from '../BalanceHeader';
import Graph from '../graph/Graph';
import StockSummary from './StockSummary';
import StockForm from './StockForm';

export default function Stock(props) {

  const historyData = (history) => {
    let index =1;
    const results = [];
    for (const item in history) {
      const closingPrice = Object.values(history[item])[3]
      results.push({argument: index, value: parseFloat(closingPrice)})
      index += 1;
    }
    return results;
  }

  return (
    <main>
      <BalanceHeader
            name='My Profile'
            value={250}
            startValue={750}
            timeline={'Past Month'}
      />
      <Graph data={historyData(props.data.history)}/>
      <StockSummary
          name={props.data.stockData.name}
          symbol={props.data.stockData.symbol}
          marketCap={props.data.stockData.marketCap}
          eps={'N/A'}
          open={props.data.prices.allprices.o}
          peRatio={'N/A'}
          bid={props.data.stockData.lastsale}
          range={'N/A'}
          ask={props.data.prices.allprices.c}
          amountOwned={'N/A'}
      />
      <StockForm/>
    </main>
  );
}