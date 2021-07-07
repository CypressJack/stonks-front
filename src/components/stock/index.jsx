import React, { useEffect, useState } from 'react';
//import components
import BalanceHeader from '../BalanceHeader';
import Graph from '../graph/Graph';
import StockSummary from './StockSummary';
import StockForm from './StockForm';

import axios from 'axios';
import useApiData from "../../hooks/useApiData";

export default function Stock(props) {
  const { state, setState } = useApiData();

  const historyData = (history) => {
    let index = Object.keys(history).length;
    const results = [];
    for (const item in history) {
      const closingPrice = Object.values(history[item])[4]
      results.unshift({argument: index, value: parseFloat(closingPrice)})
      index -= 1;
    }
    return results;
  }
  const allData = historyData(props.data.history);
  const monthData = allData.slice(-5);
  const yearData = allData.slice(-52);
  const weekData = allData.slice(-2);
  
  const [selectedData, setSelectedData] = useState(monthData);
  const [timeLine, setTimeLine] = useState('Month');
  

  let graphColor;
  let timeLineString;

  if (selectedData[selectedData.length - 1].value >= selectedData[0].value) {
    graphColor = '#25A55F'
  } else {
    graphColor = '#C47777'
  };


  if (timeLine === 'Month' && selectedData.toString() !== monthData.toString()) {
    setSelectedData(monthData);
  };
  if (timeLine === 'Year' && selectedData.toString() !== yearData.toString()) {
    setSelectedData(yearData);
  };
  if (timeLine === 'Week' && selectedData.toString() !== weekData.toString()) {
    setSelectedData(weekData);
  };
  if (timeLine === 'All Time' && selectedData.toString() !== allData.toString()) {
    setSelectedData(allData);
  };

  // pass the timeline to balanceheader
  if (timeLine === 'Live') {
    timeLineString = `${timeLine}`;
  };

  if (timeLine === 'Day') {
    timeLineString = `Past ${timeLine}`;
  };

  if (timeLine === 'Week') {
    timeLineString = `Past ${timeLine}`;
  };

  if (timeLine === 'Month') {
    timeLineString = `Past ${timeLine}`;
  };

  if (timeLine === 'Year') {
    timeLineString = `Past ${timeLine}`;
  };

  if (timeLine === 'All Time') {
    timeLineString = `${timeLine}`;
  };


  const checkOwned = (ownAr) => {
    if (ownAr){
      for (let stock of ownAr) {
        if (stock.symbol === props.data.stockData.symbol){
          return stock.amount;
        } 
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

  const buyStock = (amount, cost) => {
    let mounted = true;
    axios.post('/api/buy-stock', {
      cost,
      amount,
      symbol: `${props.data.stockData.symbol}`,
      type: true,
      user_id: 1
    })
    .then((data)=>{
      Promise.all([
        axios.default.get(`
        /api/users`),
        axios.default.get(`
        /api/transactions`),
        axios.default.get(`
        /api/owned-stocks`)
      ]).then((all) => {
        if (mounted){
          let oldstate = {...state}
          oldstate.users = all[0].data
          oldstate.transactions = all[1].data
          oldstate.owned = all[2].data
          setState(oldstate)
        }
        return () => mounted = false;
      })
    })
  }

  const sellStock = (amount, cost) => {
    let mounted = true;
    axios.get('/api/owned-stocks').then(data => {
      data.data.owned.map((owned) => { if(owned.symbol === props.data.stockData.symbol){
        axios.post('/api/sell-stock', {
          cost,
          amount,
          symbol: props.data.stockData.symbol,
          type: false,
          user_id: 1
        }).then((data) => {
          Promise.all([
            axios.default.get(`
            /api/users`),
            axios.default.get(`
            /api/transactions`),
            axios.default.get(`
            /api/owned-stocks`)
          ]).then((all) => {
            if (mounted){
              let oldstate = {...state}
              oldstate.users = all[0].data
              oldstate.transactions = all[1].data
              oldstate.owned = all[2].data
              setState(oldstate)
            }
            return () => mounted = false;
          })
        })
      }})
    })
  }

  return (
    <main>
      <BalanceHeader
        name={props.data.stockData.name}
        value={selectedData[selectedData.length - 1].value}
        startValue={selectedData[0].value}
        timeline={timeLineString}
        profile={false}
        stockPrice={props.data.stockData.lastsale}
      />
      <Graph 
        data={selectedData}
        color={graphColor}
        setTimeLine={setTimeLine}
            />
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
          amountOwned={checkOwned(state.owned.owned)}
      />
      <StockForm
      currentPrice={props.data.prices.allprices.c}
      symbol={props.data.stockData.symbol}
      sell={sellStock}
      buy={buyStock}
      />
    </main>
  );
}