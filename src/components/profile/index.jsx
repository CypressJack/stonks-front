import * as React from 'react';
import Profile from "../profile/index.jsx";
import BalanceHeader from "../BalanceHeader"
import "./Profile.scss";

export default function Profile() {

  return (
    <div>
      <BalanceHeader/>
      <Graph/>
    </div>
  )
};
