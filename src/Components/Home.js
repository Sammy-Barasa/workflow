import React, {useContext} from 'react'
import StateContext from "../Context/stateContext"
import { Route, Switch } from 'react-router-dom';
import UserWorkList from './UserWorkList'
import WorkShow from './WorkShow'
import WorkCreate from './WorkCreate'
import WorkEdit from './WorkEdit'
import EmployerCreate from './EmployerCreate'
import Navigation from './Navigation'
import '../App.css'
import Login from './Login'
import Register from './Register'
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
                  {user?<Icon name="power off" bordered color="red" onClick={(e)=>{
                      e.preventDefault()
                      Auth.signOut()
                    }}/>:""}
              </div> 
            </div>
            <div className="App-body">
              <Switch>
                <Route exact path='/'>
                  <Navigation/>
                </Route>
                
                <ProtectedRoute exact path="/users/:username" component={UserWorkList}/>
                  
                <ProtectedRoute exact path="/works/:id/show" component={WorkShow}/>
                 
                <ProtectedRoute exact path="/works/create" component={WorkCreate}/>
                  
                
                <ProtectedRoute exact path="/works/edit" component={WorkEdit}/>
                
                <ProtectedRoute exact path="/employer/create" component={EmployerCreate}/>
                  
                <Route exact path='/login'>
                  <Login/>
                </Route>
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
