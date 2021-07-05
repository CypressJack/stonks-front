import * as React from 'react';
import "./BalanceHeader.scss";

export default function BalanceHeader(props) {

  let percentColor;
  let percentChange;
  let difference;
  
  if (props.startValue > props.value) {
    percentColor = 'red';
    percentChange = `${((props.startValue / props.value) * 100).toFixed(2)}%`
    difference = `↓${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.startValue - props.value)}`
  };
  
  if (props.value >= props.startValue) {
    percentColor = 'green';
    percentChange = `${((props.value / props.startValue) * 100).toFixed(2)}%`
    difference = `↑${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value - props.startValue)}`
  };

  return (
    <div className='balance-header-container'>
      <p className='balance-header-text'>
        {props.name}
      </p>
      <p className='balance-header-value'>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)}
      </p>
      <div className='balance-header-change-container'>
        <span className={`balance-dollar-change ${percentColor}`}>
        {`${difference} `}
        </span>
      <span className={`balance-header-change ${percentColor}`}>
        {`(${percentChange}) `}
      </span>
      <span className='balance-header-timeline'>
        {props.timeline}
      </span>
      </div>
    </div>
  )
};
