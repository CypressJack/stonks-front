import React from "react";
import Button from "../Button";
import "./index.scss";
import Slide from '@material-ui/core/Slide';

export default function TutorialsList(props) {


  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <body className={"tutorials-body"}>
      <header>Tutorials.</header>
      <Button tutorial onClick={props.onClick} completed={false}>1. Common Terms</Button>
      <Button tutorial onClick={props.onClick} completed={false}>2. Stocks and Tickers</Button>
      <Button tutorial onClick={props.onClick} completed={false}>3. Account Types</Button>
      <Button tutorial onClick={props.onClick} completed={false}>4. Metrics</Button>
      <Button tutorial onClick={props.onClick} completed={false}>5. Markets</Button>
      <Button tutorial onClick={props.onClick} completed={false}>6. Sectors</Button>
      <Button tutorial onClick={props.onClick} completed={false}>7. Options</Button>
      <Button tutorial onClick={props.onClick} completed={false}>8. Analysis</Button>
    </body>
    </Slide>
  );
}