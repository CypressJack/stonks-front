import React, { useState } from 'react';
import BalanceHeader from "../BalanceHeader";
import MyHoldingsList from "../MyHoldingsList";
import Graph from "../graph/Graph";
import "./Profile.scss";
import TrxHistoryList from "./TrxHistoryList";
import Slide from '@material-ui/core/Slide';

// positive change
const dayData = [
  { argument: 1, value: 10000 },
  { argument: 2, value: 10020 },
  { argument: 3, value: 10200 },
  { argument: 4, value: 10600 },
  { argument: 5, value: 10045 },
  { argument: 6, value: 10085 },
  { argument: 7, value: 90330 },
];
// positive change
const weekData = [
  { argument: 1, value: 80606 },
  { argument: 3, value: 80504 },
  { argument: 4, value: 90304 },
  { argument: 5, value: 90154 },
  { argument: 7, value: 90455 },
  { argument: 8, value: 90405 },
  { argument: 9, value: 90330 },
];
// negative change
const monthData = [
  { argument: 1, value: 16000 },
  { argument: 3, value: 12005 },
  { argument: 4, value: 10025 },
  { argument: 5, value: 80005 },
  { argument: 7, value: 90006 },
  { argument: 8, value: 85005 },
  { argument: 9, value: 90330 },
];
//positive change
const yearData = [
  { argument: 1, value: 40005 },
  { argument: 3, value: 42005 },
  { argument: 4, value: 43076 },
  { argument: 5, value: 56586 },
  { argument: 7, value: 46855 },
  { argument: 8, value: 88656 },
  { argument: 9, value: 90330 },
];
// negative change
const allData = [
  { argument: 1, value: 100406 },
  { argument: 3, value: 125605 },
  { argument: 4, value: 257330 },
  { argument: 5, value: 135355 },
  { argument: 7, value: 125545 },
  { argument: 8, value: 153385 },
  { argument: 9, value: 90330 },
];

export default function Profile(props) {

  const [selectedData, setSelectedData] = useState(monthData)
  const [timeLine, setTimeLine] = useState('Month')

  let graphColor;
  let timeLineString;

  if (selectedData[selectedData.length - 1].value >= selectedData[0].value) {
    graphColor = '#25A55F'
  } else {
    graphColor = '#C47777'
  }


  if (timeLine === 'Day' && selectedData !== dayData) {
    timeLineString = `Past ${timeLine}`;
    setSelectedData(dayData);
  };

  if (timeLine === 'Week' && selectedData !== weekData) {
    timeLineString = `Past ${timeLine}`;
    setSelectedData(weekData);
  };

  if (timeLine === 'Month' && selectedData !== monthData) {
    timeLineString = `Past ${timeLine}`;
    setSelectedData(monthData);
  };

  if (timeLine === 'Year' && selectedData !== yearData) {
    timeLineString = `Past ${timeLine}`;
    setSelectedData(yearData);
  };

  if (timeLine === 'All Time' && selectedData !== allData) {
    timeLineString = `${timeLine}`;
    setSelectedData(allData);
  };

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

  const myTransactions = (mystocks, allstocks, allcrypto) => {
    let results = [];
    for (let stock of mystocks){
      for (let item of allstocks){
        if (stock.symbol === item.symbol){
          results.push(stock)
        }
      }
    }

    // for (let stock of mystocks){
    //   for (let crypto of allcrypto){
    //     if (crypto.symbol === stock.symbol){
    //       results.push(stock)
    //     }
    //   }
    // }

    return results;
  }

  const myHoldings = (mystocks, allstocks) => {
    let results = [];

    for (let stock of mystocks){
      for (let item of allstocks){
        if (stock.symbol === item.symbol){
          let obj = {
            name: item.name,
            pctchange: item.pctchange,
            currentPrice: item.lastsale,
            amount: stock.amount
          }
          results.push(obj)
        }
      }
    }

    // for (let stock of mystocks){
    //   for (let crypto of allcrypto){
    //     if (stock.symbol === crypto.symbol){
    //       let obj = {
    //         name: crypto.name,
    //         pctchange: crypto.quote.USD.percent_change_24h,
    //         currentPrice: crypto.quote.USD.price,
    //         amount: stock.amount
    //       }
    //       results.push(obj)
    //     }
    //   }
    // }
    // console.log(results)
    return results;
  }

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <div className='profile-container'>
      <BalanceHeader
        name={'My Profile'}
        value={selectedData[selectedData.length - 1].value}
        startValue={selectedData[0].value}
        timeline={timeLineString}
      />
      <Graph
      data={selectedData}
      color={graphColor}
      setTimeLine={setTimeLine}
      />
      <p className='my-holdings-header'>
        <b>My Holdings</b>
      </p>
      <MyHoldingsList
      className='profile-holdings-list'
      stocks={myHoldings(props.owned, props.stocks.stocks)}
      />
      <p className='my-holdings-header'>
        <b>Transaction History</b>
      </p>
      <TrxHistoryList stocks={myTransactions(props.transactions.transactions, props.stocks.stocks, props.crypto.allcrypto)}/>
    </div>
    </Slide>
  )
};
