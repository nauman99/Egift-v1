import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Landing from "./Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import Orders from "./Orders";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import CustomFooter from "./CustomFooter";

const promise = loadStripe(
  "pk_test_51HrKA2CTkSEvD69W9tEOpCdsPxWglAlqCZwYpqSFWLZskYwUSy55q14dWH4LhE0mdnU3DEH11ukRsGakWWlLb4sL00n2FZmhpP"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <ReactNotification />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
            <CustomFooter />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <CustomFooter />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
            <CustomFooter />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
            <CustomFooter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
