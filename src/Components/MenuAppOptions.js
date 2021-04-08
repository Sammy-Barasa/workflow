import React,{useState,useContext}from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Auth from '../Utils/Auth'
import StateContext from '../Context/stateContext'
import { useHistory } from "react-router-dom"

const MenuAppOptions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { state } = useContext(StateContext)
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
        <div>
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
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: 150,
                    width: '21ch',
                },
                }}
            >
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

