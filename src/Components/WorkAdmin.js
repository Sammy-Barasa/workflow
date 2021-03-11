import React from 'react'
import { Admin, Resource,EditGuesser } from 'react-admin';
// import { WorkList } from "./WorkList"
import  WorkShow  from "./WorkShow"
// import  WorkEdit  from "./WorkEdit"
// import jsonapiClient from "ra-jsonapi-client";
// import simpleRestProvider from 'ra-data-simple-rest';
import { withRouter } from "react-router-dom"
import dataProvider from '../Utils/dataProvider'
// import StateContext from '../Context/stateContext';


const WorkAdmin = ({params}) => {
    
   
    
    // edit={WorkEdit} update={WorkUpdate} 
    // <Resource name="work" list={ListGuesser} edit={WorkEdit} show={WorkShow}/>
    return (
        <Admin>
            {

                dataProvider.getOne('works',params.id).then((data)=>{
                    return <Resource name="works" edit={EditGuesser} show={WorkShow}/>
                })
            }
        </Admin>
    )
}

export default withRouter(WorkAdmin)
