import React from "react";
import classNames from "classnames";
import "./Nav.scss";
import Search from "@material-ui/icons/Search";
import Settings from "@material-ui/icons/Settings";
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
    type = <Settings/>
  } else {
    type = <ArtTrackRounded/>
  }
  const buttonClass = classNames(
    "nav-button",
    {"--selected": props.selected}
  )

  return (
    <button className={buttonClass} onClick={props.onSelect}>{type}</button>
  );
}