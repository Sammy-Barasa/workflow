import React,{useContext} from 'react'
import UserStatistic from "./UserStatistic"
import StateContext from '../Context/stateContext'
import AccountPersonList from './AccountPersonList'
import AccountSupport from './AccountSupport'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {useHistory} from 'react-router-dom'
import '../App.css'

const Account = (props) => {

    const { state } = useContext(StateContext)
    const history = useHistory()
    const stats=state.work.data.stats
    const persons=state.persons.data.data
    // const work= state.work.data.data
    const user= state.user
    const username =user.username
    const initialLetter=username.slice(0,1).toUpperCase()
    const capitalizedName=username.charAt(0).toUpperCase()+username.slice(1)
    
    return (
        <div className='App-body'>
        <div className="account-page">
           <div className="account">
                <div>
                    <IconButton color="default" aria-label="back button" component="span" onClick={(e)=>{
                                        e.preventDefault()
                                        history.goBack()}}>
                                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <div className="account-header">
                    <div className="account-image"> 
                        <h1>{initialLetter}</h1>
                    </div>
                    <div className="account-details">
                        <h2>{capitalizedName}</h2>
                    </div>
                </div>
                <div className="account-statistic">
                    <h3>Work Summary</h3>
                    <div className='statistic-container'>
                        <UserStatistic stats={stats} persons={persons}/>
                    </div>
                </div>
                <div className="account-assigners">
                    <h3>My assigners</h3>
                    <AccountPersonList/>
                </div>
                <div className="account-support">
                    <h3>Account support</h3>
                    <AccountSupport/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Account
