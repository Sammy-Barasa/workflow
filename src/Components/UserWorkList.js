import React, { useContext,useEffect } from 'react'
// import { Button } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import { List } from 'semantic-ui-react'
import SingleWorkItem from "./SingleWorkItem"
import FloatingActionButton from "./FloatingActionButton"
import ListSkeleton from "../Utils/ListSkeleton"
import EmptyList from "../Utils/EmptyList"
import {useHistory} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MenuAppOptions from './MenuAppOptions'
import HeaderRight from './HeaderRight'
import Cookies from "js-cookie";
import '../App.css'



const UserWorkList = (props) => {
    const { state,dispatch } = useContext(StateContext)
    // console.log(state)
    const loading = state.work.loading
    const refresh = state.user.tokens?.refresh||""

    useEffect(()=>{
        registerPeriodicTokenRefresh()
    },[])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        
        const registration = await navigator.serviceWorker.ready;
       
        if(registration){
           navigator.serviceWorker.controller.postMessage({
                type: "TOK",
                message: refresh
                // {'refresh':refresh,'csrf':Cookies.get("csrftoken")}
            })
            navigator.serviceWorker.controller.postMessage({
            type:"CSR",
            message:Cookies.get("csrftoken")
            // {'refresh':refresh,'csrf':}
        })
        }
  
    },[refresh])

    useEffect(()=>{
    },[loading]) 
    const username = state.user.username
    const work= state.work.data.data
    const scope= state.work.data.scope
    const user = state.user
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    const history = useHistory()
    // reference registration
    
    async function registerPeriodicTokenRefresh() {
        const registration = await navigator.serviceWorker.ready;
        // Request permission
        const status = await navigator.permissions.query({
        name: 'periodic-background-sync',
        });
        if (status.state === 'granted') {
            try {
                console.log('trying ...')
                await registration.periodicSync.register('refresh-token', {
                minInterval: 2 * 1000,
                // 24 * 60 * 60 * 1000,
                });
            } catch {
                console.log('Periodic Sync could not be registered!');
            }
        }
    }
    
    if('serviceworker' in navigator){
        navigator.serviceWorker.onmessage = (event)=>{
        if(event.data && event.data.type==='TOK'){
            localStorage.setItem('token',event.data.message)
        }
    }
    }

    
    return (
                <div className='App-body'>
                    <div className="App-header">
                        <div className='app-title'>
                            <h2>
                            WorkRecordsManager
                            </h2>
                        </div>
                        <div className="app-logout">
                            {user===null?"":mediaQuery.matches?<div><MenuAppOptions/></div>:<HeaderRight user={user} dispatch={dispatch}/>}
                        </div>
                    </div>
                    <div className='user-worklist-header'>
                        <div className='title-list-of-works'>
                            <h3>My List of Works</h3>
                        </div>
                        
                        <div className="list-search-icon">
                            <IconButton color="default" aria-label="go to search page" component="span" onClick={(e)=>{
                                e.preventDefault()
                                history.push(`/users/${username}/search`)}}>
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </div>
                    
                        {   

                            loading?<ListSkeleton/>:scope?.hasNoList?<EmptyList list='work'path='/works/create' width='100px' height='600px'/>:
                            
                            <div className='worklist-container'>
                                <List divided relaxed> 
                                    {                                                                                                                                                                               
                                        work.map((workItem,index)=>{
                                            return <SingleWorkItem workItem={workItem} index={index}/>
                                        }
                                        )
                                    }
                                </List> 
                            </div>
                        } 
                        <FloatingActionButton/>
                </div>
            )
        }

export default UserWorkList
