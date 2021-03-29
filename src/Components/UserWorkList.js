import React, { useContext,useEffect } from 'react'
// import { Button } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import { List } from 'semantic-ui-react'
import UserStatistic from "./UserStatistic"
import SingleWorkItem from "./SingleWorkItem"
import FloatingActionButton from "./FloatingActionButton"
import '../App.css'


const UserWorkList = () => {
    const { state } = useContext(StateContext)
    // const [workdata,setWorkdata]=useState([])
    // const [query,setQuery]=useState("")
    // console.log(state)
    const work= state.work.data.data
    const stats=state.work.data.stats
    // const scope= state.work.data.scope
    const persons=state.persons.data.data
    const loading = state.work.loading
    const Loading = state.workupdate.loading
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
                    <h3>My Summary</h3>
                    <div className='worklist-container'>
                        {/* {workerror?<div>{workerror.statusText}</div>:""} */}
                            {
                                work?.length?<UserStatistic stats={stats} persons={persons}/>:"loading ..."
                            }    
                        
                    </div>
                    <h3>My List of Works</h3>
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
                                </div>:"loading...."
                        } 
                            <FloatingActionButton/>
                </div>
            )
        }

export default UserWorkList
