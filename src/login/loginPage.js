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
            <div class="wrapper">
                <h1 class="loginHeader"><center>journey</center></h1>
                <br/>
                <form className="form">
                    {/* <TextField class="fields" label="Username" variant="outlined" margin="normal"/> */}
                    <TextField label="Username" variant="outlined" margin="normal"/>
                    <br/>
                    <TextField label="Password" variant="outlined" margin="normal"/>
                </form>
                <br/>
                <LoginButton/>
                <div class="createAccount">
                    Don't have an account yet?
                    <a class="createAccountLink" href="/createAccount">Sign up</a>
                    !
                </div>
            </div>
        );
    }
}

export default LoginPage;