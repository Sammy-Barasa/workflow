import React from 'react'
import Auth from '../Utils/Auth'
import {useHistory,Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import RefreshIcon from '@material-ui/icons/Refresh'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {InfoFunc} from '../Utils/InfoFunc'
import '../App.css'

const HeaderRight = ({user,dispatch}) => {
    const history = useHistory()
    return (
        <div className="header-right">
                <Button onClick={(e)=>{
                      e.preventDefault()
                      InfoFunc( user.id,dispatch)
                    }}>
                      <RefreshIcon fontSize="large"/> Refresh
                    </Button>
                <Button  onClick={(e)=>{
                  e.preventDefault()
                  history.push(`/users/${user.username}/account`)
                }}>
                  <AccountCircleIcon fontSize="large" />
                  Account
                </Button>
            
                    <Button onClick={(e)=>{
                      e.preventDefault()
                      Auth.signOut()
                      return <Redirect to='/login'/>
                    }}>
                      <PowerSettingsNewIcon fontSize="large"/>
                      Log Out
                </Button>
              
              
        </div>
    )
}

export default HeaderRight
