import React,{ useContext } from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import StateContext from "../Context/stateContext"
import { Route, Switch } from 'react-router-dom';
import WorkList from './WorkList'
import Navigation from './Navigation'
import '../App.css'
import Login from './Login'


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
    console.log(state)
    const user= state.user
    return (
        <Paper className={classes.root} elevation={3}>
          <div className="App">
            <h3>WorkRecord</h3>
            <Switch>
                <Route exact path='/' component={Navigation}/>
                <Route exact path={`/${user?.username}`} component={WorkList}/>
                <Route exact path={`/${user?.username}/admin`}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register'/>
            </Switch>
          </div>
        </Paper>
    )
}

export default Home
