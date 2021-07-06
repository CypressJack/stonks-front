import React, { useState } from 'react';
//import components
import BalanceHeader from '../BalanceHeader';
import Graph from '../graph/Graph';
import StockSummary from './StockSummary';
import StockForm from './StockForm';

export default function Stock(props) {

  
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
  console.log("raw data", props.data.history)
  console.log("conditioned data", allData)
  
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