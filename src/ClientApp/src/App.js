import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Facade } from "./views/facade";
import { Home, AdminHistoryLog, Shop, Unknown, User } from "./pages";
import { Footer, Header } from "./components";
import "./custom.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Facade>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:id" component={User} />
          <Route path="/shop" component={Shop} />
          <Route path="/adminlog" component={AdminHistoryLog} />
        </Facade>
        <Footer />
      </>
    );
  }
}
