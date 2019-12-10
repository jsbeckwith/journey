import React from 'react';
import axios from 'axios';
import {TextField} from '@material-ui/core';
import AuthHeader from '../authHeader.js';
import CreateAccountButton from '../../buttons/createAccountButton.js';
import '../auth.scss';

class CreateAccountPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
          };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            //state instead of props.auth
            "displayname": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
            "password2": this.state.password2
            };
        //this.props.registerUser(newUser, this.props.history);
        // console.log("before request");
        axios.post("http://localhost:4000/register", newUser)
            .then(res => {
                // this.setState({id: res.data._id});
                console.log(res.data);
                // window.location = "/post/" + this.state.id;
            })
            .catch( (error) => {
                console.log(error);
            });
        // this.props.registerUser("http://localhost:4000/register", newUser);
            // .then( res => {
            //     console.log(res.data);
            //     alert("Account created!");
            //     //window.location = "http://localhost:3000/homepage";
            // })
            // .catch((error) => {
            //      console.log(error);
            //      console.log(newUser);
            // });
            
            //alert("Account created!");
            
            //window.location = "http://localhost:3000/homepage";

    };

    render () {
        return (
            <div className="auth-page create-account-page">
                <AuthHeader/>
                <br/>
                <div className="auth-content create-account-content">
                    <form className="form" onSubmit={this.onSubmit}>
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