import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Cursos from "../pages/Cursos";
import Homepage from "../pages/Homepage";
import Marketing from "../pages/Marketing";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/cursos" component={Cursos} />
      <Route exact path="/inicio" component={Homepage} />
      <Route exact path="/marketing" component={Marketing} />
    </Switch>
  );
};

export default Routes;
