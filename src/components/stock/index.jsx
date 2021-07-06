import React from 'react';
//import components
import BalanceHeader from '../BalanceHeader';
import Graph from '../graph/Graph';
import StockSummary from './StockSummary';
import StockForm from './StockForm';

export default function Stock(props) {

  console.log(props.data)

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

  const checkOwned = (ownAr) => {
    for (let stock of ownAr) {
      if (stock.symbol === props.data.stockData.symbol){
        return stock.amount;
      } 
    }
    return '0'
  }

  const checkRange = (low, high) => {
    if (!low || !high){
      return 'N/A'
    }
    return `$${low} - $${high}`
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
          eps={props.data.company.EPS}
          open={props.data.prices.allprices.o}
          peRatio={props.data.company.PERatio}
          bid={props.data.stockData.lastsale}
          range={checkRange(props.data.company['52WeekLow'], props.data.company['52WeekHigh'])}
          ask={props.data.prices.allprices.c}
          amountOwned={checkOwned(props.owned)}
      />
      <StockForm/>
    </main>
  );
}