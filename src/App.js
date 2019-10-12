import React from 'react';
import logo from './logo.svg';
import Ribbon from './ribbon.js';
import Nav from './nav.js';
import NewEntryPage from './newEntryPage/newEntryPage.js';
import SingleEntryPage from './viewSingleEntry/singleEntryPage.js';
import SidescrollEntries from './viewMultipleEntries/sidescrollEntries.js';
import HomePage from './homepage';
import './universalStyle.scss';

class App extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		let date = new Date();
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
  						"July", "August", "September", "October", "November", "December"];
		// create a string with the full day of the week, month, day of the month, and year
		let todayDate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
						+ ", " + date.getFullYear();

		let entry = {'author': 'Hava',
					 'text': 'uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu ',
					 'date': todayDate }

		
		return (
			// for now the app just renders the homepage body but later
			// we'll add logic to determine which page should be loaded i think
			<div>
				<Nav/>
				<Ribbon/>
				<div class="page-body">
					<HomePage entry={entry}/>
				</div>
			</div>
		);
	}
}

export default App;
