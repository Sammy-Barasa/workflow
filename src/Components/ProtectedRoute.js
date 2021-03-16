import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Auth from "../Utils/Auth"

export const  ProtectedRoute=({component:Component,...rest})=>(
        <Route
            {...rest}
            component={(props) => (
                 Auth.isAuthenticated()?(
                    <Component {...props}/>)
                    : (<Redirect to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}/>))
            }/>
    
)

