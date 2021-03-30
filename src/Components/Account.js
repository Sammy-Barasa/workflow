import React,{useContext} from 'react'
import UserStatistic from "./UserStatistic"
import StateContext from '../Context/stateContext'
import AccountPersonList from './AccountPersonList'
import '../App.css'

const Account = () => {

    const { state } = useContext(StateContext)
    const stats=state.work.data.stats
    const persons=state.persons.data.data
    const work= state.work.data.data
    
    return (
        <div className="account">
            <h3>My Account</h3>
            <div className="account-statistic">
                <h3>My Summary</h3>
                    <div className='worklist-container'>
                            {
                                work?.length?<UserStatistic stats={stats} persons={persons}/>:"loading ..."
                            }    
                        
                    </div>
            </div>
            <div className="account assigners">
                <AccountPersonList/>
            </div>
        </div>
    )
}

export default Account
