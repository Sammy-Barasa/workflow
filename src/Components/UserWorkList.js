import React, { useEffect,useContext,useState } from 'react'
import { userWork } from '../API/api'
import { Button } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import { useHistory,Redirect } from "react-router-dom"
import { List,Statistic,Icon } from 'semantic-ui-react'

const UserWorkList = () => {
    const { state, dispatch } = useContext(StateContext)
    const [workdata,setWorkdata]=useState([])
    const user = state.user
    const work = state.work
    const history=useHistory()
    useEffect(() => {
        userWork(user.id)(dispatch)
    },[dispatch, user.id])
    useEffect(() => {
        // console.log(state)
        setWorkdata(work?.data)
        // console.log(workdata)
    },[dispatch, work,state,workdata])
    const handleClick = (e)=>{
        history.push(`/${user.id}`)
    }

    const handleLogOut= (e)=>{
        localStorage.removeItem("token");
       
       return <Redirect
                to={{
                    pathname: "/login",
                    state: { referrer: history.location }
                }}/>
    }
    
    return (
        <div>
            {workdata?<div>
            <h1>Work list</h1>
            <Button  primary onClick={handleClick}>Admin</Button>
            <Button  color="red" onClick={handleLogOut}>LogOut</Button>
                <List divided relaxed> 
                    {
                        workdata[0]?.map((workItem,index)=>{
                            return <List.Item key={index}>
                                    <div className="container" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                        <div className="row" style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"nowrap"}}>
                                            <div className="col-md-2" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                                
                                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                            </div>
                                            <div className="col-md-2" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                                    <List.Content>
                                                        <List.Header as='a'  onClick={(e)=>{history.push(`works/${workItem.id}/show`)}}>{workItem.topic}</List.Header>
                                                    </List.Content>
                                                
                                            </div>
                                            <div className="col-md-8" style={{display:"flex",alignItems:"center",justifyContent:"flex-end",flexWrap:"nowrap"}}>
                                               
                                                <Statistic.Group size="mini">
                                                    <Statistic>
                                                        <Statistic.Value>
                                                        <Icon name='check square'  color='green' size="tiny"/>
                                                       </Statistic.Value>
                                                        <Statistic.Label size="tiny">Cancelled status</Statistic.Label>
                                                    </Statistic>
                                                    <Statistic>
                                                        <Statistic.Value>
                                                        <Icon name='check square'  color='green' size="tiny"/>
                                                       </Statistic.Value>
                                                        <Statistic.Label size="tiny">Completed status</Statistic.Label>
                                                    </Statistic>
                                                
                                                    <Statistic>
                                                        <Statistic.Value>
                                                        <Icon name='check square'  color='green' size="tiny"/>
                                                       </Statistic.Value>
                                                        <Statistic.Label size="tiny">Paid status</Statistic.Label>
                                                    </Statistic>                                                   
                                                </Statistic.Group>
                                                
                                            </div>
                                        </div>
                                        <div class="row" style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap"}}>
                                            <List.Content>
                                                <List.Description as='h5'>{`Date given: ${workItem.date}`}</List.Description>
                                                <List.Description as='a'>{`Type of work: ${workItem.type_of_work}`}</List.Description>
                                                <List.Description as='h4'>Work description: </List.Description>
                                                <List.Description >{`${workItem.number_of_words} number of words, ${workItem.pages} pages`}</List.Description>
                                            </List.Content>
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

export default UserWorkList
