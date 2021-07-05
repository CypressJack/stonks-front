import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import BalanceHeader from "../components/BalanceHeader";

storiesOf("BalanceHeader", module)
  .add("Profile Positive", () => (
    <BalanceHeader
      name='My Profile'
      value={750}
      startValue={250}
      timeline={'Past Month'}
    />
  ))
  .add("Profile Negative", () => (
    <BalanceHeader
      name='My Profile'
      value={250}
      startValue={750}
      timeline={'Past Month'}
    />
  ))
  .add("Single Stock", () => (
    <BalanceHeader
    />
  )) 