import React from 'react';
import SubmitSaveButton from '../newEntryPage/submitSaveButton.js'

class HomepageHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className="homepage-header">
				<h2>Hello, {this.props.entry.author}!</h2>
                <br/>
                <h3>Today is {this.props.todayDate}</h3>
                <SubmitSaveButton/>
			</div>
		);
	}
}

export default HomepageHeader;
