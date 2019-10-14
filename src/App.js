import React from 'react';
import logo from './logo.svg';
import NewEntryPage from './newEntryPage/newEntryPage.js';
import Ribbon from './ribbon.js';
import './universalStyle.scss';
import './App.scss';
import SingleEntryPage from './viewSingleEntry/singleEntryPage.js';
//import MultipleEntriesPage from './viewMultipleEntries/sidescrollEntries.js';

class App extends React.Component {
	constructor (props) {
		super (props);
	}

	render() {
		let date = new Date();
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
  											"July", "August", "September", "October", "November", "December"];
		let todayDate = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
										+ ", " + date.getFullYear();

		let entry = {'author': 'Hava',
		 						 'text': 'uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu ',
		 						 'date': todayDate };
		const id = "5d9f9ac8742cb4244a3a03bd";

		return (
			// for now the app just renders the homepage body but later
			// we'll add logic to determine which page should be loaded i think
			<div>
				<Ribbon/>
				<SingleEntryPage id={id}/>
			</div>
		);
	}
}

export default App;