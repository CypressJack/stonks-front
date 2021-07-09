import React from "react";
import MuiButton from "@material-ui/core/Button";
import check from "@material-ui/icons/Check";
import classNames from "classnames";
// Import global styling overrides aka our theme
import "../globalStyleOverride.scss";

export default function Button(props) {
  let IsCompleted = null;
  if (props.completed) {
    IsCompleted = check
  }

  const buttonClass = classNames(
    {'MuiButton-tutorial': props.tutorial,
    'red-button': props.sell,
    'MuiButton-tutorial-completed': props.completed,
    'MuiButton-back': props.back,
    }
  );

  return (
    <MuiButton className={buttonClass} onClick={props.onClick}>{props.children}{ props.completed && <IsCompleted className={"checkmark"}/>}</MuiButton>
  );
}