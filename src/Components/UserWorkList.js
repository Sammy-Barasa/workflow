import React, { useEffect,useContext,useState } from 'react'
import { userWork } from '../API/api'
// import { Button } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
// import { useHistory } from "react-router-dom"
import { List,Statistic,Icon } from 'semantic-ui-react'
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
        <div>
            {workdata?<div>
            <h1>My Work list</h1>
            {/* <Button  primary onClick={handleClick}>Admin</Button> */}
                <List divided relaxed> 
                    {                                                                                                                                                                               
                        workdata[0]?.map((workItem,index)=>{
                            return <List.Item key={index}>
                                    <div className="container">
                                        <div className="row-header">
                                            <div className="list-header-left">
                                                
                                                    <List.Icon name='github' size='small' verticalAlign='middle' />
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
                                               
                                                <Statistic.Group size="mini">
                                                    <Statistic>
                                                        <Statistic.Value>
                                                       { workItem.cancelled?<Icon name='check square'  color='green' size="tiny"/>:""}
                                                       </Statistic.Value>
                                                       { workItem.cancelled?<p>Cancelled</p>:""}
                                                    </Statistic>
                                                    <Statistic>
                                                        <Statistic.Value>
                                                        {workItem.completed?<Icon name='check square'  color='green' size="tiny"/>:<Icon name='cancel'  color='red' size="tiny"/>}
                                                       </Statistic.Value>
                                                        <p>Completed</p>
                                                    </Statistic>
                                                
                                                    <Statistic>
                                                        <Statistic.Value>
                                                        {workItem.paid?<Icon name='check square'  color='green' size="tiny"/>:<Icon name='cancel'  color='red' size="tiny"/>}
                                                       </Statistic.Value>
                                                        <p>Paid</p>
                                                    </Statistic>                                                   
                                                </Statistic.Group>
                                                
                                            </div>
                                        </div>
                                        <div className="list-body">
                                            
                                                <div className="list-body-left">
                                                    <List.Content>
                                                        <List.Description as='h5'>{`Date assigned: ${workItem.date}`}</List.Description>
                                                        <List.Description as='p'>{`Type of work: ${workItem.type_of_work}`}</List.Description> 
                                                        <List.Description as='p'>{`Assigned by: ${workItem.person}`}</List.Description> 
                                                    </List.Content> 
                                                </div>

                                                <div className="list-body-right">
                                                   <List.Content>
                                                    <List.Description as='h4'>Work description: </List.Description>
                                                    <List.Description >{`${workItem.number_of_words} number of words, ${workItem.pages} pages`}</List.Description>
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
