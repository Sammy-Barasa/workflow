import React from 'react'
import { List,Icon } from 'semantic-ui-react'
import { useHistory,Link } from "react-router-dom"
import '../App.css'

const SingleWorkItem = ({workItem,index}) => {
    const history=useHistory()
    const date = new Date(workItem.date)
    const dateTodisplay = date.toLocaleDateString('en-US',{
        day:'numeric',
        month:'short',
        year:'numeric'
    })
    return (
        <List.Item key={index}>
                                <div className="container" onClick={(e)=>{ e.preventDefault()
                                    history.push(`/works/${workItem.id}/show`)}}>
                                        <div className="row-header">
                                            <div className="list-header-left">
                                                
                                                    <List.Icon name='sticky note' size='large'color='grey' verticalAlign='middle' />
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
                                                        <List.Description as='h5'>{dateTodisplay}</List.Description>
                                                        <List.Description as='h5'>{`Type of work:`}</List.Description>
                                                        <List.Description as='p'>{`${workItem.category_of_work.work_type}`}</List.Description>
                                                        {/* <List.Description as='p'>{`Last modified: ${workItem.last_modified}`}</List.Description> */}
                                                    </List.Content> 
                                                </div>
                                                <div className="list-center">
                                                    <List.Content>
                                                        <List.Description as='p'>{`Assigned by:`}</List.Description>
                                                        <List.Description>{` ${workItem.assigned_by.name}`}</List.Description> 
                                                    </List.Content> 
                                                </div>

                                                <div className="list-body-right">
                                                   <List.Content>
                                                    <List.Description as='h4'>Work description: </List.Description>
                                                    <List.Description >{`${workItem.number_of_words} number of words, `}</List.Description>
                                                    <List.Description >{`${workItem.pages} pages`}</List.Description>
                                                    <List.Description as='h5'>{workItem.paid?`Amount received:    Ksh ${workItem.amount_received}`:`Expected Amount:       Ksh ${workItem.expected_amount}`}</List.Description>
                                                   </List.Content>
                                                </div>
                                                
                                        </div>
                                    </div>
                                </List.Item>
    )
}

export default SingleWorkItem
