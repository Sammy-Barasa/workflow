import React ,{ useContext } from 'react'
import { Admin, Resource, fetchUtils, ListGuesser } from 'react-admin';
// import { WorkList } from "./WorkList"
// import  WorkShow  from "./WorkShow"
// import  WorkEdit  from "./WorkEdit"
import jsonapiClient from "ra-jsonapi-client";
// import simpleRestProvider from 'ra-data-simple-rest';
import Cookies from "js-cookie";
import { Redirect, useHistory } from "react-router-dom"
import StateContext from '../Context/stateContext';


const WorkAdmin = () => {
    
    const userToken = localStorage.getItem("token")
    const csrftoken = Cookies.get("csrftoken")
    const {state}= useContext(StateContext)
    const userId = state.user?.id
    const history = useHistory()
    
    const httpClient = (url, options = {}) => {
        if(!userToken && csrftoken){
           return <Redirect
                to={{
                    pathname: "/login",
                    state: { referrer: history.location }
                }}
            />
        }
        
        options.headers.set("X-Requested-With", "XMLHttpRequest");  
        options.headers.set("X-CSRFToken", `${csrftoken}`);
        options.headers.set("Authorization", `Bearer ${userToken}`);   
         
        
        let finalUrl = `${url}`;
        console.log(finalUrl)
        
         return fetchUtils.fetchJson(finalUrl, options);
        }

    
    // edit={WorkEdit} update={WorkUpdate} 
    // <Resource name="work" list={ListGuesser} edit={WorkEdit} show={WorkShow}/>
    return (
        <Admin dataProvider={jsonapiClient('http://127.0.0.1:8000',httpClient)}>
            
            <Resource name={`users/${userId}`} list={ListGuesser}/>
         
        </Admin>
    )
}

export default WorkAdmin
