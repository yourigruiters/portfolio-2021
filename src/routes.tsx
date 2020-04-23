import * as React from "react";
import App from "./app/index";

import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

export default Routes;
