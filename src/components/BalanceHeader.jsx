import * as React from 'react';
import "./BalanceHeader.scss";

export default function BalanceHeader(props) {

  let percentColor;
  let percentChange;
  let difference;
  let differenceNum;

  if (props.startValue > props.value) {
    differenceNum = props.value - props.startValue
    percentColor = 'red';
    percentChange = `${((differenceNum / props.startValue) * 100).toFixed(2)}%`
    difference = `↓ ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.startValue - props.value)}`
  }
  
  if (props.value >= props.startValue) {
    differenceNum = props.value - props.startValue
    percentColor = 'green';
    percentChange = `${((differenceNum / props.startValue) * 100).toFixed(2)}%`
    difference = `↑ ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value - props.startValue)}`
  }


  console.log("start value", props.startValue);
  console.log("value", props.value);
  console.log("percent change", differenceNum / props.startValue * 100)


  const profileValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)

  return (
    <div className='balance-header-container'>
      <p className='balance-header-text'>
        {props.name}
      </p>
      <p className='balance-header-value'>
        {profileValue}
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
