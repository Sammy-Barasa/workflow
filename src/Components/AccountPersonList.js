import React,{useContext} from 'react'
import StateContext from '../Context/stateContext'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import PhoneInTalkRoundedIcon from '@material-ui/icons/PhoneInTalkRounded'
import Typography from '@material-ui/core/Typography'
import EmailIcon from '@material-ui/icons/Email'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import EmptyList from "../Utils/EmptyList"
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const AccountPersonList = () => {
    const classes = useStyles();
    const { state } = useContext(StateContext)
    const persons=state.persons.data.data
    const scope=state.persons.data.scope
    const history =useHistory()
    return (
        <List
            className={classes.root}
        >
            {scope.hasNoList?<EmptyList list='assigners'path='/employer/create'width='50px' height='200px'/>:persons.map((person)=>{
                return (<div>
                    <Divider variant="inset" component="li" /> 
                        <ListItem
                                justifyContent="center"
                                alignItems="center"
                            >
                            <div className='assigners-list'>
                                <div className='assigners-list-avatar'>
                                    <ListItemAvatar>
                                        <Avatar alt={person.name.slice(0,1).toUpperCase()} src=".../public/contactplaceholder.jpg" />
                                    </ListItemAvatar>
                                </div>
                                <div className='assigners-list-details'>
                                    <ListItemText
                                        primary={person.name}
                                        secondary={
                                    <React.Fragment>
                                        <div className='assigners-list'>
                                            <div className='assigners-list-icon'>
                                                <PhoneInTalkRoundedIcon fontSize='medium'/>
                                            </div>
                                            <div  className='assigners-list-typography'>
                                                <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {person.phone}
                                            </Typography>
                                            </div>
                                            </div>
                                            <div className='assigners-list'>
                                            <div className='assigners-list-icon'>
                                                <EmailIcon fontSize='medium'/>
                                            </div>
                                            <div className='assigners-list-typography'>
                                                <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                                >
                                                {person.email}
                                                </Typography>
                                            </div>
                                        </div>
                
                                        <Button onClick={(e)=>{
                                            e.preventDefault()
                                            history.push(`/users/${state.user.username}/account/persons/${person.id}`)
                                            }}>
                                            View more
                                        </Button>
                                    </React.Fragment>
                                }
                            /> 
                                </div>
                            </div>
                            
                                    
                    </ListItem>
                <Divider variant="inset" component="li" /> 
                </div>)
            })}
        </List>
    )
}

export default AccountPersonList
