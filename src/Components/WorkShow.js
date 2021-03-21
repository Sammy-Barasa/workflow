import React,{useContext,useEffect} from 'react'
import { List,Icon } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import { useHistory } from "react-router-dom"

const WorkShow = (props) => {

    const { state } = useContext(StateContext)
    const history = useHistory()
    const loading = state.work.loading
    const Loading= state.workupdate.loading
    useEffect(()=>{},[loading,Loading])
    const workId=props.match.params.id
    // eslint-disable-next-line
    let workItem = state.work.data.find(element=>{return element.id==workId})
    const handleIconClick =()=>{
        history.push(`/works/update/${workId}`)
    }
    
    return (
        <div>
            <div className="show-header">
                <h2>Work detail</h2><Icon name='ellipsis vertical' size="large" onClick={handleIconClick} />
            </div>
            
            <div className="worklist-container">
                
                    <div className="container">
                                        <div className="row-header">
                                            <div className="list-header-left">
                                                
                                                    <List.Icon name='sticky note' size='large'color='grey' verticalAlign='middle' />
                                            </div>
                                            <div className="list-header-center" >
                                                    <List.Content>
                                                        <List.Header as="h4">
                                                            
                                                                {workItem.topic}
                                                            
                                                        </List.Header>
                                                    </List.Content>
                                                
                                            </div>
                                            <div className="list-header-right">
                                               
                                                <div>
                                                    { workItem.cancelled?<Icon name='check square'  color='green' size='large'/>:""}
                                                      
                                                       { workItem.cancelled?<p> Cancelled </p>:""}
                                                </div>
                                                       
                                                <div>
                                                    {workItem.completed?<Icon name='check square'  color='green' size='large'/>:<Icon name='cancel'  color='red' size='large'/>}
                                                    <p> Completed </p>
                                                </div>
                                                        
                                                <div>
                                                        {workItem.paid?<Icon name='check square'  color='green' size='large'/>:<Icon name='cancel'  color='red' size='large'/>}
                                                   
                                                        <p> Paid  </p>
                                                </div>
                                                        
                                                  
                                                
                                            </div>
                                        </div>
                                        <div className="list-body">
                                            
                                                <div className="list-body-left">
                                                    <List.Content>
                                                        <List.Description as='h4'>{`Date assigned:   `}</List.Description>
                                                        <List.Description as='h5'>{workItem.date}</List.Description>
                                                        <List.Description as='h4'>{`Type of work: `}</List.Description>
                                                        <List.Description >{` ${workItem.type_of_work}`}</List.Description>
                                                        <List.Description as='h4'>Expected Amount</List.Description>
                                                    <List.Description as='p'>{`Ksh. ${workItem.expected_amount}`}</List.Description>
                                                    </List.Content> 
                                                </div>
                                                <div className="list-body-bottom">
                                                    <List.Content className="person-detail">
                                                        <List.Description as='h5'>{`Assigned by:`}</List.Description>
                                                        <List.Description as='h5'><Icon name='user circle outline' size="large" >{`${workItem.person}`}</Icon></List.Description> 
                                                    </List.Content> 
                                                </div>

                                                <div className="list-body-right">
                                                   <List.Content>
                                                    <List.Description as='h4'>Work description: </List.Description>
                                                    <List.Description >{`${workItem.number_of_words} number of words, `}</List.Description>
                                                    <List.Description >{`${workItem.pages} pages`}</List.Description>
                                                    <List.Description as='h4'>Order number</List.Description>
                                                    <List.Description >{`${workItem.order_number}`}</List.Description>
                                                    <List.Description as='h4'>Amount received</List.Description>
                                                    <List.Description as='p'>{`Ksh. ${workItem.amount_received}`}</List.Description>
                                                   </List.Content>
                                                </div>
                                                
                                        </div>
                                    </div>
                                
                            
                        </div>
                        
            </div>
        

    )
}

export default WorkShow
