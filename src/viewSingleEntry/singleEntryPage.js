import React from 'react';

import './singleEntryPage.scss';
import '../universalStyle.scss';
import EditButton from './editButton.js';
import SingleEntryHeader from "./singleEntryHeader.js";

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<SingleEntryHeader date={this.props.entry.date} author={this.props.entry.author}/>
				<br/>
				<p class="text"> {this.props.entry.text} </p>
			</div>
		);
	}
}

export default SingleEntryPage;
