import React from 'react';
import SubmitSaveButton from '../newEntryPage/submitSaveButton.js'

class HomepageHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
    console.log("date:", this.props);

		return (
			<div className="homepage-header">
				<h2>Hello, {this.props.entry.author}!</h2>
                <br/>
                <h3>Today is {this.props.entry.date}</h3>
                <SubmitSaveButton/>
			</div>
		);
	}
}

export default HomepageHeader;
