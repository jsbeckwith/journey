import React from 'react';
import {TextField} from '@material-ui/core';
import CreateAccountButton from '../buttons/createAccountButton.js';
import './createAccountPage.scss';

class CreateAccountPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="wrapper">
                <h1 className="createAccountHeader"><center>journey</center></h1>
                <br/>
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
        );
    }
}

export default CreateAccountPage;