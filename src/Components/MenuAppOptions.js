import React,{useState,useContext}from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import RefreshIcon from '@material-ui/icons/Refresh';
import Auth from '../Utils/Auth'
import StateContext from '../Context/stateContext'
import { useHistory, Redirect } from "react-router-dom"
import {InfoFunc} from '../Utils/InfoFunc'
import "../App.css"

const MenuAppOptions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { state,dispatch } = useContext(StateContext)
    const history = useHistory()
    const username = state.user.username
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="menu-option">
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}

            >
                <MoreVertIcon fontSize="large"/>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center',
                  }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right',

                }}
                keepMounted
                open={open}
                onClose={handleClose}
                
                PaperProps={{
                style: {
                    height:'fit-content',
                    width: '21ch',
                    // left:'100%',
                    // transform:'translateX(-77%) translateY(32%)',
                    
                },
                }}
            >
                <MenuItem onClick={(e)=>{
                      e.preventDefault()
                      setAnchorEl(null)
                      InfoFunc( state.user.id,dispatch)
                    }}>
                    <ListItemIcon>
                        <RefreshIcon fontSize="large"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Refresh</Typography>
                </MenuItem>
                <MenuItem onClick={(e)=>{
                      e.preventDefault()
                      setAnchorEl(null)
                      history.push(`/users/${username}/account`)
                    }}>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography variant="inherit">Account</Typography>
                </MenuItem>
                <MenuItem onClick={(e)=>{
                      e.preventDefault()
                      setAnchorEl(null)
                      Auth.signOut()
                      return <Redirect to='/login'/>
                    }}>
                    <ListItemIcon>
                        <PowerSettingsNewIcon fontSize="large"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Logout</Typography>
                </MenuItem>

            </Menu>
        </div>
    )
}

export default MenuAppOptions

