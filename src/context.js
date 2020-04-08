import React from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";

// global state for whole app, esp authed user

// also includes util functions

const context = React.createContext({});

export class ContextProvider extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			user: this.setUserFromStorage(),
			date: new Date(),  // unix epoch format
			dateString: this.createDateString(new Date()),  // stringified for rendering
		};

		this.clock();
	}

	// login sets a user, logout sets user to empty object
	setUser = (user) => {
		this.setState({user: user});
	}

	// called on page refreshes/redirects
	setUserFromStorage = () => {
		let token = sessionStorage.getItem("jwtToken");
		if (token) {
			this.setAuthToken(token);
			return jwt_decode(token);
		} else {
			return {};
		}
	}

	setDate = () => {
		this.setState({date: new Date()});
		this.setDateString();
	}

	setDateString = () => {
		this.setState({dateString: this.createDateString(this.state.date)});
	}

	// correctly/nicely format any date as a string (originally: unix epoch format)
	createDateString = (date) => {
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
						"July", "August", "September", "October", "November", "December"];
		// create a string with the full day of the week, month, day of the month, and year
		let dateString = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
						+ ", " + date.getFullYear();
		return dateString;
	}

	// updates dates to reflect current time
	// we only need down to the day accuracy (not minutes or secs)
	// so this is called every minute in case midnight has passed
	// (still not perfect accuracy but good enough)
	clock = () => {
		this.setDate();  // TODO this line causes error bc it calls setState before render
		setTimeout(this.clock, 60000);

		// // TODO Check for expired token
		// const currentTime = this.date / 1000; // to get in milliseconds
		// if (decoded.expiresIn < currentTime) {
		//   this.logoutUser();
		// }
	}

	setAuthToken = token => {
		if (token) {
			// Apply authorization token to every request if logged in
			axios.defaults.headers.common["Authorization"] = token;
		} else {
			// Delete auth header
			delete axios.defaults.headers.common["Authorization"];
		}
	};

	// this function is called by both login page and create account page
	// only called after successful info already entered and verified
	setLoggedIn = (token) => {
		sessionStorage.setItem("jwtToken", token);
		// Set token to Auth header
		this.setAuthToken(token);

		// Decode token to get user data
		try {
			let decoded = jwt_decode(token);
			// Set current user
			this.setUser(decoded);
		} catch(error) {
			console.log("invalid token format");
		}
		window.location = "/homepage";
	}

	logoutUser = () => {
		window.location = "/";
		sessionStorage.removeItem("jwtToken");
		// Remove auth header for future requests
		this.setAuthToken(false);
		// No current user
		this.setUser({});
	};

	// get a stringified version of a post or user id
	// for use in express queries
	getStringID(id) {
		let jsonString = JSON.stringify(id);
		// extract id from JSON string
		let shortString = jsonString.slice(7, 31);
		return shortString;
	}

	// get specific post using string id
	getPostByID = (id) => {
		console.log("called with id", id);
		let idString = this.getStringID(id);
		axios.get("http://localhost:4000/posts/" + idString)
			.then((response) => {
				console.log("postbyid", response.data);
				return response.data;
			})
			.catch( (error) => {
                console.log(error);
            });
	}

	// get specific user using string id
	getUserByID = (id) => {
		let idString = this.getStringID(id);
		axios.get("http://localhost:4000/users/" + idString)
			.then((response) => {
				return response.data;
			})
			.catch( (error) => {
                console.log(error);
            });
	}

	// post info only includes user id,
	// so we need to retrieve other user info (username etc)
	getUserByPostID = (id) => {
		console.log("calling with id", id);
		let post = this.getPostByID(id);
		console.log("post", this.getPostByID(id));
		let userId = post.author;
		return this.getUserByID(userId);
		return this.user;
	}

	render() {
		const { children } = this.props;
	
		return (
			<context.Provider
				value={{
					user: this.state.user,
					date: new Date(),
					dateString: this.createDateString(new Date()),
					setLoggedIn: this.setLoggedIn,
					logoutUser: this.logoutUser,
					getStringID: this.getStringID,
					getPostByID: this.getPostByID,
					getUserByID: this.getUserByID,
					getUserByPostID: this.getUserByPostID,
				}}
			>
				{children}
			</context.Provider>
		);
	}
}



export { context };

const ContextConsumer = context.Consumer;
export default ContextConsumer;