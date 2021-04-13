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
import '../App.css'



const UserWorkList = (props) => {
    const { state } = useContext(StateContext)
    // console.log(state)
    const loading = state.work.loading


    useEffect(()=>{
    },[loading]) 
    const username = state.user.username
    const work= state.work.data.data
    const scope= state.work.data.scope
    const user = state.user
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    const history = useHistory()
    
    
    return (
                <div className='App-body'>
                    <div className="App-header">
                        <div className='app-title'>
                            <h2>
                            WorkRecordsManager
                            </h2>
                        </div>
                        <div className="app-logout">
                            {user===null?"":mediaQuery.matches?<div><MenuAppOptions/></div>:<HeaderRight user={user}/>}
                        </div>
                    </div>
                    <div className='user-worklist-header'>
                        <h3>My List of Works</h3>
                    
                    <IconButton color="default" aria-label="go to search page" component="span" onClick={(e)=>{
                        e.preventDefault()
                        history.push(`/users/${username}/search`)}}>
                        <SearchIcon />
                    </IconButton>

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
