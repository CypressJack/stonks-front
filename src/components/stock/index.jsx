import React, { useState, useEffect } from 'react';
//import components
import BalanceHeader from '../BalanceHeader';
import Graph from '../graph/Graph';
import StockSummary from './StockSummary';
import StockForm from './StockForm';
import Dialogue from './Dialogue';

import axios from 'axios';
import useApiData from "../../hooks/useApiData";
import TooltipBar from "../TooltipBar";

export default function Stock(props) {

  // const { state, setState } = useApiData();
  const [status, setStatus] = useState("")
  
  const createGraphData = (history) => {
    let index = Object.keys(history).length;
    const results = [];
    for (const item in history) {
      const closingPrice = Object.values(history[item])[4]
      results.unshift({argument: index, value: parseFloat(closingPrice)})
      index -= 1;
    };
    return results;
  };

  const createDayData = (history) => {
    let index = Object.keys(history).length;
    const results = [];
    for (const item in history) {
      const closingPrice = Object.values(history[item])[3]
      results.unshift({argument: index, value: parseFloat(closingPrice)})
      index -= 1;
    };
    return results;
  };

  const allData = createGraphData(props.data.history);
  const monthData = createGraphData(props.data.month);
  const yearData = allData.slice(-52);
  const weekData = monthData.slice(-7);
  const dayData = createDayData(props.data.day);
  const liveData = allData.slice(-2);
  
  const [selectedData, setSelectedData] = useState(allData);
  const [timeLine, setTimeLine] = useState('Month');
  const [view, setView] = useState('Month');

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
          let oldstate = {...props.state}
          oldstate.users = all[0].data
          oldstate.transactions = all[1].data
          oldstate.owned = all[2].data
          props.setState(oldstate)
        }
        setStatus("purchased")
        setTimeout(()=> {setStatus("")}, 2000)
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
              let oldstate = {...props.state}
              oldstate.users = all[0].data
              oldstate.transactions = all[1].data
              oldstate.owned = all[2].data
              props.setState(oldstate)
            }
            return () => mounted = false;
          })
        })
      }
      setStatus("sold")
      setTimeout(()=> {setStatus("")}, 2000)
    return true;
  })})}


  const tutFunc = function(tutMode, event) {
    if (tutMode === true) {
      console.log(event.target.classList);
      switch (event.target.classList[1]) {
        case "-mrkt-cap":
          props.setTooltip(["Market Cap:", "The amount of available shares, multiplied by the current price.", "market-cap"])
          break;
        case "-eps":
          props.setTooltip(["Earnings Per Share:", "Company Revenue per quarter divided by available shares", "eps"])
          break;
        case "-open":
          props.setTooltip(["Opening Price:", "The price of the share when the market opens (6:30am Western)", "open"])
          break;
        case "-pe-ratio":
          props.setTooltip(["Price to Earnings Ratio:", "All company revenue in a quarter divided by the price of each share", "pe-ratio"])
          break;
        case "-bid":
          props.setTooltip(["Bid:", "The current highest offer that people are making to buy the share", "bid"])
          break;
        case "-wk-rng":
          props.setTooltip(["52 Week Range:", "Highest and Lowest price the stock achieved in the past 52 weeks", "wk-rng"])
          break;
        case "-ask":
          props.setTooltip(["Asking Price:", "The current price at which the stock is being sold for", "ask"])
          break;
        case "-amnt-owned":
          props.setTooltip(["Amount Owned:", "The amount of shares you currently own", "amnt-owned"])
          break;
        case "-header":
          props.setTooltip(["Company, Current Price & Percent Change:", "The large text indicates the company name. The following price value represents the current asking price of the stock. Finally, the smaller price value and percent show the change in price over time, depending on the graph filter selected.", "header"])
          break;
        default:
          props.setTooltip(["Stock Graph:", "Shows price trends over time, depending on the filter selected at the bottom. You can click on the points on the graph to show the price at any given time.", "graph", "1D shows price updates for the day every 5 mins. 1W shows closing price per day for a week. 1M shows closing price per day for 30 days. 1Y shows closing price per week for a whole year"])
          break;
      }
    }
  }
  
  React.useEffect(() => {
    if (props.tutMode === false) {
      props.setTooltip([])
    }
  }, [props.tutMode]);

  useEffect(()=>{
    setView(timeLine);
  },[selectedData])

  return (
    <main className='single-stock-container'>
      <BalanceHeader
        name={props.data.stockData.name}
        value={selectedData[selectedData.length - 1].value}
        startValue={selectedData[0].value}
        timeline={timeLineString}
        profile={false}
        stockPrice={props.data.stockData.lastsale}
        onClick={(event) => {tutFunc(props.tutMode, event);}}
      />
  
      {(view === 'Live' && liveData) && <Graph data={liveData} color={graphColor} setTimeLine={setTimeLine} selected={'Live'} onClick={(event) => tutFunc(props.tutMode, event)}/>}
      {(view === 'Day' && dayData) && <Graph data={dayData} color={graphColor} setTimeLine={setTimeLine} selected={'Day'} onClick={(event) => tutFunc(props.tutMode, event)}/>}
      {(view === 'Month' && monthData) && <Graph data={monthData} color={graphColor} setTimeLine={setTimeLine} selected={'Month'} onClick={(event) => tutFunc(props.tutMode, event)}/>}
      {(view === 'Week' && weekData) && <Graph data={weekData} color={graphColor} setTimeLine={setTimeLine} selected={'Week'} onClick={(event) => tutFunc(props.tutMode, event)}/>}
      {(view === 'Year' && yearData) && <Graph data={yearData} color={graphColor} setTimeLine={setTimeLine} selected={'Year'} onClick={(event) => tutFunc(props.tutMode, event)}/>}
      {(view === 'All Time' && yearData) && <Graph data={yearData} color={graphColor} setTimeLine={setTimeLine} selected={'All Time'} onClick={(event) => tutFunc(props.tutMode, event)}/>}
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
          amountOwned={checkOwned(props.state.owned.owned)}
          onClick={event => tutFunc(props.tutMode, event)}
      />
      <StockForm
      currentPrice={props.data.prices.allprices.c}
      symbol={props.data.stockData.symbol}
      sell={sellStock}
      buy={buyStock}
      />
      {props.tutMode && <TooltipBar tooltip={props.tooltip}/>}
      {status === 'purchased' && <Dialogue message="Stock Purchased!"/>}
      {status === 'sold' && <Dialogue message="Stock Sold!"/>}
    </main>
  );
}