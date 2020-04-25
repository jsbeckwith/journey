// libraries
import React from 'react';
import axios from 'axios';

// components
import SingleEntryHeader from "./singleEntryHeader.js";
import ContextConsumer from '../context.js';

// styles
import './singleEntryPage.scss';
import '../universalStyle.scss';

// utils
import { getStringID, createDateString } from '../utils.js';

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			id: this.props.match.params,
			entry: {},
			author: {},
			dateString: '',
		};
	}

	componentDidMount = () => {
		this.getPost();
		//this.setDateString();
	}

	getPost = () => {
		let idString = getStringID(this.state.id);
		axios.get("http://localhost:4000/posts/" + idString)
			.then((response) => {
				// set entry
				this.setState({entry: response.data});
				// set author of entry
				this.getAuthor();
				// set date of entry
				this.setDateString();
			})
			.catch((error) => {
                console.log(error);
            });
	}

	getAuthor = () => {
		axios.get("http://localhost:4000/users/" + this.state.entry.author)
			.then((response) => {
				this.setState({author: response.data});
			})
			.catch((error) => {
                console.log(error);
            });
	}

	setDateString = () => {
		let entryDate = new Date(this.state.entry.date);
		let dateString = createDateString(entryDate);
		this.setState({dateString: dateString});
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

