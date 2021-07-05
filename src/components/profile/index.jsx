import * as React from 'react';
import BalanceHeader from "../BalanceHeader";
import MyHoldingsList from "../MyHoldingsList";
import Graph from "../graph/Graph";
import "./Profile.scss";

export default function Profile(props) {

  return (
    <div className='profile-container'>
      <BalanceHeader
        name={props.name}
        value={props.value}
        startValue={props.startValue}
        timeline={props.timeline}
      />
      <Graph
      data={props.data}/>
      <MyHoldingsList
      className='profile-holdings-list'
      stocks={props.tickerData}
      />
    </div>
  )
};
