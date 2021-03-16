import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Auth from "../Utils/Auth"

export function PublicRoute(props) {
    return (
        <Route
            exact
            path={props.path}
            render={(props) => {
                return Auth.isAuthenticated()=== true?props.children
                    : <Redirect to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}/>;
            } } />
    );
}