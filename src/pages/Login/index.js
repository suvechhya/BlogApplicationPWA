import React, { useState } from 'react';
import TabPanel from '../../components/TabPanel';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './styles.scss';
import Signin from './signin';
import Signup from './signup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#9C9990 !important'
    },
    selected: {
        color: '#4B3B47 !important',
        borderBottom: '#4B3B47 !important'
    }
});

function LoginPage() {
    const [value, setValue] = React.useState(0);
    const tabStyles = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="login">
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab classes={tabStyles} label="Login" />
                    <Tab classes={tabStyles} label="Sign Up" />
                </Tabs>
                <div>
                <TabPanel value={value} index={0}>
                    <Signin></Signin>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Signup></Signup>
                </TabPanel>
                </div>
            </Paper>
        </div>
    );
}

export default LoginPage;
