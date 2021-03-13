import React, { useEffect,useContext,useState } from 'react'
import { userWork } from '../API/api'
// import { Button } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
// import { useHistory } from "react-router-dom"
import { List,Icon } from 'semantic-ui-react'
import { withRouter,Link } from "react-router-dom"
import '../App.css'


const UserWorkList = () => {
    const { state, dispatch } = useContext(StateContext)
    const [workdata,setWorkdata]=useState([])
    const user = state.user
    const work = state.work
    // const history=useHistory()
    useEffect(() => {
        userWork(user.id)(dispatch)
    },[dispatch, user.id])
    useEffect(() => {
        console.log(state)
        setWorkdata(work?.data)
        // console.log(workdata)
    },[dispatch, work,state,workdata])
    // const handleClick = (e)=>{
    //     history.push(`/${user.id}`)
    // }
    
    return (
        <div >
            <h1>My Work list</h1>
            {workdata?<div className='worklist-container'>
            
            {/* <Button  primary onClick={handleClick}>Admin</Button> */}
                <List relaxed> 
                    {                                                                                                                                                                               
                        workdata[0]?.map((workItem,index)=>{
                            return <List.Item key={index}>
                                    <div className="container">
                                        <div className="row-header">
                                            <div className="list-header-left">
                                                
                                                    <List.Icon name='sticky note' size='large'color='olive' verticalAlign='middle' />
                                            </div>
                                            <div className="list-header-center" >
                                                    <List.Content>
                                                        <List.Header>
                                                            <Link to={`/works/${workItem.id}/show`}>
                                                                {workItem.topic}
                                                            </Link>
                                                        </List.Header>
                                                    </List.Content>
                                                
                                            </div>
                                            <div className="list-header-right">
                                               
                                                <div>
                                                    { workItem.cancelled?<Icon name='check square'  color='green' size="small"/>:""}
                                                      
                                                       { workItem.cancelled?<p> Cancelled </p>:""}
                                                </div>
                                                       
                                                <div>
                                                    {workItem.completed?<Icon name='check square'  color='green' size="small"/>:<Icon name='cancel'  color='red' size="small"/>}
                                                    <p> Completed </p>
                                                </div>
                                                        
                                                <div>
                                                        {workItem.paid?<Icon name='check square'  color='green' size="small"/>:<Icon name='cancel'  color='red' size="small"/>}
                                                   
                                                        <p> Paid  </p>
                                                </div>
                                                        
                                                  
                                                
                                            </div>
                                        </div>
                                        <div className="list-body">
                                            
                                                <div className="list-body-left">
                                                    <List.Content>
                                                        <List.Description as='h4'>{`Date assigned:   `}</List.Description>
                                                        <List.Description as='h5'>{workItem.date}</List.Description>
                                                        <List.Description as='p'>{`Type of work: ${workItem.type_of_work}`}</List.Description>
                                                    </List.Content> 
                                                </div>
                                                <div className="list-body-bottom">
                                                    <List.Content>
                                                        <List.Description as='p'>{`Assigned by:`}</List.Description>
                                                        <List.Description>{` ${workItem.person}`}</List.Description> 
                                                    </List.Content> 
                                                </div>

                                                <div className="list-body-right">
                                                   <List.Content>
                                                    <List.Description as='h4'>Work description: </List.Description>
                                                    <List.Description >{`${workItem.number_of_words} number of words, `}</List.Description>
                                                    <List.Description >{`${workItem.pages} pages`}</List.Description>
                                                   </List.Content>
                                                </div>
                                                
                                        </div>
                                    </div>
                                </List.Item>}
                        )
                    }
                </List> 
            </div>:"loading...." } 
            
           
        </div>
    )
}

export default withRouter(UserWorkList)
