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
    <div className='list-item' onClick={() => window.open(props.url, "_blank")}>
      <div className = 'list-item-image-container'>
        <img src={props.img} alt="" className="news-image"/>
      </div>
      <div className='list-item-text-container'>
        <h4 className='list-item-heading'>
          {props.headline}
        </h4>
        <h5 className='list-item-date'>
          {date.toString().slice(0, 11)}
        </h5>
      </div>
    </div>
  );
};