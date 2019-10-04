import React from 'react';

import './App.css';
import NewEntryPage from './newEntryPage/newEntryPage';
import Base from './base.js';
import SingleEntryPage from './viewSingleEntry/singleEntryPage.js';

class App extends React.Component {
	constructor (props) {
		super (props);
	}

	render() {
		return (
			// for now the app just renders the homepage body but later
			// we'll add logic to determine which page should be loaded i think
			// navbar will also go here
			<div>
				<SingleEntryPage/>
			</div>
		);
	}
}

export default App;
