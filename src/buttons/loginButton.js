import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';
import '../auth/auth.scss';

class LoginButton extends React.Component {

	constructor(props) {
		super(props)

	}

	login () {
		// axios.post("http://localhost:4000/post", newPost)
		// 	.then(res => {
		// 		this.setState({user: res.data});
		// 		console.log(res.data);
		// 		window.location = "/post/" + this.state.id;
		// 	})
		// 	.catch( (error) => {
		// 		console.log(error);
		// 	});
		// // this.context.setUser(loggedInUser);
		// // if login successful
		// 	window.location = "http://localhost:3000/homepage";
	}

	render() {
		console.log("KAOKJGDOJGODFNDKFO", this.context.date)
		return (
			<Tooltip title="login">
				<button className="login-button auth-button journey-button" onClick={this.login()}>
					login
				</button>
			</Tooltip>
		);
	}

}

export default LoginButton;