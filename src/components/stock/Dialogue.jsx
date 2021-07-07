import React from 'react';
import { Card, Slide } from '@material-ui/core';
import './Dialogue.scss';

export default function Dialogue(props) {

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <div className={'card-container'}>
    <Card className={"dialogue-card"}>
      {props.message}
    </Card>
    </div>
    </Slide>
  );
}