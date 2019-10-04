import React from 'react';

import './App.scss';
import NewEntryPage from './newEntryPage/newEntryPage';
import Base from './base.js';
import SingleEntryPage from './viewSingleEntry/singleEntryPage.js';

class App extends React.Component {
	constructor (props) {
		super (props);
	}

	render() {
		let todayDate = new Date().toDateString();

		return (
			// for now the app just renders the homepage body but later
			// we'll add logic to determine which page should be loaded i think
			// navbar will also go here
			<div>
				<SingleEntryPage date={todayDate}/>
			</div>
		);
	}
}

export default App;
