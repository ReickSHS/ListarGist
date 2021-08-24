import React from "react";
import * as routes from "./constants/routes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import HomeContainer from "./components/main";
import NotFound from "./components/NotFound";
import Users from "./components/users";

import MainLayout from "./layout";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path={routes.MAIN} component={HomeContainer} />
          <Route exact path={routes.USERS} component={Users} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
