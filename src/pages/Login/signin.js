import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
    import { makeStyles } from '@material-ui/core/styles';

const makeButtonStyles = makeStyles({
    root: {
        backgroundColor: '#4B3B47 !important',
        color: '#f7e4f2',
        borderRadius: '0 !important'
    },
});

const makeLinkStyles = makeStyles({
    root: {
        color: '#4B3B47',
        fontSize: '0.6em'
    },
});

const textBoxStyles = makeStyles({
    root: {
      '& label.Mui-focused': {
        color: '#4B3B47',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#4B3B47',
      },
    },
  });

function Signin() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const btnStyles = makeButtonStyles();
      const linkStyles = makeLinkStyles();
      const textStyles = textBoxStyles();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div>
            <form className="login-form">
                <FormControl classes={textStyles}>
                    <InputLabel htmlFor="username">Username/Email</InputLabel>
                    <Input
                        id="username"
                        endAdornment={
                            <InputAdornment position="end">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl classes={textStyles}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant="contained" classes={btnStyles} href="#contained-buttons">Sign In</Button>
                <Button classes={linkStyles}>Don't have and Account? Sign Up!</Button>
            </form>
        </div>
    );
}

export default Signin;
