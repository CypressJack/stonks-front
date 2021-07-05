import React from "react";
import TickerListItem from "./TickerListItem";
import SearchBar from "./SearchBar";
import Slide from '@material-ui/core/Slide';

export default function TickerList(props) {

  let composeTickerItems;

  if (props.stocks.stocks){
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
        <ul>{composeTickerItems}</ul>
        </Slide>
      </section>
  );
}