import React,{ useContext,useState, useEffect } from 'react'
import StateContext from '../Context/stateContext'
import MenuPerson from './MenuPerson'
import { Bar } from 'react-chartjs-2'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {useHistory} from 'react-router-dom'
import '../App.css'

const PersonDetail = (props) => {
    
    const { state } = useContext(StateContext)
    const history = useHistory()
    const personId=props.match.params.id
    const works = state.work.data.data
    const persons=state.persons.data.data
    const loading =state.persons.loading
    let date =new Date()
    const [year,setYear] = useState(date.getFullYear())
    const [month,setMonth] = useState(date.getMonth())
    
    
    // eslint-disable-next-line eqeqeq
    const person = persons.filter(person=>person.id==personId)
    const initialLetter=person[0].name.slice(0,1).toUpperCase()

    // eslint-disable-next-line eqeqeq
    let workItems = works.filter(work=>{return work.assigned_by.id==personId})
    let workTotals = workItems.length
    let workPercentage =Math.round((workTotals/works.length)*100)
    let worksPaid = workItems.filter((work)=>{return work.paid===true}).length
    let worksNotPaid = workItems.filter((work)=>{return work.paid===false}).length
    
    let workItemsChosenMonth = workItems.filter((work)=>{
        let workdate = new Date(work.date)
        
        return (workdate.getMonth()===month&&workdate.getFullYear()===year)
           
    })
    
   
    // Monthly calculations
    let workItemsChosenMonthPaid=workItemsChosenMonth.filter((work)=>{return work.paid===true}).length
    
    let workItemsChosenMonthNotPaid=workItemsChosenMonth.filter((work)=>{return work.paid===false}).length
    let expectedAmountChosenMonth = workItemsChosenMonth.map(work=>{
        let amount = 0
        amount =amount+work.expected_amount
        return amount
    })
    let receivedAmountChosenMonth = workItemsChosenMonth.map(work=>{
        let amount = 0
        amount = amount+work.amount_received
        return amount
    })
    let sumOfexpectedAmount = expectedAmountChosenMonth.reduce((a,b)=> a+b,0)
    
    let sumOfreceivedAmount = receivedAmountChosenMonth.reduce((a,b)=> a+b,0)
    const month_name = (yr,mnth)=>{
       let month_list =['January','February','March','April','May','June','July',
                        'August','September','October','November','December']
                        return month_list[new Date(yr,mnth).getMonth()]
    }

    const chosenMonth = month_name(year,month)
   
 
    useEffect(() => {
        
    }, [loading])
    return (
        <div className='App-body'>
            <div className='person-detail-page'>
            <div  className='person-menu'>
                <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                        e.preventDefault()
                        history.goBack()}}>
                        <ArrowBackIosIcon />
                </IconButton>
                
                    <MenuPerson personId={personId}/>
                
            </div>
            <div className='person-info'>
                
                <div className="account-image"> 
                    <h1>{initialLetter}</h1>
                </div>
                <p>{person[0].name}</p>
                <p>{person[0].email}</p>
            </div>
            <hr></hr>
            <div className='person-stats'>
                
                <h4>Statistic from {`${person[0].name}`} </h4>
                
                <p>{`Works total:  ${workTotals}`}</p>
                <p>{`Works paid:  ${worksPaid}`}</p>
                <p>{`Works not paid:  ${worksNotPaid}`}</p>
                
                <h2>{`${workPercentage}% of works received`}</h2>
            </div>
            <hr></hr>
            <div className='monthly-graph'>
                <h4>visualize stats</h4>
                <div id='bar-graph'>
                    <Bar
                        data={{
                            labels:['Expect amount','Received amount'],
                            datasets:[
                                {
                                    backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)'],
                                    data:[sumOfexpectedAmount,sumOfreceivedAmount],
                                }
                            ]
                        }}
                        width={800}
                        height={300}
                        legend={ {display: false} }
                        options={{
                                maintainAspectRatio: false,
                                title:{display: true, 
                                        text: `${chosenMonth}`,
                                        fontSize:20},
                            }}
                    /> 
                </div>
                           
            </div>
            <hr></hr>
            <div className='person-monthly'>
                <h2>Monthly statistics</h2>
                <div className='monthly-header'>
                    
                
               
                <input type="date" name="month" onChange={(e)=>{
                                e.preventDefault()
                                console.log(new Date(e.target.value))
                                setMonth(new Date(e.target.value).getMonth())
                                setYear(new Date(e.target.value).getFullYear())
                            }}></input>
                </div>
                
                            
                <p>{new Date(year,month).toDateString()} - {new Date(year,month+1,0).toDateString()}</p>
                <p>{`Total works in ${chosenMonth}: ${workItemsChosenMonth.length}`}</p>
                <p>{`Total works paid in ${chosenMonth}: ${workItemsChosenMonthPaid}`}</p>
                <p>{`Total works not paid ${chosenMonth}: ${workItemsChosenMonthNotPaid}`}</p>
                <p>{`Expected amount in ${chosenMonth}: ${sumOfexpectedAmount}`}</p>
                <p>{`Amount received in ${chosenMonth}: ${sumOfreceivedAmount}`}</p>
            </div>
            <hr></hr>
            </div>
        </div>
    )
}

export default PersonDetail
