import React, { useContext }  from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AuthContext } from '../../contexts/AuthContext';


function MenuBar() {
    const [isAuthenticated,,userDetails] = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="menu">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {isAuthenticated && <Avatar>{userDetails.initials}</Avatar>}
                {!isAuthenticated && <Avatar>G</Avatar>}
            </Button>
            <Menu
                id="simple-menu"
                keepMounted
                onClose={handleClose}
                open={open}
                anchorEl={anchorEl}
            >
                <MenuItem>Logged In as: {isAuthenticated ? userDetails.name : 'Guest'}</MenuItem>
                {isAuthenticated && <MenuItem>Profile</MenuItem>}
                {isAuthenticated && <MenuItem>Logout</MenuItem>}
                {!isAuthenticated && <MenuItem>Sign In</MenuItem>}
            </Menu>
        </div>
    );
}

export default MenuBar;
