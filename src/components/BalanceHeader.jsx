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


  const profileValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)

  return (
    <div className='balance-header-container -header' onClick={props.onClick}>
      <p className='balance-header-text -header' onClick={props.onClick}>
        {props.name}
      </p>
      <p className='balance-header-value -header' onClick={props.onClick}>
        {profileValue}
      </p>
      <div className='balance-header-change-container -header' onClick={props.onClick}>
        <span className={`balance-dollar-change -header ${percentColor}`} onClick={props.onClick}>
        {`${difference} `}
        </span>
      <span className={`balance-header-change -header ${percentColor}`} onClick={props.onClick}>
        {`(${percentChange}) `}
      </span>
      <span className='balance-header-timeline -header' onClick={props.onClick}>
        {props.timeline}
      </span>
      </div>
    </div>
  )
};
