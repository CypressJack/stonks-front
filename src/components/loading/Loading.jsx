import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import './Loading.scss';
import logo from './stonks5.png';

export default function Loading(props) {

  return (
    <div className={"loading-container"}>
      <CircularProgress size={130}/>
      <div className={"image-container"}>
      <img src={logo} alt={"could not display"} className={"stonks-iamge"}/>
      </div>
    </div>
  );
}