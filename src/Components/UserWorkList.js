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
import SearchIcon from '@material-ui/icons/Search';
import '../App.css'



const UserWorkList = (props) => {
    const { state } = useContext(StateContext)
    // console.log(state)
    const username = state.user.username
    const work= state.work.data.data
    const scope= state.work.data.scope
    const loading = state.work.loading
    const Loading = state.workupdate.loading
    const history = useHistory()
    useEffect(()=>{},[loading,Loading]) 
    
    return (
                <div >
                    <div className='user-worklist-header'>
                        <h3>My List of Works</h3>
                    
                    <IconButton color="default" aria-label="go to search page" component="span" onClick={(e)=>{
                        e.preventDefault()
                        history.push(`/users/${username}/search`)}}>
                        <SearchIcon />
                    </IconButton>

                    </div>
                    
                        {   
                            // work?.length?
                            //     <div className='worklist-container'>
                                
                            //         <List divided relaxed> 
                            //             {                                                                                                                                                                               
                            //                 work.map((workItem,index)=>{
                            //                     return <SingleWorkItem workItem={workItem} index={index}/>
                            //                 }
                            //                 )
                            //             }
                            //         </List> 
                            //     </div>:scope?.hasNoList?<EmptyList list='work'/>:<ListSkeleton/>

                            loading?<ListSkeleton/>:scope?.hasNoList?<EmptyList list='work'/>:
                            
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
