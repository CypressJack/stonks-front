import { useState, useEffect } from "react";
const axios = require("axios");

export default function useApiData() {
  //Creating State
  const [state, setState] = useState({
    users: [],
    stocks: [],
    tutorials: [],
    transactions: [],
    news: [],
    crypto: [],
    owned: [],
    search: ""
  });

  //Initial Axios Call to API// All Tokens are hard coded for now
  useEffect(() => {

    const findNews = (ticker) => {
      return axios.get(`/api/single-news/${ticker}`).then((data) => {
        return data.data.results;
      })
    }

    const yourNews = async function (ownedTickers) {
      let yourArticles = [];
      for (const ticker of ownedTickers.owned) {
        const data = await findNews(ticker.symbol);
        if (data.length > 0){
          yourArticles.push(data)
        }
      }
      
      setState((prev) => ({
        ...prev,
        yourNews: yourArticles
      }))
    };

    Promise.all([
      axios.default.get(
        `/api/all-stocks`
      ),
      axios.default.get(
        `/api/users`
      ),
      axios.default.get(
        '/api/transactions'
      ),
      axios.default.get(
        '/api/tutorials'
      ),
      axios.default.get(
        '/api/all-news'
      ),
      axios.default.get(
        `/api/crypto-all`
      ),
      axios.default.get(
        `/api/owned-stocks`
      )
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        stocks: all[0].data,
        users: all[1].data,
        transactions: all[2].data,
        tutorials: all[3].data,
        news: all[4].data,
        crypto: all[5].data,
        owned: all[6].data,
        yourNews: yourNews(all[6].data)
      }));
    }).then(() => {
      
    })
  }, []);

  const setSearch = (string) => {
    setState((prev)=> ({...prev,search: string}))
  }

  return { state, setState, setSearch };
}
