import React, {useState} from "react";
import "./Nav.scss";
import NavButton from "./NavButton";

export default function Nav(props) {

    const [currentSelection, setSelection] = useState(props.selection || null);

  return (
    <nav className="nav-main">
      <NavButton selected={props.selected} account onClick={(event) => setSelection(event)}></NavButton>
      <NavButton nav={true} learn onClick={(event) => setSelection(event)}></NavButton>
      <NavButton nav={true} search onClick={(event) => setSelection(event)}></NavButton>
      <NavButton nav={true} onClick={(event) => setSelection(event)}></NavButton>
      <NavButton nav={true} settings onClick={(event) => setSelection(event)}></NavButton>
    </nav>
  );
}