import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Player from '../Player/Player';
import Registration from '../Registration/Registration';

const fakeAuth = {
    isAuthenticated: false
};


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
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
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
                    <Route path="/login" render={() => { fakeAuth.isAuthenticated = true; return <div>I am logged</div> }} />
                    <PrivateRoute > <div> admin page</div></PrivateRoute>
                    <Route path="*">
                        <div>oups ! I  did it again ...</div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter >;

    }
}

const PrivateRoute = (props: any) => <Route
    render={({ location }) =>
        fakeAuth.isAuthenticated ? (
            props.children
        ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                />
            )
    }
/>
