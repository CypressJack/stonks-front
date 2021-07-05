import React, {useState} from "react";
import "./Nav.scss";
import NavButton from "./NavButton";

export default function Nav(props) {
  const [currentSelection, setSelection] = useState(props.selection || null);
  const [history, setHistory] = useState([]);
  
  currentSelection && currentSelection.classList.add("--selected");
  const addHistory = function(event) {
    setSelection(event.target)
    setHistory(prev => [...prev, currentSelection]);
  };

  history.length >= 2 && history[history.length - 1].classList.remove("--selected");

  return (
    <nav className="nav-main">
      <NavButton account onSelect={(event) => addHistory(event)}></NavButton>
      <NavButton learn onSelect={(event) => {addHistory(event); props.tutorialClick()}}></NavButton>
      <NavButton search onSelect={(event) => {addHistory(event); props.searchClick()}}></NavButton>
      <NavButton onSelect={(event) => {addHistory(event); props.newsClick()}}></NavButton>
      <NavButton settings onSelect={(event) => addHistory(event)}></NavButton>
    </nav>
  );
}