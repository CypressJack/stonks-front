import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Graph from "../components/graph/Graph";

storiesOf("Graph", module)
  .add("Base", () => (
    <Graph
    />
  ));