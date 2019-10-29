import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import './universalStyle.scss';
import Ribbon from './ribbon.js';
import Nav from './nav.js';
import NewEntryPage from './newEntryPage/newEntryPage.js';
import SingleEntryPage from './singleEntryPage/singleEntryPage.js';
import HomePage from './homepage/homepage.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	createDate() {
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
		let todayDate = this.createDate();

		return(
			<Switch>
				<Redirect from="/" exact to="/homepage"/>
				<Route path="/homepage">
					<HomePage entry={entry} todayDate={todayDate}/>
				</Route>
				<Route exact path="/newEntryPage">
					<NewEntryPage todayDate={todayDate}/>
				</Route>
				<Route exact path="/post/:id">
					<SingleEntryPage />
				</Route>
			</Switch>
		);
	}

	render() {
		let todayDate = this.createDate();

		let entry = {'author': 'Hava',
					 'text': 'uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu ',
					 'date': todayDate }

		let routes = this.createRoutes(entry);
		
		return (
			<div>
				<Nav/>
				<Ribbon/>
				<div class="page-body">
					{routes}
				</div>
			</div>
		);
	}
}

export default App;