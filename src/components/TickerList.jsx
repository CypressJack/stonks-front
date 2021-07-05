import React, { useState } from "react";
import TickerListItem from "./TickerListItem";
import SearchBar from "./SearchBar";
import Slide from '@material-ui/core/Slide';
import "./TickerList.scss"
import Filters from "./Filters";

export default function TickerList(props) {
  const [filter, setFilter] = useState("")
  let composeTickerItems;

  //Functions to filter results
  const popularStocks = function(stock1, stock2) {
    if(stock1.volume < stock2.volume){
      return -1
    }
    if(stock1.volume > stock2.volume){
      return 1
    }
    return 0;
  };
  const popStocks = function(stocks) {
    stocks.sort(popularStocks);
    return stocks.slice(0,100)
  };

  const techStocks = function(stocks) {
    const tStocks = stocks.filter(stock => stock.sector === 'Technology')
    return tStocks;
  };

  const finStocks = function(stocks) {
    const fStocks = stocks.filter(stock => stock.sector === 'Finance')
    return fStocks;
  };

  const healthStocks = function(stocks) {
    const hStocks = stocks.filter(stock => stock.sector === 'Health Care')
    return hStocks;
  };
  
  const capitalGoodsStocks = function(stocks) {
    const cgStocks = stocks.filter(stock => stock.sector === "Capital Goods")
    return cgStocks;
  };

  const safestStock = function(stock1, stock2){
    let s1 = Math.abs(parseFloat(stock1.pctchange))
    let s2 = Math.abs(parseFloat(stock2.pctchange))
    if(s1 < s2){
      return -1
    }
    if(s1 > s2){
      return 1
    }
    return 0;
  };
  
  const leastVol = function(stocks) {
    stocks.sort(safestStock)
    return stocks.slice(0,100)
  };
  
  const riskyStock = function(stock1, stock2) {
    let s1 = Math.abs(parseFloat(stock1.pctchange))
    let s2 = Math.abs(parseFloat(stock2.pctchange))
    if(s1 > s2) {
      return -1
    }
    if(s1 < s2) {
      return 1
    }
    return 0;
  };
  
  const mostVol = function(stocks) {
    stocks.sort(riskyStock)
    return stocks.slice(0,100)
  };

  const commodities = function(stocks) {
    const comStocks = stocks.filter(stock => stock.industry === "Precious Metals" || stock.industry === "Oil & Gas Production")
    return comStocks;
  }

  const commonStocks = function(stocks) {
    const common = stocks.filter(stock => stock.name.match(/Common Stock/))
    return common;
  }

  //Set Render for Crypto
  if((props.crypto.allcrypto && filter === "Crypto")){
    composeTickerItems = props.crypto.allcrypto.map(ticker => {
      if ((ticker.name).toLowerCase().startsWith(props.search) || (ticker.symbol).startsWith((props.search).toUpperCase())){
        return (
          <TickerListItem
          onClick={props.onClick}
          key={ticker.symbol}
          name={ticker.name}
          symbol={ticker.symbol}
          pctChange={ticker.quote.USD.percent_change_24h}
          lastSale={ticker.quote.USD.price}
          />
        );
      }
    });
  }
  //Set render for common stocks
  if((props.stocks.stocks && filter === "Stocks")){
    composeTickerItems = commonStocks(props.stocks.stocks).map(ticker => {
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
  //Set render for commodities
  if((props.stocks.stocks && filter === "Commodities")){
    composeTickerItems = commodities(props.stocks.stocks).map(ticker => {
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
  //Set render for least volatile stocks
  if((props.stocks.stocks && filter === "Least Volatile")){
    composeTickerItems = leastVol(props.stocks.stocks).map(ticker => {
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
  //Set Render for most volatile
  if((props.stocks.stocks && filter === "Most Volatile")){
    composeTickerItems = mostVol(props.stocks.stocks).map(ticker => {
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
  //Set render for health stocks
  if((props.stocks.stocks && filter === "Health Care")){
    composeTickerItems = healthStocks(props.stocks.stocks).map(ticker => {
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
  //set render for capital goods
  if((props.stocks.stocks && filter === "Capital Goods")){
    composeTickerItems = capitalGoodsStocks(props.stocks.stocks).map(ticker => {
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
  //Sets the render for Finance Stocks
  if((props.stocks.stocks && filter === "Finance")){
    composeTickerItems = finStocks(props.stocks.stocks).map(ticker => {
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
  //Sets the render to the default filter
  if(props.stocks.stocks && filter ===""){
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
  //Sets the render for Tech Stocks
  if((props.stocks.stocks) && filter === 'Technology'){
    composeTickerItems = techStocks(props.stocks.stocks).map(ticker => {
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
  // else if (props.stocks.stocks){
  //   composeTickerItems = props.stocks.stocks.map(ticker => {
  //     if ((ticker.name).toLowerCase().startsWith(props.search) || (ticker.symbol).startsWith((props.search).toUpperCase())){
  //       return (
  //         <TickerListItem
  //         onClick={props.onClick}
  //         key={ticker.symbol}
  //         name={ticker.name}
  //         symbol={ticker.symbol}
  //         pctChange={ticker.pctchange}
  //         lastSale={ticker.lastsale}
  //         />
  //       );
  //     }
  //   });
  // } 

  return (
      <section>
          <SearchBar searchState={props.searchState} search={props.search}/>
          <Filters onStockClick={setFilter}/>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <ul className="ticker-list">{composeTickerItems}</ul>
        </Slide>
      </section>
  );
}