import * as React from 'react';
import "./BalanceHeader.scss";

export default function BalanceHeader(props) {

  return (
    <div className='balance-header-container'>
      <h5 className='balance-header-text'>
        {props.name}
      </h5>
      <h5 className='balance-header-value'>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.value)}
      </h5>
      <span className='balance-header-change'>
        {props.change}
      </span>
      <span className='balance-header-timeline'>
        {props.timeline}
      </span>
    </div>
  )
};
