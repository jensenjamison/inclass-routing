import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Settings from "./components/Settings";
import React from 'react';

export default (

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/account/settings" component={Settings} />
      </Switch>
)