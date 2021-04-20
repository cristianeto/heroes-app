import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
