import React from 'react';
import { TextField } from '@material-ui/core';
import AuthHeader from './authHeader.js';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';
import './auth.scss';

class LoginPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            inputUsername: "",
            inputPassword: "",
            errors: {}
          };
    }

    updateUsername = (event) => {
		this.setState({inputUsername : event.target.value});
    }
    
    updatePassword = (event) => {
		this.setState({inputPassword : event.target.value});
    }

    onClick = () => {
		const inputUserInfo = {
            "username": this.state.inputUsername,
            "password": this.state.inputPassword,
        };

        axios.post("http://localhost:4000/users/login", inputUserInfo)
            .then(res => {
                const { token } = res.data;
                this.props.setLoggedIn(token);
            })
            .catch( (error) => {
                this.setState({errors: error});
                console.log(error);
            });
    }
    
    // TODO render error messages

    render () {
        return (
            <div className="auth-page login-page">
                <AuthHeader/>
                <br/>
                <div className="auth-content login-content">
                    <form className="form">
                        <TextField label="Username" variant="outlined" margin="normal" onChange={this.updateUsername}/>
                        <br/>
                        <TextField label="Password" variant="outlined" margin="normal" onChange={this.updatePassword}/>
                    </form>
                    <br/>
                    <Tooltip title="login">
                        <button className="login-button auth-button journey-button" onClick={this.onClick}>
                            login
                        </button>
                    </Tooltip>
                    <div className="switch-auth-text">
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