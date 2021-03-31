import React, {useContext} from 'react'
import StateContext from "../Context/stateContext"
import { Route, Switch } from 'react-router-dom';
import UserWorkList from './UserWorkList'
import Account from './Account'
import WorkShow from './WorkShow'
import WorkCreate from './WorkCreate'
import WorkEdit from './WorkEdit'
import PersonCreate from './PersonCreate'
import Navigation from './Navigation'
import Search from './Search'
import '../App.css'
import Login from './Login'
import Register from './Register'
import { ProtectedRoute } from "./ProtectedRoute"
import { PublicRoute } from "./PublicRoute"
import { Icon } from 'semantic-ui-react'
import Auth from '../Utils/Auth'
import PageNotFound from './PageNotFound'
import HeaderListOption from "./HeaderListOptions"
import {useHistory} from 'react-router-dom'



function Home() {
    
    const { state } = useContext(StateContext)
    const history = useHistory()
    const user = state.user
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    // console.log(state)
    
    
    return (
        
          <div className="App">
            <div className="App-header">
              <div className='app-title'>
                <h2>
                  Work Record Manager
                </h2>
              </div>
              <div className="app-logout">
                  {user?<Icon name="power off" bordered color="red" onClick={(e)=>{
                      e.preventDefault()
                      Auth.signOut()
                    }}/>:""}
              </div> 
              <div className="app-logout">
                {user?<Icon name="ellipsis vertical" size='large' onClick={(e)=>{
                  e.preventDefault()
                  history.push(`/users/${user.username}/account`)
                }}/>:""}
              </div>
              <div className="app-logout">
                {mediaQuery?<Icon name="ellipsis vertical" size='large' onClick={(e)=>{
                e.preventDefault()
                return(<HeaderListOption/>)
                }}/>:""}
              </div>
            </div>
            <div className="App-body">
              <Switch>
                <PublicRoute exact path='/'>
                  <Navigation/>
                </PublicRoute>
                
                <ProtectedRoute exact path="/users/:username" component={UserWorkList}/>

                <ProtectedRoute exact path="/users/:username/account" component={Account}/>

                <ProtectedRoute exact path="/users/:username/search" component={Search}/>

                <ProtectedRoute exact path="/works/:id/show" component={WorkShow}/>
                 
                <ProtectedRoute exact path="/works/create" component={WorkCreate}/>
                  
                
                <ProtectedRoute exact path="/works/update/:id" component={WorkEdit}/>
                
                <ProtectedRoute exact path="/employer/create" component={PersonCreate}/>
                  
                <PublicRoute exact path='/login'>
                  <Login/>
                </PublicRoute>
                <Route exact path='/register'>
                  <Register/>
                </Route>
                <Route path='*'>
                  <PageNotFound/>
                </Route>
            </Switch>
            </div>
          </div>
        
    )
}

export default Home
