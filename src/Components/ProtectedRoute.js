import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Auth from "../Utils/Auth"

export const  ProtectedRoute=({path,component:Component,...rest})=>(
        <Route
            path={path}
            render={(props) => (
                 Auth.isAuthenticated()?(
                    <Component {...props}/>)
                    : (<Redirect to={{
                        pathname: "/login",
                        state: { from:props.location }
                    }}/>))
            }/>
    
)

