import React from 'react';
import axios from 'axios';
import {TextField} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import CreateAccountButton from '../buttons/createAccountButton.js';
import './createAccountPage.scss';

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            //state instead of props.auth
            displayname: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
            };
        //this.props.registerUser(newUser, this.props.history);
        console.log("before request");
        axios.post("http://localhost:4000/register", newUser)
            .then( res => {
                console.log(res.data);
                alert("Account created!");
                window.location = "http://localhost:3000/homepage";
            })
            .catch((error) => {
             	console.log(error);
            });

    };

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/homepage");
        }
    }

    render () {
        const { errors } = this.state;
        return (
            <div className="wrapper">
                <h1 className="createAccountHeader">
                    <center>
                        <xml version="1.0" encoding="utf-8"/>
                            <svg className="journey-logo journey-logo-createAccount" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 800 300">
                                <g>
                                    <path class="st0" d="M111.8,180.3c0,0,20.6-8.2,32.6-18c2.6,0,4.4,1.8,3.8,4.6c-0.4,2-2.6,4.2-6.6,7.2c-7.4,5.6-20,12.6-31.8,18.4
                                        l-0.4,2.4c-7.8,46.4-26.4,72.2-56,72.2c-13.6,0-22.4-8.6-22.4-21c0-11.8,7-22.6,16.8-31c10-8.6,20.4-14.6,36.6-22.6l12.8-76.4
                                        c2.2-12.6,0.2-17.2,0.2-17.2s3-1.8,10.4-1.8c15.4,0,17.2,5.8,14.8,19.8L111.8,180.3z M82.2,205.1C69,211.9,60,217.7,54,223.5
                                        c-7.8,7.6-11.8,14.4-11.8,21.4c0,5.2,3,9,9.2,9C65.6,253.9,76.4,237.1,82.2,205.1z M118.2,52.7c7.6,0,12.4,5.4,12.4,12.6
                                        c0,7-5.6,13.8-14.4,13.8c-7.2,0-12-5-12-12C104.2,58.9,110.6,52.7,118.2,52.7z"/>
                                    <path class="st0" d="M232.5,135.3c0,4.4-0.4,8.6-1,12.6c15-2.2,24.2-15.6,24.2-15.6c2.6,0,4,2,3.6,5c-1.2,7-13.8,17.8-29.8,19.8
                                        c-6.8,23.8-25.2,40-52.4,40c-21.2,0-36.8-13.4-36.8-38.2c0-36.2,21.2-61.8,55.4-61.8C219.1,97.1,232.5,112.5,232.5,135.3z
                                        M206.8,122.3c-1-10-5.6-15.4-13-15.4c-10,0-20.4,10.2-26,40c-1,5.2-1.8,15.6-1.8,20.6c0,12.6,4.8,19.6,13.2,19.6
                                        c10.8,0,19.8-11.4,25-35.4c-5-3.8-7.6-9.2-7.6-15.8C196.6,129.1,200.2,123.7,206.8,122.3z"/>
                                    <path class="st0" d="M307.5,165.3c-2.8,5.6-5.8,10.6-9,14.8c-8.4,11.4-17.2,17-28.2,17c-13.4,0-21.8-9.4-21.8-23.2
                                        c0-7.4,0.6-14.2,2.4-24.6l5.8-33.2c2.2-12.6,0.2-17.2,0.2-17.2s3-1.8,10.4-1.8c15.4,0,17.2,5.8,14.8,19.8l-8,46.2
                                        c-2,11.4,0.8,16.6,6.6,16.6c4.4,0,9.6-5.4,14.8-13.4c8.6-13,17.2-34.4,20.2-52.2c1.8-11,0-15.2,0-15.2s3-1.8,10.4-1.8
                                        c15.4,0,17.2,5.8,14.8,19.8l-7.8,45.2c-2,12,1.4,17.6,8.6,17.6c6.8,0,15.8-6.6,21-17.4c2.6,0,4.4,1.6,3.8,5.2
                                        c-2,10.6-16.4,29.6-35.8,29.6c-13.8,0-23.4-9-23.4-25C307.3,170.3,307.3,168.1,307.5,165.3z"/>
                                    <path class="st0" d="M394.1,125.7c12.8-21.6,26.2-28.6,35.2-28.6c9.8,0,16,5.4,16,15.6c0,11.2-6.8,19.2-16.6,19.2
                                        c-5.2,0-9-1.2-9-1.2s2.6-4.6,2.6-10c0-2.8-1.2-4.4-4.2-4.4c-3.2,0-7.6,2.6-14.2,11.8c-7.6,10.6-14.2,23-19,51.2c-2,11.8,0,16,0,16
                                        s-3,1.8-10.4,1.8c-15.4,0-17.2-5.8-14.8-19.8l10.6-61.2c2.2-12.6,0.2-17.2,0.2-17.2s3-1.8,10.4-1.8c15.4,0,17.2,6.4,14.8,19.8
                                        L394.1,125.7z"/>
                                    <path class="st0" d="M516.3,127.3c1.6-9.6-0.4-12.6-4.8-12.6c-12.6,0-31.6,29.8-37.8,63.4c-2.2,12.6-0.2,17.2-0.2,17.2
                                        s-3,1.8-10.4,1.8c-15.4,0-17.2-5.8-14.8-19.8l10.6-61.2c2.2-12.6,0.2-17.2,0.2-17.2s3-1.8,10.4-1.8c15.4,0,17.2,5.8,14.8,19.8
                                        l-1.6,9.2c7.8-13,23-29,39.2-29c12.6,0,20.6,8.2,20.6,20.6c0,4.4-0.8,10.2-1.8,16.2l-4.8,28.2c-1.8,9.8-0.2,17.6,8.2,17.6
                                        c8.4,0,15.8-7,21-17.4c2.6,0,4.4,1.6,3.8,5.2c-1.6,10.2-16.6,29.6-35.2,29.6c-15,0-24.2-10-24.2-25c0-5.2,1.8-16.2,3-22.8
                                        L516.3,127.3z"/>
                                    <path class="st0" d="M561.1,153.9c0-35.4,27-56.8,53.6-56.8c20.4,0,28.6,10.6,28.6,20.8c0,18.2-21,30.2-56.2,36.8
                                        c1.2,15,11.6,26.6,28.6,26.6c21.4,0,33.6-10.6,39-19c2.6,0,4,1.6,3.2,5.2c-1.8,8.8-21,29.6-51.6,29.6
                                        C580.1,197.1,561.1,180.9,561.1,153.9z M587.3,145.3c24.4-5.8,34.6-18,34.6-31.2c0-4.2-2.8-7-7-7
                                        C603.5,107.1,589.5,120.3,587.3,145.3z"/>
                                    <path class="st0" d="M732.3,194.9c-7.8,46.4-26.4,72.2-56,72.2c-13.6,0-22.4-8.6-22.4-21c0-11.8,7-22.6,16.8-31
                                        c9.8-8.6,20.2-14.6,36.6-22.6l4.4-25.8c-2.6,5-5.6,9.4-8.4,13.4c-8.4,11.4-17.2,17-28.2,17c-13.4,0-21.8-9.4-21.8-23.2
                                        c0-7.4,0.6-14.2,2.4-24.6l5.8-33.2c2.2-12.6,0.2-17.2,0.2-17.2s3-1.8,10.4-1.8c15.4,0,17.2,5.8,14.8,19.8l-8,46.2
                                        c-2,11.6,0.8,16.6,6.6,16.6c4.4,0,9.6-5.4,14.8-13.4c7.8-11.8,15.8-30,19.8-50.2c2.4-12.6,0.2-17.2,0.2-17.2s3-1.8,10.4-1.8
                                        c15.4,0,17.2,5.8,14.8,19.8L732.3,194.9z M705.1,205.1c-13.2,6.8-22.4,12.6-28.2,18.4c-7.8,7.6-11.8,14.4-11.8,21.4
                                        c0,5.2,3,9,9.2,9C688.3,253.9,699.1,237.1,705.1,205.1z"/>
                                </g>
                            </svg>
                    </center>
                </h1>
                <br/>
                <form className="form" noValidate onSubmit={this.onSubmit}>
                    <div>
                        <TextField label="Name" variant="outlined" id="name" type="text"
                                onChange={this.onChange} value={this.state.name} error={errors.name}
                                className={classnames("", {
                                    invalid: errors.name
                                })}/>
                        <span className="red-text">{errors.name}</span>
                    </div>
                    <br/>
                    <div>
                        <TextField label="Email" variant="outlined" margin="normal" id="email" type="email"
                                onChange={this.onChange} value={this.state.email} error={errors.email}
                                className={classnames("", {
                                    invalid: errors.email
                                })}/>
                        <span className="red-text">{errors.name}</span>
                    </div>
                    <br/>
                    <div>
                        <TextField label="Password" variant="outlined" margin="normal" id="password" type="password"
                                onChange={this.onChange} value={this.state.password} error={errors.password}
                                className={classnames("", {
                                    invalid: errors.password
                                })}/>
                        <span className="red-text">{errors.password}</span>
                    </div>
                    <br/>
                    <div>
                        <TextField label="Confirm Password" variant="outlined" margin="normal" id="password2" type="password"
                                onChange={this.onChange} value={this.state.password2} error={errors.password2}
                                className={classnames("", {
                                    invalid: errors.password2
                                })}/>
                        <span className="red-text">{errors.password2}</span>
                    </div>
                    <CreateAccountButton name={this.state.name} email={this.state.email} password={this.state.password}/>
                </form>
                <br/>
            </div>
        );
    }
}

CreateAccountPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(CreateAccountPage));