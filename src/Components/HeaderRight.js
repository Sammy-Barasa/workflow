import React from 'react'
import Auth from '../Utils/Auth'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import RefreshIcon from '@material-ui/icons/Refresh'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import '../App.css'

const HeaderRight = ({user}) => {
    const history = useHistory()
    return (
        <div className="header-right">
                <Button onClick={(e)=>{
                      e.preventDefault()
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
                    }}>
                      <PowerSettingsNewIcon fontSize="large"/>
                      Log Out
                </Button>
              
              
        </div>
    )
}

export default HeaderRight
