import React, {useState} from "react";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import "./App.scss";

//Importing API Data hooks and Visual Mode Hooks
import useApiData from "./hooks/useApiData";
import useVisualMode from "./hooks/useVisualMode";

//Component Imports
import News from "./components/news/Index"
import TickerList from "./components/TickerList";
import Nav from "./components/Nav";
import TutorialPage from "./components/tutorials/TutorialPage";
import TutorialsList from "./components/tutorials";

// Override styling on any material component in this file
import "./globalStyleOverride.scss";
import { StylesProvider } from "@material-ui/core/styles";

//Example Tutorial Data
const title = "Metrics"
const para1 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit libero aut sit dicta voluptatum temporibus consequuntur esse ipsa qui distinctio a corporis, molestias ipsam, repudiandae reiciendis cupiditate accusantium ea provident! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis corrupti neque saepe temporibus ipsum impedit quia eius explicabo, doloribus incidunt aspernatur reiciendis et maxime minima magnam officia ex? Impedit, cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sit illo placeat vitae debitis libero molestiae eum voluptate quia error nostrum. Animi eveniet porro similique tenetur culpa assumenda quibusdam perferendis."
const sub1 = "But How?"
const para2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, cupiditate quam inventore provident voluptas expedita sequi, tempore ipsam consectetur incidunt animi vel! Maxime quasi sed dicta beatae, eos quas officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nemo facilis voluptatibus reiciendis amet. Reiciendis, quia laboriosam provident natus nihil repellat aliquid nesciunt sint cupiditate doloremque rem esse nemo quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et veniam obcaecati dignissimos beatae a libero in vitae fuga, sunt exercitationem nemo excepturi perspiciatis ea unde, voluptas adipisci. Inventore, autem."

export default function App() {
  const { state } = useApiData();
  const { mode, transition, back} = useVisualMode('showstocks')
  const [search, setSearch] = useState("");

  // console.log("users", state.users.users)
  // console.log("stocks", state.stocks.stocks)
  // console.log("transacts", state.transactions.transactions)
  // console.log("tutorials", state.tutorials.tutorials)
  // console.log("news", state.news.allnews)
  const func = function() {
    return
  }

  return (
    <StylesProvider injectFirst>
      <div className="App">
        <div className="app-top-half">
          {mode === 'showtutorials' && (<TutorialsList onClick={()=> transition('showtutorials-individual')}/>)}
          {mode==='showtutorials-individual' &&(<TutorialPage title={title} paragraph1={para1} subtitle1={sub1} paragraph2={para2}/>)}
          {mode === 'showstocks' && (<TickerList stocks={state.stocks} search={search} searchState={setSearch}onClick={func}/>)}
          {mode === 'shownews' && (<News news={state.news.allnews}/>)}
        </div>
        <Nav tutorialClick={() => transition('showtutorials')} newsClick={() => transition('shownews')} searchClick={()=> transition('showstocks')}/>
      </div>
    </StylesProvider>
  );
}
