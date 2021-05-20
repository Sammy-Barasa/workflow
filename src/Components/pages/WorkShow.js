import React,{useContext,useEffect} from 'react'
import SinglelistSkeleton from '../../Utils/SinglelistSkeleton'
// import ListSkeleton from "../Utils/ListSkeleton"
import { List,Icon } from 'semantic-ui-react'
import StateContext from '../../Context/stateContext'
import MenuWorkEdit from '../menus/MenuWorkEdit'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {useHistory,Link} from 'react-router-dom'
import '../../App.css'

const WorkShow = (props) => {

    const { state } = useContext(StateContext)
    const history = useHistory()
    const loading = state.work.loading
    // const Loading= state.workupdate.loading
    useEffect(()=>{},[loading])
    const workId=props.match.params.id
    // eslint-disable-next-line
    let workItem = state.work.data.data.find(element=>{return element.id==workId})
    
    const date = new Date(workItem.date)
    const dateTodisplay = date.toLocaleDateString('en-US',{
        day:'numeric',
        month:'short',
        year:'numeric'
    })

    const datemodef = new Date(workItem.last_modified)
    const datemodefTodisplay = datemodef.toLocaleDateString('en-US',{
        day:'numeric',
        month:'short',
        year:'numeric'
    })
    const time = new Date(workItem.last_modified)
    const timeTodisplay = time.toLocaleTimeString()
    const datePaidToDisplay = new Date(workItem.date_paid).toLocaleString()
    return (
        <div className='App-body'>
            <div className='show-page'>
            <div className="show">
                <div className="show-header-h2">
                    <h2>Work detail</h2>
                </div>           
                
                <div className="show-header">
                    
                    <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                        e.preventDefault()
                        history.goBack()}}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <div>
                        <MenuWorkEdit workId={workId}/>
                    </div>
                    
                </div>
                
                    {
                        loading?<SinglelistSkeleton/>:
                        <div className="work-show-container">
                                            <div className="row-header">
                                                <div className="show-header-left">
                                                    
                                                        <List.Icon name='sticky note' size='large'color='grey' verticalAlign='middle' />
                                                </div>
                                                <div className="show-header-center" >
                                                        <List.Content>
                                                            <List.Header as="h4">
                                                                
                                                                    {workItem.topic}
                                                                
                                                            </List.Header>
                                                        </List.Content>
                                                    
                                                </div>
                                                <div className="show-header-right">
                                                
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
                                            <div className="show-body">
                                                
                                                    <div className="show-body-left">
                                                        <List.Content>
                                                            <List.Description as='h4'>{`Date assigned:   `}</List.Description>
                                                            <List.Description as='h5'>{dateTodisplay}</List.Description>
                                                            <List.Description as='h4'>{`Type of work: `}</List.Description>
                                                            <List.Description >{` ${workItem.category_of_work.work_type}`}</List.Description>
                                                            <List.Description as='h4'>Expected Amount</List.Description>
                                                            <List.Description as='p'>{`Ksh. ${workItem.expected_amount}`}</List.Description>
                                                            <List.Description as='h4'>Date paid:</List.Description>
                                                            <List.Description as='p'>{workItem.paid?workItem.date_paid?`${datePaidToDisplay}`:"Date paid not recorded":"Not yet"}</List.Description>
                                                            <List.Description as='h4'>Last modified date:</List.Description>
                                                            <List.Description as='p'>{`${datemodefTodisplay}`}</List.Description>
                                                            
                                                        </List.Content> 
                                                    </div>
                                                    <div className="show-body-bottom">
                                                        <List.Content className="person-detail">
                                                            <List.Description as='h5'>{`Assigned by:`}</List.Description>
                                                            <Link to={`/users/${state.user.username}/account/persons/${workItem.assigned_by.id}`}><List.Description as='h5'><Icon name='user circle outline' size="large" >{`${workItem.assigned_by.name}`}</Icon></List.Description></Link>
                                                        </List.Content> 
                                                    </div>

                                                    <div className="show-body-right">
                                                    <List.Content>
                                                        <List.Description as='h4'>Work description: </List.Description>
                                                        <List.Description >{`${workItem.number_of_words} number of words, `}</List.Description>
                                                        <List.Description >{`${workItem.pages} pages`}</List.Description>
                                                        <List.Description as='h4'>Order number</List.Description>
                                                        <List.Description >{`${workItem.order_number}`}</List.Description>
                                                        <List.Description as='h4'>Amount received</List.Description>
                                                        <List.Description as='p'>{`Ksh. ${workItem.amount_received}`}</List.Description>
                                                        <List.Description as='p'></List.Description>
                                                        <List.Description as='p'>_</List.Description>
                                                        <List.Description as='p'>_</List.Description>
                                                        <List.Description as='h4'>at:</List.Description>
                                                        <List.Description as='p'>{`${timeTodisplay}`}</List.Description>
                                                    </List.Content>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    }
                            
                        {/* </div> */}
                        
            </div>
    </div>
</div>
    )
}

export default WorkShow
