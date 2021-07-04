import React from "react";

import "./news.scss"

export default function ListItem(props) {

  const unixTimestamp = props.dateTime;
  const date = new Date(unixTimestamp * 1000)

  return (
    <div className='list-item'>
      <div>
        <img src={props.img} className="news-image"/>
      </div>
      <div>
        <h1>
          {props.headline}
        </h1>
        <h3>
          {date.toString().slice(0, 15)}
        </h3>
      </div>
    </div>
  );
};