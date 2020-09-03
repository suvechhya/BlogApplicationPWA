import React from 'react';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
    import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#4B3B47',
        color: '#f7e4f2'
    }
});

function HomePage() {
    const floatingIconStyles = useStyles();
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <div className="home-page__search-btn">
                <Fab className={floatingIconStyles.root} aria-label="edit">
                    <SearchIcon />
                </Fab>
            </div>

        </div>
    );
}

export default HomePage;
