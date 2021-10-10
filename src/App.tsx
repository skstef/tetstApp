import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Main from "./components/Main/Main";

const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/search">
                <Main />
            </Route>

            <Route exact path="/details/:id">
                <div>Info</div>
            </Route>

            <Redirect to="/search" />
        </Switch>
    </BrowserRouter>
);
export default App;
