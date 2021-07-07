import React from "react";
import "./TutorialPage.scss";
import Slide from '@material-ui/core/Slide';
import Button from '../Button';

export default function TutorialPage(props) {
  
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <main className={"tutorial-main"}>
      <header className={"tutorial-title"}><b>{props.title}</b></header>
      <p className={"tutorial-paragraphs"}>{props.paragraph1}</p>
      {props.subtitle1 && <header className={"subtitle"}><b>{props.subtitle1}</b></header>}
      {props.paragraph2 && <p className={"tutorial-paragraphs"}>{props.paragraph2}</p>}
      {props.subtitle2 && <header className={"subtitle"}><b>{props.subtitle2}</b></header>}
      {props.paragraph3 && <p className={"tutorial-paragraphs"}>{props.paragraph3}</p>}
      <div className={"back-button-container"}>
      <Button back onClick={props.onClick}>Back</Button>
      </div>
    </main>
    </Slide>
  );
};
