import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/products">
                <Layout>
                  <Category />
                </Layout>
              </Route>
              <Route path="/product/:id">
                <Layout>
                  <Product />
                </Layout>
              </Route>
              <Route path="/cart">
                <Layout>
                  <Cart />
                </Layout>
              </Route>
              <Route path="/checkout">
                <Layout>
                  <Checkout />
                </Layout>
              </Route>
              <Route path="/">
                <Layout>
                  <Home />
                </Layout>
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default App;
