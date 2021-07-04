import React from "react";
import MuiButton from "@material-ui/core/Button";
import check from "@material-ui/icons/Check";
// Import global styling overrides aka our theme
import "../globalStyleOverride.css";

export default function Button(props) {
  let IsCompleted = null;
  if (props.completed) {
    IsCompleted = check
  }
  // const buttonClass = classNames(
  //   'MuiButton ',
  //   {'MuiButton-tutorial': props.tutorial},
  //   {'red-button': props.sell}
  // )

  return (
    <MuiButton className={props.className} onClick={props.onClick}>{props.children}{ props.completed && <IsCompleted/>}</MuiButton>
  );
}