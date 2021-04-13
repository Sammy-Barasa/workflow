import React,{ useContext,useState } from 'react'

import StateContext from '../Context/stateContext'

const PersonDetail = (props) => {
    
    const { state } = useContext(StateContext)
    const personId=props.match.params.id
    const works = state.work.data.data
    let date =new Date()
    const [year,setYear] = useState(date.getFullYear())
    const [month,setMonth] = useState(date.getMonth()-1)
    
    

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
    return (
        <div className='App-body'>
            <div>
                <h4>Personal info</h4>
            </div>
            
            <div>
                <hr></hr>
                <h4>Personal stats</h4>
                
                <p>{`percentage:  ${workPercentage}% of works received`}</p>
                <p>{`Works total:  ${workTotals}`}</p>
                <p>{`Works paid:  ${worksPaid}`}</p>
                <p>{`Works not paid:  ${worksNotPaid}`}</p>
                <hr></hr>
                <h4>Monthly stats</h4>
                <p>{new Date(year,month+1,0).toDateString()}</p>
                
                <input type="date" name="month" onChange={(e)=>{
                                e.preventDefault()
                                console.log(new Date(e.target.value))
                                setMonth(new Date(e.target.value).getMonth())
                                setYear(new Date(e.target.value).getFullYear())
                            }}></input>
                            {/* <button onClick={filterByDate}>filter by date</button> */}
                <p>{`Total works in month: ${workItemsChosenMonth.length}`}</p>
                <p>{`Total works in month paid: ${workItemsChosenMonthPaid}`}</p>
                <p>{`Total works in month not paid: ${workItemsChosenMonthNotPaid}`}</p>
                <p>{`Expected amount in Month: ${sumOfexpectedAmount}`}</p>
                <p>{`Amount received in Month: ${sumOfreceivedAmount}`}</p>
            </div>
            <div>
                <h4>visualize stats</h4>
            </div>
        </div>
    )
}

export default PersonDetail
