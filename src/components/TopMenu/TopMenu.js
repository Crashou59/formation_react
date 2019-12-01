
import React from 'react';
import Player from './../Player/index';
import Registration from '../Registration';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class TopMenu extends React.Component {

    render() {
        return <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/players">Players</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <div>Coucou !!</div>
                    </Route>
                    <Route path="/players">
                        <Player />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter >;

    }
}