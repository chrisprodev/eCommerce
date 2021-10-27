import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
