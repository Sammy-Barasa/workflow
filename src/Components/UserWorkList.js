import React, { useContext } from 'react'
// import { Button } from 'semantic-ui-react'
import StateContext from '../Context/stateContext'
import { useHistory,Link} from "react-router-dom"
import { List,Icon,Statistic } from 'semantic-ui-react'
import CountUp from 'react-countup'
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import '../App.css'


const UserWorkList = () => {
    const { state } = useContext(StateContext)
    // const [workdata,setWorkdata]=useState([])
    // const [workerror,setWorkerror]=useState()
    
    const work = state.work
    const history=useHistory()


    
    // const workderror=work?.error

    function handleNewWorkRecordClick(e) {
        e.preventDefault(
            history.push('/works/create')
        )
    }

    const handleNewEmployerClick=(e)=>{
        e.preventDefault()
        history.push('/employer/create')
    }

    const mediaQuery = window.matchMedia('(max-width: 500px)')
    return (
        <div >
            <h3>My Work Summary</h3>
            <div className='worklist-container'>
                {/* {workerror?<div>{workerror.statusText}</div>:""} */}
                    {
                        work?.data.length?<div className="user-statistics">
                            <div>
                                <Statistic.Group widths='two'>
                                    <Statistic>
                                        <Statistic.Value>
                                            {<CountUp end={work.data.length}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work totals
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>
                                            <Icon name='user circle outline' >{<CountUp end={work.data.length}/>}</Icon>
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work assigner totals
                                        </Statistic.Label>
                                    </Statistic>
                                </Statistic.Group>
                                
                                
                            </div>
                            <div>
                        
                                <Statistic.Group widths='two'>
                                    <Statistic color="green">
                                        <Statistic.Value>
                                            {<CountUp end={work.data.length}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work paid totals
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic color="red">
                                        <Statistic.Value>
                                            {<CountUp end={work.data.length}/>}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            work not paid totals
                                        </Statistic.Label>
                                    </Statistic>
                                </Statistic.Group>
                            </div>
                        </div>:"loading ..."
                    }    
                
            </div>
            <h3>My List of Works</h3>
            {work?.data.length?
            <div className='worklist-container'>
            
                <List relaxed> 
                    {                                                                                                                                                                               
                        work.data.map((workItem,index)=>{
                            return <List.Item key={index}>
                                    <div className="container">
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
                                                    <List.Description as='p'>{`Expected Amount: ${workItem.expected_amount}`}</List.Description>
                                                   </List.Content>
                                                </div>
                                                
                                        </div>
                                    </div>
                                </List.Item>}
                        )
                    }
                </List> 
            </div>:"loading...." } 
            
            <Fab
                mainButtonStyles={{
                    backgroundColor: "blue",
                }}
                actionButtonStyles={{
                    backgroundColor: "blue",
                }}
                style={{ bottom: 24,
                     right: 24
                    }}
                icon={<Icon name="add" size="small" color="white"/>}
                event={mediaQuery.matches?"click":"hover"}
                alwaysShowTitle={true}
                
            >
                <Action
                    text="New work order"
                    onClick={handleNewWorkRecordClick}
                >
                    <Icon name="file alternate" size="large" color="white"/>
                </Action>
                <Action
                    text="New work employer"
                    onClick={handleNewEmployerClick}
                >
                    <Icon name="add user" size="large" color="white"/>
                </Action>
            </Fab>
        </div>
    )
}

export default UserWorkList
