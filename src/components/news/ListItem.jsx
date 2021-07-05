import React from "react";

import "./news.scss"

export default function ListItem(props) {

  // props
  // img
  // headline
  // summary

  const unixTimestamp = props.dateTime;
  const date = new Date(unixTimestamp * 1000)

  return (
    <div className='list-item'>
      <div className = 'list-item-image-container'>
        <img src={props.img} className="news-image"/>
      </div>
      <div className='list-item-text-container'>
        <h4 className='list-item-heading'>
          {props.headline}
        </h4>
        <h5 className='list-item-date'>
          {date.toString().slice(0, 15)}
        </h5>
      </div>
    </div>
  );
};