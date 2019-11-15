import React from 'react';
import {TextField} from '@material-ui/core';
import LoginButton from '../buttons/loginButton.js';
import './loginPage.scss'

class LoginPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="wrapper">
                <h1 className="header"><center>journey</center></h1>
                <br/>
                <form className="form">
                    <TextField className="fields" label="Username" variant="outlined" margin="normal"/>
                    <br/>
                    <TextField className="fields" label="Password" variant="outlined" margin="normal"/>
                </form>
                <br/>
                <LoginButton/>
            </div>
        );
    }
}

export default LoginPage;