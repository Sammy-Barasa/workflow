import React from 'react'
import { Route, Redirect,useLocation } from "react-router-dom";
import Auth from "../Utils/Auth"

export const  ProtectedRoute=({component:Component,...rest})=>{

    const location = useLocation()

    return(<Route
            {...rest}
            render={(props) => (
                 Auth.isAuthenticated()===true?(
                    <Component {...props}/>)
                    : (<Redirect push to={{
                        pathname: "/login",
                        state: { from:location }
                    }}/>))
            }/>)
}

