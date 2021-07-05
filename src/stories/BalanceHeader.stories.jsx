import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import BalanceHeader from "../components/BalanceHeader";

storiesOf("BalanceHeader", module)
  .add("Profile", () => (
    <BalanceHeader
      name='My Profile'
      value={11,750}
      change={[250, 750]}
      timeline={'Past Month'}
    />
  ))
  .add("Single Stock", () => (
    <BalanceHeader
    />
  ))