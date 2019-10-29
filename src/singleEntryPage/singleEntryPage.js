import React from 'react';

import './singleEntryPage.scss';
import '../universalStyle.scss';
import EditButton from '../buttons/editButton.js';
import SingleEntryHeader from "./singleEntryHeader.js";

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
	}
	/* this function determines whether the page is a completely new entry
	*  or if it is an edit of an entry made earlier that day
	*  based on if there is already an entry save for the current day.
	*  The page mode is then passed down to child components as a prop
	*/
	determineEdit = () => {
		return this.props.entry.date == this.props.todayDate
	}

	render () {
		let pageMode = this.determineEdit()

		return (
			<div>
				<SingleEntryHeader date={this.props.entry.date} author={this.props.entry.author} pageMode={pageMode}/>
				<br/>
				<p class="text"> {this.props.entry.text} </p>
			</div>
		);
	}
}

export default SingleEntryPage;

