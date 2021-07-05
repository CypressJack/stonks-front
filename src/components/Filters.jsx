import React, {useState} from "react";
import "./Filters.scss";
export default function Filters(props) {

  const [currentSelection, setSelection] = useState(props.selection || null);
  const [history, setHistory] = useState([]);
  
  currentSelection && currentSelection.classList.add("--selected-filter");

  const addHistory = function(event) {
    setSelection(event.target)
    setHistory(prev => [...prev, currentSelection]);
  };
  
  history.length >= 2 && history[history.length - 1].classList.remove("--selected-filter");

  return (
    <div className={"filter-outer"}>
      <div className={"filter-list"}>
        <button onClick={(event) => {addHistory(event); props.onClick('') }}>Popular</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Technology')}}>Technology</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Finance')}}>Finance</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Health Care')}}>Health Care</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Capital Goods')}}>Capital Goods</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Least Volatile') }}>Least Volatile</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Most Volatile')}}>Most Volatile</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Commodities')}}>Commodities</button>
        <button onClick={(event) => {addHistory(event); props.onClick('Stocks')}}>Stocks</button>
        {/* <button onClick={(event) => {addHistory(event); props.onClick('Crypto')}}>Crypto</button> */}
      </div>
    </div>
  );
};