import React, {useState} from "react";
import Button from "../Button";
import "./StockForm.scss";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

export default function StockForm(props) {
  const [amount, setAmount] = useState("");

  const buyStock = (amount, cost) => {
    console.log("buy pressed", props.symbol)
    axios.post('/api/buy-stock', {
      cost,
      amount,
      symbol: `${props.symbol}`,
      type: true,
      user_id: 1
    })
    .then(()=>{
      
    })
  }

  return (
    <form className={"stock-form"}>
      <TextField
      className={"amount-input"}
      label={"Enter amount to buy or sell."}
      value={amount}
      onChange={event => setAmount(event.target.value)}
      variant={'outlined'}
      />
      <TextField
      className={"amount-input"}
      label={"Cost in dollars."}
      value={`$${amount * props.currentPrice}`}
      onChange={event => setAmount(event.target.value)}
      variant={'outlined'}
      />
      <div className={"button-container"}>
        <span className={"button"} onClick={()=>{buyStock(amount,props.currentPrice)}}><Button>Buy</Button></span>
        <span className={"button"} onClick={props.onClick}><Button sell>Sell</Button></span>
      </div>
    </form>
  );
};