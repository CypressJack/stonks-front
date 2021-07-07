import React, {useState} from "react";
import "./Filters.scss";
export default function Filters(props) {

  const [selected, setSelected] = useState((props.onStockClick && 'Popular') || (props.onNewsClick && "Today's News"));
  const [selectedColor] = useState('--selected-filter');
  const [unSelectedColor] = useState('--unselected-filter');
  // const [currentSelection, setSelection] = useState(props.selection || null);
  // const [history, setHistory] = useState([]);
  
  // currentSelection && currentSelection.classList.add("--selected-filter");
  const POP = 'Popular';
  const CRYPTO = 'Crypto';
  const TECH = 'Technology';
  const FIN = 'Finance';
  const HECA = 'Health Care';
  const CAGO = 'Capital Goods';
  const LEVO = 'Least Volatile';
  const MOVO = 'Most Volatile';
  const COMM = 'Commodities';
  const STOK = 'Stocks';
  const TONE = "Today's News";
  const YONE = 'Your News';

  const select = function(button) {
    setSelected(button);
  };
  // const addHistory = function(event) {
  //   setSelection(event.target)
  //   setHistory(prev => [...prev, currentSelection]);
  // };
  
  // history.length >= 2 && history[history.length - 1].classList.remove("--selected-filter");

  return (
    <div className={"filter-outer"}>
      <div className={"filter-list"}>
        {props.onNewsClick && <button onClick={() => {select(TONE); props.onNewsClick("All")}} className={`filter-button ${selected === TONE ? selectedColor : unSelectedColor}`}>{TONE}</button>}
        {props.onNewsClick && <button onClick={() => {select(YONE); props.onNewsClick("Your News")}} className={`filter-button ${selected === YONE ? selectedColor : unSelectedColor}`}>{YONE}</button>}
        {props.onStockClick && <button onClick={() => {select(POP); props.onStockClick('') }} className={`filter-button ${selected === POP ? selectedColor : unSelectedColor}`}>{POP}</button>}
        {props.onStockClick && <button onClick={() => {select(STOK); props.onStockClick('Stocks')}} className={`filter-button ${selected === STOK ? selectedColor : unSelectedColor}`}>{STOK}</button>}
        {props.onStockClick && <button onClick={() => {select(CRYPTO); props.onStockClick('Crypto')}} className={`filter-button ${selected === CRYPTO ? selectedColor : unSelectedColor}`}>{CRYPTO}</button>}
        {props.onStockClick && <button onClick={() => {select(TECH); props.onStockClick('Technology')}} className={`filter-button ${selected === TECH ? selectedColor : unSelectedColor}`}>{TECH}</button>}
        {props.onStockClick && <button onClick={() => {select(FIN); props.onStockClick('Finance')}} className={`filter-button ${selected === FIN ? selectedColor : unSelectedColor}`}>{FIN}</button>}
        {props.onStockClick && <button onClick={() => {select(HECA); props.onStockClick('Health Care')}} className={`filter-button ${selected === HECA ? selectedColor : unSelectedColor}`}>{HECA}</button>}
        {props.onStockClick && <button onClick={() => {select(CAGO); props.onStockClick('Capital Goods')}} className={`filter-button ${selected === CAGO ? selectedColor : unSelectedColor}`}>{CAGO}</button>}
        {props.onStockClick && <button onClick={() => {select(LEVO); props.onStockClick('Least Volatile') }} className={`filter-button ${selected === LEVO ? selectedColor : unSelectedColor}`}>{LEVO}</button>}
        {props.onStockClick && <button onClick={() => {select(MOVO); props.onStockClick('Most Volatile')}} className={`filter-button ${selected === MOVO ? selectedColor : unSelectedColor}`}>{MOVO}</button>}
        {props.onStockClick && <button onClick={() => {select(COMM); props.onStockClick('Commodities')}} className={`filter-button ${selected === COMM ? selectedColor : unSelectedColor}`}>{COMM}</button>}
      </div>
    </div>
  );
};