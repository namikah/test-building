import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Error from "../../../pages/error/Error";
import Home from "../../../pages/home/Home";
import Apartment from "../../apartment/Apartment";
import Building from "../../building/Building";
import ComingSoon from "../../comingSoon/ComingSoon";

function MainBoard() {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/buildings"} exact component={Building} />
      <Route path={"/apartments"} exact component={Apartment} />
      <Route path={"/coming_soon"} exact component={ComingSoon} />
      <Route path={"/error"} exact component={Error} />
      <Redirect to={"/error"} exact component={Error} />
    </Switch>
  );
}

export default MainBoard;
