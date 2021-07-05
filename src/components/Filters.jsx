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
        {props.onNewsClick && <button onClick={(event) => {addHistory(event); props.onNewsClick()}}>Today's News</button>}
        {props.onNewsClick && <button onClick={(event) => {addHistory(event); props.onNewsClick()}}>Your News</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('') }}>Popular</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Crypto')}}>Crypto</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Technology')}}>Technology</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Finance')}}>Finance</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Health Care')}}>Health Care</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Capital Goods')}}>Capital Goods</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Least Volatile') }}>Least Volatile</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Most Volatile')}}>Most Volatile</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Commodities')}}>Commodities</button>}
        {props.onStockClick && <button onClick={(event) => {addHistory(event); props.onStockClick('Stocks')}}>Stocks</button>}
      </div>
    </div>
  );
};