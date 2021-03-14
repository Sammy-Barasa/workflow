import React, {useContext} from 'react'
import StateContext from "../Context/stateContext"
import { Route, Switch } from 'react-router-dom';
import UserWorkList from './UserWorkList'
import WorkAdmin from './WorkAdmin'
import Navigation from './Navigation'
import '../App.css'
import Login from './Login'
import { ProtectedRoute } from "./ProtectedRoute"
import { Icon } from 'semantic-ui-react'
import Auth from '../Utils/Auth'
import PageNotFound from './PageNotFound'



function Home() {
    
    const { state } = useContext(StateContext)
    const user = state.user
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
                  {user?<Icon name="power off" bordered color="red" onClick={()=>{
                      Auth.signOut()
                    }}/>:""}
              </div> 
            </div>
            <div className="App-body">
              <Switch>
                <Route exact path='/'>
                  <Navigation/>
                </Route>
                
                <ProtectedRoute exact path="/users/:username">
                  <UserWorkList/>
                </ProtectedRoute>
                <ProtectedRoute exact path="/works/:id/show">
                  <WorkAdmin/>
                </ProtectedRoute> 
                <Route exact path='/login'>
                  <Login/>
                </Route>
                <Route path=''>
                  <PageNotFound/>
                </Route>
            </Switch>
            </div>
          </div>
        
    )
}

export default Home
