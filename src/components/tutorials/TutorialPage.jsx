import React from "react";
import "./TutorialPage.scss";
import Slide from '@material-ui/core/Slide';
import Button from '../Button';
import Check from '@material-ui/icons/Check'
import KeyBoardReturn from '@material-ui/icons/KeyboardReturn';
import Metrics from './Metrics';
export default function TutorialPage(props) {

  
  
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <main className={"tutorial-main"}>
    <header className={"tutorial-title"}><b>{props.title}</b></header>
      {/* <header className={"tutorial-title"}><b>{props.title}</b></header>
      <p className={"tutorial-paragraphs"}>{props.paragraph1}</p>
      {props.subtitle1 && <header className={"subtitle"}><b>{props.subtitle1}</b></header>}
      {props.paragraph2 && <p className={"tutorial-paragraphs"}>{props.paragraph2}</p>}
      {props.subtitle2 && <header className={"subtitle"}><b>{props.subtitle2}</b></header>}
      {props.paragraph3 && <p className={"tutorial-paragraphs"}>{props.paragraph3}</p>}
  */}
      <Metrics/>
        <div className={"back-button-container"}>
        <Button back sell onClick={props.onClick}><KeyBoardReturn/></Button>
        <Button back onClick={props.onComplete}><Check/></Button>
      </div>
    </main>
    </Slide>
  );
};
