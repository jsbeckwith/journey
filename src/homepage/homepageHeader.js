import React from 'react';
import SubmitSaveButton from '../buttons/submitSaveButton.js'
import DeleteButton from '../buttons/deleteButton.js';

class HomepageHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className="homepage-header">
				<h2>Hello, {this.props.entry.author}!</h2>
                <br/>
                <h3>Today is {this.props.todayDate}.</h3>
			</div>
		);
	}
}

export default HomepageHeader;
