import axios from 'axios';
import React from 'react';

import './singleEntryPage.scss';
import '../universalStyle.scss';

import SingleEntryHeader from "./singleEntryHeader.js";
import ContextConsumer from '../context.js';

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			id: this.props.match.params,
			entry: {},
		};
	}

	setEntry = (entry) => {
		this.setState({entry: entry});
	}

	renderHTML = (txt) => {
		return {__html: txt};
	}

	render () {
		var entry = this.state.entry

		return(
			<div>
				<ContextConsumer>
					{(value) => (
						<SingleEntryHeader
							id={this.state.id}
							setEntry={this.setEntry}
							user={value.user}
						/>
					)}
				</ContextConsumer>
				<div className="single-entry-text-box">
					<div className="text" dangerouslySetInnerHTML={this.renderHTML(entry.content)}></div>
				</div>
			</div>
		)
	}
}

export default SingleEntryPage;

