import React, { useEffect }from 'react';

import './App.css'
import { Route, Switch } from 'react-router-dom';
import UserWorkList from './Components/UserWorkList'
import Account from './Components/Account'
import WorkShow from './Components/WorkShow'
import WorkCreate from './Components/WorkCreate'
import WorkEdit from './Components/WorkEdit'
import PersonCreate from './Components/PersonCreate'
import PersonDetail from './Components/PersonDetail'
import Navigation from './Components/Navigation'
import Search from './Components/Search'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import { ProtectedRoute } from "./Components/ProtectedRoute"
import { PublicRoute } from "./Components/PublicRoute"
// import { Icon } from 'semantic-ui-react'
// import Auth from '../Utils/Auth'
import PageNotFound from './Components/PageNotFound'

function App() {
 
    
    useEffect(()=>{
      
    },[])
      
  return (
    
           <div className="App">
              <Switch>
                <PublicRoute exact path='/'>
                  <Navigation/>
                </PublicRoute>
                
                <ProtectedRoute exact path="/users/:username" component={UserWorkList}/>

                <ProtectedRoute exact path="/users/:username/account" component={Account}/>

                <ProtectedRoute exact path="/users/:username/account/persons/:id" component={PersonDetail}/>

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
         
  );
}

export default App;
