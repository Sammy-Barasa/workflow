import React from 'react'
import { Icon } from 'semantic-ui-react'
import Auth from '../Utils/Auth'
import {useHistory} from 'react-router-dom'
import '../App.css'

const HeaderRight = ({user}) => {
    const history = useHistory()
    return (
        <div className="header-right">
            <div className="app-logout">
                  <Icon name="power off" bordered color="red" onClick={(e)=>{
                      e.preventDefault()
                      Auth.signOut()
                    }}/>
              </div> 
              <div className="app-logout">
                <Icon name="ellipsis vertical" size='large' onClick={(e)=>{
                  e.preventDefault()
                  history.push(`/users/${user.username}/account`)
                }}/>
              </div>
        </div>
    )
}

export default HeaderRight
