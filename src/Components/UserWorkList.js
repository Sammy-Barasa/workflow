import React, { useContext,useEffect } from 'react'
// import { Button } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import { List,Icon } from 'semantic-ui-react'
import SingleWorkItem from "./SingleWorkItem"
import FloatingActionButton from "./FloatingActionButton"
import ListSkeleton from "../Utils/ListSkeleton"
import EmptyList from "../Utils/EmptyList"
import {useHistory} from 'react-router-dom'
import '../App.css'



const UserWorkList = () => {
    const { state } = useContext(StateContext)
    // console.log(state)
    const username = state.user.username
    const work= state.work.data.data
    const scope= state.work.data.scope
    const loading = state.work.loading
    const Loading = state.workupdate.loading
    const history = useHistory()
    useEffect(()=>{},[loading,Loading]) 
    // const workderror=work?.error
    // const searchChange=async (query)=>{
        // let filtered = work.filter((sinlework)=>{
        // return sinlework.topic.toLowerCase().includes(query.toLowerCase())||sinlework.person.toLowerCase().includes(query.toLowerCase())
        // })
        // setQuery(query)
        // console.log(filtered)
    // }
    return (
                <div >
                    <div className='user-worklist-header'>
                        <h3>My List of Works</h3>
                    <Icon name="search" size="large" onClick={(e)=>{
                        e.preventDefault()
                        history.push(`/users/${username}/search`)
                    }}/>
                    </div>
                    
                        {   
                            work?.length?
                                <div className='worklist-container'>
                                
                                    <List divided relaxed> 
                                        {                                                                                                                                                                               
                                            work.map((workItem,index)=>{
                                                return <SingleWorkItem workItem={workItem} index={index}/>
                                            }
                                            )
                                        }
                                    </List> 
                                </div>:scope?.hasNoList?<EmptyList list='work'/>:<ListSkeleton/>
                        } 
                            <FloatingActionButton/>
                </div>
            )
        }

export default UserWorkList
