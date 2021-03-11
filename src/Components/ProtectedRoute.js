import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Auth from "../Utils/Auth"

export function ProtectedRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {

                return Auth.isAuthenticated() === true ? children
                    : <Redirect to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }} />;
            } } />
    );
}

