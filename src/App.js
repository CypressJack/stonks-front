import React from 'react';
import './App.scss';
// import apiFetch from "./hooks/apiFetch";
import TickerList from './components/TickerList';

import Button from "@material-ui/core/Button";

// Override styling on any material component in this file
import "./globalStyleOverride.scss";
import { StylesProvider } from "@material-ui/core/styles";

const axios = require("axios");

export default function App() {

  // const {state} = apiFetch();

  // console.log("users", state.users.users)
  // console.log("stocks", state.stocks.stocks)
  // console.log("transacts", state.transactions.transactions)
  // console.log("tutorials", state.tutorials.tutorials)
  // console.log("news", state.news.allnews)


  return (
    <StylesProvider injectFirst>
      <div className="App">
        <h1>Hi There!</h1>
        <Button>
          Test Button
        </Button>
      {/* <TickerList stocks={state.stocks} onClick={console.log("")}/> */}
     </div>
    </StylesProvider>
  );
}
