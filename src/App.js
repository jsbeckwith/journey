import React from 'react';
import logo from './logo.svg';
import NewEntryPage from './newEntryPage/newEntryPage';
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

		return (
			// for now the app just renders the homepage body but later
			// we'll add logic to determine which page should be loaded i think
			// navbar will also go here
			<div>
				// pass todayDate as a prop to NewEntryPage
				<NewEntryPage date={todayDate}/>
			</div>
		);
	}
}

export default App;
