import React, { useEffect }from 'react';

import './App.css'
import { Route, Switch } from 'react-router-dom';
import UserWorkList from './Components/pages/UserWorkList'
import Account from './Components/pages/Account'
import WorkShow from './Components/pages/WorkShow'
import WorkCreate from './Components/pages/WorkCreate'
import WorkEdit from './Components/pages/WorkEdit'
import PersonCreate from './Components/pages/PersonCreate'
import PersonEdit from './Components/pages/PersonEdit'
import PersonDetail from './Components/pages/PersonDetail'
import Navigation from './Components/pages/Navigation'
import Search from './Components/pages/Search'
import './App.css'
import Login from './Components/pages/Login'
import Register from './Components/pages/Register'
import { ProtectedRoute } from "./Components/ProtectedRoute"
import { PublicRoute } from "./Components/PublicRoute"
// import { Icon } from 'semantic-ui-react'
// import Auth from '../Utils/Auth'
import PageNotFound from './Components/pages/PageNotFound'

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

                <ProtectedRoute exact path="/users/:username/account/persons/:id/edit" component={PersonEdit}/>

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
