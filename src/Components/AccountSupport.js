import React from 'react'
// import StateContext from '../Context/stateContext'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
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

const AccountSupport = () => {
    const classes = useStyles();
    // const { state } = useContext(StateContext)
    
    return (
        <List
            className={classes.root}
        >
            <div>
                <Divider variant="inset" component="li" /> 
                    <ListItem
                            alignItems="flex-start"
                    >
                        <ListItemAvatar>
                             <EmailIcon fontSize='medium'/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Email us for support"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="h3"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        workrecordsmanager@gmail.com
                                    </Typography>
                                </React.Fragment>
                            }
                        /> 
                                  
                    </ListItem>
                <Divider variant="inset" component="li" /> 
            </div>
        </List>
    )
}

export default AccountSupport