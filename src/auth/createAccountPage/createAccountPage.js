import React from 'react';
import {TextField} from '@material-ui/core';
import AuthHeader from '../authHeader.js';
import CreateAccountButton from '../../buttons/createAccountButton.js';
import '../auth.scss';

class CreateAccountPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="auth-page create-account-page">
                <AuthHeader/>
                <br/>
                <div className="auth-content create-account-content">
                    <form className="form">
                        <TextField label="Name" variant="outlined" margin="normal"/>
                        <br/>
                        <TextField label="Username" variant="outlined" margin="normal"/>
                        <br/>
                        <TextField label="Password" variant="outlined" margin="normal"/>
                        <br/>
                        <TextField label="Confirm Password" variant="outlined" margin="normal"/>
                    </form>
                    <br/>
                    <CreateAccountButton/>
                </div>
            </div>
        );
    }
}

export default CreateAccountPage;