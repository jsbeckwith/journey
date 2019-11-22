import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import './universalStyle.scss';
import Ribbon from './ribbon.js';
import Nav from './nav.js';
import NewEntryPage from './newEntryPage/newEntryPage.js';
import SingleEntryPage from './singleEntryPage/singleEntryPage.js';
import HomePage from './homepage/homepage.js';
import LoginPage from './auth/login/loginPage.js';
import CreateAccountPage from './auth/createAccountPage/createAccountPage.js';
import EditPage from './editPage/editPage.js';
import CalendarPage from './calendarPage/calendarPage.js';

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
					<NewEntryPage todayDate={todayDate}/>
				</Route>
				<Route exact path="/post/:id" component={SingleEntryPage}/>
				<Route exact path="/post/edit/:id" component={EditPage}/>
				<Route exact path="/calendarPage">
					<CalendarPage/>
				</Route>
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
			<Switch>
				<Route exact path="/">
					<LoginPage/>
				</Route>
				<Route exact path="/createAccount">
					<CreateAccountPage/>
				</Route>
				<Route>
					<div>
						<Nav/>
						<Ribbon/>
						<div className="page-body">
							{routes}
						</div>
					</div>
				</Route>
			</Switch>
		);
	}
}

export default App;