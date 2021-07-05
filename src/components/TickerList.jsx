import React from "react";
import TickerListItem from "./TickerListItem";
import SearchBar from "./SearchBar";
import Slide from '@material-ui/core/Slide';
import "./TickerList.scss"

export default function TickerList(props) {

  let composeTickerItems;

  //Function to sort and filter popular tickers
  const popularStocks = function(stock1, stock2) {
    if(stock1.volume < stock2.volume){
      return -1
    }
    if(stock1.volume > stock2.volume){
      return 1
    }
    return 0;
  }

  const popStocks = function(stocks) {
    stocks.sort(popularStocks);
    return stocks.slice(0,50)
  }
  
  if(props.search==="" && props.stocks.stocks){
    composeTickerItems = popStocks(props.stocks.stocks).map(ticker => {
      if ((ticker.name).toLowerCase().startsWith(props.search) || (ticker.symbol).startsWith((props.search).toUpperCase())){
        return (
          <TickerListItem
          onClick={props.onClick}
          key={ticker.symbol}
          name={ticker.name}
          symbol={ticker.symbol}
          pctChange={ticker.pctchange}
          lastSale={ticker.lastsale}
          />
        );
      }
    });
  }
  else if (props.stocks.stocks){
    composeTickerItems = props.stocks.stocks.map(ticker => {
      if ((ticker.name).toLowerCase().startsWith(props.search) || (ticker.symbol).startsWith((props.search).toUpperCase())){
        return (
          <TickerListItem
          onClick={props.onClick}
          key={ticker.symbol}
          name={ticker.name}
          symbol={ticker.symbol}
          pctChange={ticker.pctchange}
          lastSale={ticker.lastsale}
          />
        );
      }
    });
  } 

  return (
      <section>
        <SearchBar searchState={props.searchState} search={props.search}/>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <ul className="ticker-list">{composeTickerItems}</ul>
        </Slide>
      </section>
  );
}