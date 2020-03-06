// packages etc
import React from 'react';
import { ContextProvider } from './context.js';
import { Route, Switch } from 'react-router-dom';

// components
import Ribbon from './ribbon.js';
import Nav from './nav.js';
import NewEntryPage from './newEntryPage/newEntryPage.js';
import SingleEntryPage from './singleEntryPage/singleEntryPage.js';
import HomePage from './homepage/homepage.js';
import LoginPage from './auth/login/loginPage.js';
import CreateAccountPage from './auth/createAccountPage/createAccountPage.js';
import EditPage from './editPage/editPage.js';
import CalendarPage from './calendarPage/calendarPage.js';
import AddFriendPage from './addFriendPage/addFriendPage.js';

// style
import './universalStyle.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.createTodayDate();
	}

	// TODO delete this probably
	// correctly/nicely format our dates as strings (originally: unix epoch format)
	createTodayDate() {
		let date = new Date();
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
  						"July", "August", "September", "October", "November", "December"];
		// create a string with the full day of the week, month, day of the month, and year
		let dateString = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
						+ ", " + date.getFullYear();
		return dateString;
	}

	createRoutes(entry) {
		return(
			<Switch>
				<Route exact path="/homepage">
					<HomePage entry={entry}/>
				</Route>
				<Route exact path="/newEntryPage">
					<NewEntryPage/>
				</Route>
				<Route exact path="/post/:id" component={SingleEntryPage}/>
				<Route exact path="/post/edit/:id" component={EditPage}/>
				<Route exact path="/calendarPage">
					<CalendarPage/>
				</Route>
				<Route exact path="/addFriendPage">
					<AddFriendPage resultsVisible={false}/>
				</Route>
			</Switch>
		);
	}

	render() {
		let dateString = this.createTodayDate();

		let entry = {
						'author': 'friend',
						'text': '',
						'date': dateString
					}

		let routes = this.createRoutes(entry);
		
		return (
			<Switch>
					<Route exact path="/">
						<ContextProvider>
							<LoginPage/>
						</ContextProvider>
					</Route>
					<Route exact path="/createAccount">
						<ContextProvider>
							<CreateAccountPage/>
						</ContextProvider>
					</Route>
					<Route>
						<ContextProvider>
							<div>
								<Nav/>
								<Ribbon/>
								<div className="page-body">
									{routes}
								</div>
							</div>
						</ContextProvider>
					</Route>
			</Switch>
		);
	}
}

export default App;