import React, {useState} from "react";
import "./Nav.scss";
import NavButton from "./NavButton";

export default function Nav(props) {
  const [selected, setSelected] = useState("");
  const [selectedColor] = useState('--selected-nav');
  const [unselectedColor] = useState('--unselected-nav');

  const ACC = "Account";
  const LRN = "Learn";
  const SRCH = "Search";
  const NEWS = "News";
  const STNGS = "Settings";

  const select = function(button) {
    setSelected(button);
  };


  return (
    <nav className="nav-main">
      <NavButton account onSelect={() => {select(ACC); props.profileClick()}} className={`nav-button ${selected === ACC ? selectedColor : unselectedColor}`}></NavButton>
      <NavButton learn onSelect={() => {select(LRN); props.tutorialClick()}} className={`nav-button ${selected === LRN ? selectedColor : unselectedColor}`}></NavButton>
      <NavButton search onSelect={() => {select(SRCH); props.searchClick()}} className={`nav-button ${selected === SRCH ? selectedColor : unselectedColor}`}></NavButton>
      <NavButton onSelect={() => {select(NEWS); props.newsClick()}} className={`nav-button ${selected === NEWS ? selectedColor : unselectedColor}`}></NavButton>
      <NavButton settings onSelect={() => select(STNGS)} className={`nav-button ${selected === STNGS ? selectedColor : unselectedColor}`}></NavButton>
    </nav>
  );
}