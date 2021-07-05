import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";

import Button from "../components/Button";
import Graph from "../components/graph/Graph";

const data = [
  { argument: 1, value: 10 },
  { argument: 3, value: 20 },
  { argument: 4, value: 30 },
  { argument: 5, value: 55 },
  { argument: 7, value: 45 },
  { argument: 8, value: 85 },
  { argument: 9, value: 100 },
];

storiesOf("Graph", module)
  .add("Base", () => (
    <Graph
    data={data}
    />
  ))
  .add("Range Selector", () => 
  <StylesProvider injectFirst>
    <Button onClick={action("Button Clicked!")}>
      Base
    </Button>
  </StylesProvider>)