import React from "react";
import Button from "../Button";
import "./index.scss";

export default function TutorialsList(props) {


  return (
    <body className={"tutorials-body"}>
      <header>Tutorials.</header>
      <Button tutorial onClick={props.onClick} completed={true}>1. Common Terms</Button>
      <Button tutorial onClick={props.onClick} completed={false}>2. Stocks and Tickers</Button>
      <Button tutorial onClick={props.onClick} completed={false}>3. Account Types</Button>
      <Button tutorial onClick={props.onClick} completed={false}>4. Metrics</Button>
      <Button tutorial onClick={props.onClick} completed={false}>5. Markets</Button>
      <Button tutorial onClick={props.onClick} completed={false}>6. Sectors</Button>
      <Button tutorial onClick={props.onClick} completed={false}>7. Options</Button>
      <Button tutorial onClick={props.onClick} completed={false}>8. Analysis</Button>
    </body>
  );
}