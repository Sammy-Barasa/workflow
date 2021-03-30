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
    return (
        <List
            className={classes.root}
        >
            {scope.hasNoList?"":persons.map((person)=>{
                return (<div>
                    <Divider variant="inset" component="li" /> 
                    <ListItem
                            alignItems="flex-start"
                        >
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src=".../public/contactplaceholder.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={person.name}
                            secondary={
                                <React.Fragment>
                                    <PhoneInTalkRoundedIcon fontSize='medium'/>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {person.phone}
                                    </Typography>
                                    <EmailIcon fontSize='medium'/>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {person.email}
                                    </Typography>
                                </React.Fragment>
                            }
                        /> 
                                  
                </ListItem>
                <Divider variant="inset" component="li" /> 
                </div>)
            })}
        </List>
    )
}

export default AccountPersonList
