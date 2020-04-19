// libraries
import React from 'react';

// components
import SingleEntryHeader from "./singleEntryHeader.js";
import ContextConsumer from '../context.js';

// styles
import './singleEntryPage.scss';
import '../universalStyle.scss';

// utils
import {createDateString, getPostByID, getUserByPostID} from '../utils.js';
import handleError from '../handleError';

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			id: this.props.match.params,
			entry: {},
			author: {},
			dateString: {},
		};

		this.setEntry();
		this.setAuthor();
	}

	setEntry = () => {
		getPostByID(this.state.id)
			.then((response) => {
				this.setState({entry: response.data});
				let dateString = createDateString(response.data.date);
				console.log("date", dateString);
				this.setState({dateString: dateString});
			}).catch((error) => {
				error(handleError(error))
		});
	}

	setAuthor = () => {
		getUserByPostID(this.state.id)
			.then((response) => {
				this.setState({author: response.data});
			}).catch((error) => {
				error(handleError(error))
		});
	}

	renderHTML = (txt) => {
		return {__html: txt};
	}

	render () {
		return(
			<div>
				<ContextConsumer>
					{(value) => (
						<SingleEntryHeader
							id={this.state.id}
							entry={this.state.entry}
							author={this.state.author}
							dateString={this.state.dateString}
							user={value.user}
						/>
					)}
				</ContextConsumer>
				<div className="single-entry-text-box">
					<div className="text" dangerouslySetInnerHTML={this.renderHTML(this.state.entry.content)}></div>
				</div>
			</div>
		)
	}
}

export default SingleEntryPage;

