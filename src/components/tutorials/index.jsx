import React from "react";
import Button from "../Button";
import "./index.scss";
import Slide from '@material-ui/core/Slide';

export default function TutorialsList(props) {

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <main className={"tutorials-body"}>
      <header className={'tutorials-title'}><b>Tutorials</b></header>
      <Button tutorial onClick={props.onClick} completed={true}>1. Common Terms</Button>
      <Button tutorial onClick={props.onClick} completed={true}>2. Stocks and Tickers</Button>
      <Button tutorial onClick={props.onClick} completed={true}>3. Account Types</Button>
      <Button tutorial onClick={props.onClick} completed={false}>4. Metrics</Button>
      <Button tutorial onClick={props.onClick} completed={false}>5. Markets</Button>
      <Button tutorial onClick={props.onClick} completed={false}>6. Sectors</Button>
      <Button tutorial onClick={props.onClick} completed={false}>7. Options</Button>
      <Button tutorial onClick={props.onClick} completed={false}>8. Analysis</Button>
    </main>
    </Slide>
  );
}