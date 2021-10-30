import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/category/:category">
          <Category />
        </Route>
        <Route path="/product/:id"></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
