import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./../home/home";
import Calculator from "./../calculator/calculator";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
      </Switch>
    </div>
  );
};

export default App;