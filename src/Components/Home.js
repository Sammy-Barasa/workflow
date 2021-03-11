import React, {useContext} from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import StateContext from "../Context/stateContext"
import { Route, Switch } from 'react-router-dom';
import UserWorkList from './UserWorkList'
import WorkAdmin from './WorkAdmin'
import Navigation from './Navigation'
import '../App.css'
import Login from './Login'
import { ProtectedRoute } from "./ProtectedRoute"
import { Button } from 'semantic-ui-react'
import Auth from '../Utils/Auth'
import PageNotFound from './PageNotFound'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height:'fitContent',
    width:'fitContent',
    alignSelf:'center',
  },
}));

function Home() {
    const classes = useStyles();
    
    const { state } = useContext(StateContext)
    const user = state.user
    // console.log(state)
    
    
    return (
        <Paper className={classes.root} elevation={3}>
          <div className="App">
            <div className="App-Header">
              <h3>WorkRecord</h3>
              {user?<Button color="red" onClick={()=>{
                Auth.signOut()
              }}> LogOut </Button>:""}
            </div>
            <div>
             
            </div>
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
        </Paper>
    )
}

export default Home
