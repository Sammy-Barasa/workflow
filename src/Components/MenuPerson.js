import React,{useState}from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Icon } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import "../App.css"

const MenuPerson = ({personId}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory()
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
                <MoreVertIcon fontSize="large" />
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
                    maxHeight: 150,
                    width: '21ch',
                },
                }}
            >
                <MenuItem onClick={(e)=>{
                      e.preventDefault()
                      setAnchorEl(null)
                      history.push(`${personId}/edit/`)
                    }}>
                    <ListItemIcon>
                        <Icon name="edit" size="large" />
                    </ListItemIcon>
                    <Typography variant="inherit">Edit</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default MenuPerson