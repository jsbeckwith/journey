import React from 'react';

import './singleEntryPage.scss';
import '../universalStyle.scss';
import EditButton from '../buttons/editButton.js';
import SingleEntryHeader from "./singleEntryHeader.js";

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			id: this.props.id,
		};
	}

	render () {
		return (
			<div>
				<SingleEntryHeader id={this.props.id} date={this.props.date} author={this.props.author}/>
				<br/>
				<p class="text"> hi {this.props.content} </p>
			</div>
		);
	}
}

export default SingleEntryPage;

