import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Auth from "../Utils/Auth"

export const  ProtectedRoute=(props)=>(
        <Route
            path={props.path}
            render={(...data) => (
                 Auth.isAuthenticated()?(
                    <props.component {...data}/>)
                    : (<Redirect to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}/>))
            }/>
    
)

