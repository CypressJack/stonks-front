import React, { useState } from 'react';
import BalanceHeader from "../BalanceHeader";
import MyHoldingsList from "../MyHoldingsList";
import Graph from "../graph/Graph";
import "./Profile.scss";

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

  const [timeRange, setTimeRange] = useState(monthData)
  const [timeLine, setTimeLine] = useState('Month')

  let graphColor;
  let timeLineString;

  if (timeRange[timeRange.length - 1].value >= timeRange[0].value) {
    graphColor = '#25A55F'
  } else {
    graphColor = '#C47777'
  }

  if (timeLine === 'Live') {
    timeLineString = `${timeLine}`;
  };

  if (timeLine === 'Day' && timeRange !== dayData) {
    timeLineString = `Past ${timeLine}`;
    setTimeRange(dayData);
  };

  if (timeLine === 'Week' && timeRange !== weekData) {
    timeLineString = `Past ${timeLine}`;
    setTimeRange(weekData);
  };

  if (timeLine === 'Month' && timeRange !== monthData) {
    timeLineString = `Past ${timeLine}`;
    setTimeRange(monthData);
  };

  if (timeLine === 'Year' && timeRange !== yearData) {
    timeLineString = `Past ${timeLine}`;
    setTimeRange(yearData);
  };

  if (timeLine === 'All Time' && timeRange !== allData) {
    timeLineString = `${timeLine}`;
    setTimeRange(allData);
  };

  return (
    <div className='profile-container'>
      <BalanceHeader
        name={'My Profile'}
        value={timeRange[timeRange.length - 1].value}
        startValue={timeRange[0].value}
        timeline={timeLineString}
      />
      <Graph
      data={timeRange}
      color={graphColor}
      setTimeLine={setTimeLine}
      />
      <p className='my-holdings-header'>
        My Holdings
      </p>
      <MyHoldingsList
      className='profile-holdings-list'
      stocks={props.tickerData}
      />
    </div>
  )
};
