import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./privateRoute";
import './universalStyle.scss';
import Ribbon from './ribbon.js';
import Nav from './nav.js';
import NewEntryPage from './newEntryPage/newEntryPage.js';
import SingleEntryPage from './singleEntryPage/singleEntryPage.js';
import HomePage from './homepage/homepage.js';
import LoginPage from './login/loginPage.js';
import CreateAccountPage from './createAccountPage/createAccountPage.js';
import EditPage from './editPage/editPage.js';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
  // Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Logout user
	  store.dispatch(logoutUser());
	  // Redirect to login
	  window.location.href = "./login";
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	// correctly/nicely format our dates as strings (originally: unix epoch format)
	createTodayDate() {
		let date = new Date();
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
  						"July", "August", "September", "October", "November", "December"];
		// create a string with the full day of the week, month, day of the month, and year
		let todayDate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
						+ ", " + date.getFullYear();
		return todayDate;
	}

	createRoutes(entry) {
		let todayDate = this.createTodayDate();

		return(
			<Switch>
				<Route exact path="/homepage">
					<HomePage entry={entry} todayDate={todayDate}/>
				</Route>
				<Route exact path="/newEntryPage">
					<NewEntryPage todayDate={todayDate} editText=""/>
				</Route>
				<Route exact path="/post/:id" component={SingleEntryPage}/>
				<Route exact path="/post/edit/:id" component={EditPage}/>
			</Switch>
		);
	}

	render() {
		let todayDate = this.createTodayDate();

		let entry = {'author': 'Hava',
					 'text': 'uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu ',
					 'date': todayDate }

		let routes = this.createRoutes(entry);
		
		return (
			<Provider store={store}>
				<Switch>
					<Route exact path="/" component={LoginPage}/>
					<Route exact path="/createAccount" component={CreateAccountPage}/>
					<Route>
						<div>
							<Nav/>
							<Ribbon/>
							<div class="page-body">
								{routes}
							</div>
						</div>
					</Route>
				</Switch>
			</Provider>
		);
	}
}

export default App;