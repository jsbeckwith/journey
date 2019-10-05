import React from 'react';
import logo from './logo.svg';
import NewEntryPage from './newEntryPage/newEntryPage';
import './universalStyle.scss';

class App extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		let todayDate = new Date().toDateString();

		return (
			// for now the app just renders the homepage body but later
			// we'll add logic to determine which page should be loaded i think
			// navbar will also go here
			<div>
				<NewEntryPage date={todayDate}/>
			</div>
		);
	}
}

export default App;
