import React from "react";
import Search from "@material-ui/icons/Search"
import Settings from "@material-ui/icons/Settings"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Learn from "@material-ui/icons/ImportContacts"
import ArtTrackRounded from "@material-ui/icons/ArtTrackRounded";
import "./Nav.css";
import Button from "./Button";
export default function Nav(props) {
  let isSelected = "";

  if(props.selected) {
    isSelected = "selected";
  }

  return (
    <nav className="nav-main">
      <Button selected={props.selected}><AccountCircle onClick={props.onClick}/></Button>
      <Button><Learn onClick={props.onClick}/></Button>
      <Button><Search onClick={props.onClick}/></Button>
      <Button><ArtTrackRounded onClick={props.onClick}/></Button>
      <Button><Settings onClick={props.onClick}/></Button>
    </nav>
  );
}