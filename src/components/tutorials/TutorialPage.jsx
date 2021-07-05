import React from "react";
import "./TutorialPage.scss";

export default function TutorialPage(props) {


  return (
    <main className={"tutorial-main"}>
      <header className={"tutorial-title"}>{props.title}</header>
      <p className={"tutorial-paragraphs"}>{props.paragraph1}</p>
      {props.subtitle1 && <header className={"subtitle"}>{props.subtitle1}</header>}
      {props.paragraph2 && <p className={"tutorial-paragraphs"}>{props.paragraph2}</p>}
      {props.subtitle2 && <header className={"subtitle"}>{props.subtitle2}</header>}
      {props.paragraph3 && <p className={"tutorial-paragraphs"}>{props.paragraph3}</p>}
    </main>
  );
};