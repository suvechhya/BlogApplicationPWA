import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import BookmarksSharpIcon from '@material-ui/icons/BookmarksSharp';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import config from '../../config/static-data-config';
import './styles.scss';

const { bottonNavigationConfig } = config;

const useStyles = makeStyles({
    root: {
        color: '#9C9990 !important'
    },
    selected: {
        color: '#4B3B47 !important'
    }
});

function Navigation() {
    const history = useHistory();
    const [value, setValue] = useState(0);
    const tabStyles = useStyles();

    const routeChange = (path) =>{ 
        history.push(path);
    }
    
    return (
        <div className="footer">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    routeChange(bottonNavigationConfig[newValue].path);
                }}
                showLabels
            >
                <BottomNavigationAction classes={tabStyles} label="Home" icon={<HomeSharpIcon />} />
                <BottomNavigationAction classes={tabStyles}  label="Bookmarks" icon={<BookmarksSharpIcon />} />
                <BottomNavigationAction classes={tabStyles}  label="My Posts" icon={<ListAltSharpIcon />} />
            </BottomNavigation>
        </div>
    );
}

export default Navigation;
