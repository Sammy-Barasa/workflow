import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import Auth from '../Utils/Auth'
import StateContext from '../Context/stateContext'
import { useHistory } from "react-router-dom"
import { actionTypes } from '../Context/stateReducer'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HeaderListOption() {
  const classes = useStyles();
  const { state,dispatch } = useContext(StateContext)
  const history = useHistory()
  const username = state.user.username

  return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    More
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button onClick={(e)=>{
                      e.preventDefault()
                      history.push(`users/${username}/account`)
                    }}>>
                    <ListItemIcon>
                    <AccountCircleRoundedIcon fontSize='medium'/>
                    </ListItemIcon>
                    <ListItemText primary="My Account"/>
                </ListItem>
                <ListItem button onClick={(e)=>{
                      e.preventDefault()
                      Auth.signOut()
                      localStorage.removeItem("token")
                      
                      history.replace('/login')

                    }}>
                    <ListItemIcon>
                    <PowerSettingsNewRoundedIcon fontSize='medium'/>
                    </ListItemIcon>
                    <ListItemText primary="Log out" />
                </ListItem>
            </List>
  );
}