import React from 'react'
import { Route, Redirect,useLocation } from "react-router-dom";
import Auth from "../Utils/Auth"

export const  ProtectedRoute=({component:Component,...rest})=>{

    const location = useLocation()
    const token=localStorage.getItem("token")

    return(<Route
            {...rest}
            render={(props) => (
                 token&&Auth.isAuthenticated()?(
                    <Component {...props}/>)
                    : (<Redirect push to={{
                        pathname: "/login",
                        state: { from:location }
                    }}/>))
            }/>)
}

