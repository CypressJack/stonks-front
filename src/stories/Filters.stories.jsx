import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Filters from "../components/Filters"

storiesOf("Filters", module)
  .add("filter list", () => (
    <Filters
    
    />
  ));