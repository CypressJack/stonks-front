import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StylesProvider } from "@material-ui/core/styles";

import Loading from '../components/loading/Loading';

storiesOf("Loading", module)
  .add("Loading", () => (
    <StylesProvider injectFirst><Loading/></StylesProvider>
  ));