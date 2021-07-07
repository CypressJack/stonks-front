import React, { useState } from "react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./App.scss";
import axios from "axios";

//Importing API Data hooks and Visual Mode Hooks
import useApiData from "./hooks/useApiData";
import useVisualMode from "./hooks/useVisualMode";

//Component Imports
import News from "./components/news/Index";
import TickerList from "./components/TickerList";
import Nav from "./components/Nav";
import TutorialPage from "./components/tutorials/TutorialPage";
import TutorialsList from "./components/tutorials";
import Profile from "./components/profile";
import Stock from "./components/stock";

// Override styling on any material component in this file
import "./globalStyleOverride.scss";
import { StylesProvider } from "@material-ui/core/styles";

//Example Tutorial Data
const title = "Metrics";
const para1 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit libero aut sit dicta voluptatum temporibus consequuntur esse ipsa qui distinctio a corporis, molestias ipsam, repudiandae reiciendis cupiditate accusantium ea provident! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis corrupti neque saepe temporibus ipsum impedit quia eius explicabo, doloribus incidunt aspernatur reiciendis et maxime minima magnam officia ex? Impedit, cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sit illo placeat vitae debitis libero molestiae eum voluptate quia error nostrum. Animi eveniet porro similique tenetur culpa assumenda quibusdam perferendis.";
const sub1 = "But How?";
const para2 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, cupiditate quam inventore provident voluptas expedita sequi, tempore ipsam consectetur incidunt animi vel! Maxime quasi sed dicta beatae, eos quas officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nemo facilis voluptatibus reiciendis amet. Reiciendis, quia laboriosam provident natus nihil repellat aliquid nesciunt sint cupiditate doloremque rem esse nemo quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et veniam obcaecati dignissimos beatae a libero in vitae fuga, sunt exercitationem nemo excepturi perspiciatis ea unde, voluptas adipisci. Inventore, autem.";

export default function App() {
  const { state, setState } = useApiData();
  const { mode, transition } = useVisualMode("showstocks");
  const [search, setSearch] = useState("");

  // console.log("users", state.users.users)
  // console.log("transacts", state.transactions.transactions)
  // console.log("tutorials", state.tutorials.tutorials)
  // console.log("owned stocks", state.owned.owned)

  const func = function (symbol) {
    let resultsObj = {};

    for (const stock of state.stocks.stocks) {
      if (stock.symbol === symbol) {
        resultsObj.stockData = stock;
      }
    }

    return axios
      .get(`/api/ticker-prices/${symbol}`)
      .then((data) => {
        axios.get(`/api/all-history/${symbol}`).then((historyData) => {
          axios
            .get(`/api/company-data/${symbol}`)
            .then((companyHistory) => {
              resultsObj.history = historyData.data;
              resultsObj.prices = data.data;
              resultsObj.company = companyHistory.data.companyData;
            })
            .then(() => {
              axios.get(`/api/30-history/${symbol}`).then((data) => {
                resultsObj.month = data.data;
              });
            }).then(()=> {
              axios.get(`/api/oneday-history/${symbol}`).then((day)=> {
                resultsObj.day = day.data
                setState((prev) => ({ ...prev, singleStock: resultsObj }));
                transition("showstocks-single");
              })
            })
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StylesProvider injectFirst>
      <div className="App">
        <div className="app-top-half">
          {mode === "showprofile" && (
            <Profile
              transactions={state.transactions}
              stocks={state.stocks}
              crypto={state.crypto}
              owned={state.owned.owned}
            />
          )}
          {mode === "showtutorials" && (
            <TutorialsList
              onClick={() => transition("showtutorials-individual")}
            />
          )}
          {mode === "showtutorials-individual" && (
            <TutorialPage
              title={title}
              paragraph1={para1}
              subtitle1={sub1}
              paragraph2={para2}
            />
          )}
          {mode === "showstocks" && (
            <TickerList
              stocks={state.stocks}
              crypto={state.crypto}
              search={search}
              searchState={setSearch}
              onClick={func}
            />
          )}
          {mode === "shownews" && (
            <News news={state.news.allnews} yourNews={state.yourNews} />
          )}
          {mode === "showstocks-single" && (
            <Stock data={state.singleStock} owned={state.owned.owned} />
          )}
        </div>
        <Nav
          profileClick={() => transition("showprofile")}
          tutorialClick={() => transition("showtutorials")}
          newsClick={() => transition("shownews")}
          searchClick={() => transition("showstocks")}
        />
      </div>
    </StylesProvider>
  );
}
