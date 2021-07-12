import React from "react";
import "./Nav.scss";
import Search from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/HelpOutline";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Learn from "@material-ui/icons/ImportContacts";
import ArtTrackRounded from "@material-ui/icons/ArtTrackRounded";

export default function NavButton(props) {
  let type;

  if (props.search) {
    type = <Search/>
  } else if (props.account) {
    type = <AccountCircle/>
  } else if (props.learn) {
    type = <Learn/>
  } else if (props.settings) {
    type = <HelpIcon/>
  } else {
    type = <ArtTrackRounded/>
  }

  return (
    <button className={props.className} onClick={props.onSelect}>{type}</button>
  );
}