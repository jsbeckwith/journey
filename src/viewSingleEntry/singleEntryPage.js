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
				<SingleEntryHeader date={this.props.date}/>
        <p class="entry-text"> here is some text :^) </p>
			</div>
		);
	}
}

export default SingleEntryPage;
