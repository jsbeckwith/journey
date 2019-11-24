import React from 'react';
import {TextField} from '@material-ui/core';
import AuthHeader from '../authHeader.js';
import LoginButton from '../../buttons/loginButton.js';
import '../auth.scss';

class LoginPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="auth-page login-page">
                <AuthHeader/>
                <br/>
                <div className="auth-content login-content">
                    <form className="form">
                        <TextField label="Username" variant="outlined" margin="normal"/>
                        <br/>
                        <TextField label="Password" variant="outlined" margin="normal"/>
                    </form>
                    <br/>
                    <LoginButton/>
                    <div className="create-account-text">
                        Don't have an account yet?&nbsp;
                        <a href="/createAccount">Sign up</a>
                        !
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;