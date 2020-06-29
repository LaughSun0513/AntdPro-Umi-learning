import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from "../App"

const BasicRouter = (
    <HashRouter>
        <Switch>
            <Route path="/index" />
            <Route exact path="/" component={App} />
        </Switch>
    </HashRouter>
)

export default BasicRouter;
