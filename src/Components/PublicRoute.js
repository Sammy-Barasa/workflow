import React,{useContext} from 'react'
import { Route, Redirect } from "react-router-dom";
import StateContext from '../Context/stateContext';
import Auth from "../Utils/Auth"




export const  PublicRoute=({component:Component,...rest})=>{

    const {state} = useContext(StateContext)

       return <Route
            {...rest}
            component={(props) => (
                 Auth.isAuthenticated()?
                    (<Redirect to={{
                        pathname: `/users/${state.user.username}`,
                    }}/>):(
                    <Component {...props}/>)
                    )
            }/>
    
        }