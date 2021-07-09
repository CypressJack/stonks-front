import React from "react";
import Button from "../Button";
import "./index.scss";
import Slide from '@material-ui/core/Slide';

export default function TutorialsList(props) {

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <main className={"tutorials-body"}>
      <header className={'tutorials-title'}><b>Tutorials</b></header>
      <Button tutorial onClick={() => {props.onClick(); props.setState("tutorial_1")}} completed={props.completed.tutorials[0].tutorial_1}>1. Common Terms</Button>
      <Button tutorial onClick={() => {props.onClick(); props.setState("tutorial_2")}} completed={props.completed.tutorials[0].tutorial_2}>2. Stocks and Tickers</Button>
      <Button tutorial onClick={() => {props.onClick(); props.setState("tutorial_3")}} completed={props.completed.tutorials[0].tutorial_3}>3. Account Types</Button>
      <Button tutorial onClick={() => {props.onClick(); props.setState("tutorial_4")}} completed={props.completed.tutorials[0].tutorial_4}>4. Metrics</Button>
      <Button tutorial onClick={() => {props.onClick(); props.setState("tutorial_5")}} completed={props.completed.tutorials[0].tutorial_5}>5. Markets</Button>
      <Button tutorial onClick={() => {props.onClick(); props.setState("tutorial_6")}} completed={props.completed.tutorials[0].tutorial_6}>6. Sectors</Button>
      <Button tutorial onClick={()=>{props.onClick(); props.setState("tutorial_7")}} completed={props.completed.tutorials[0].tutorial_7}>7. Options</Button>
      <Button tutorial onClick={()=>{props.onClick(); props.setState("tutorial_8")}} completed={props.completed.tutorials[0].tutorial_8}>8. Analysis</Button>
    </main>
    </Slide>
  );
}