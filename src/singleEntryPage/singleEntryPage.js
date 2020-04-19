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
import { getStringID } from '../utils.js';

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			id: this.props.match.params,
			entry: {},
			author: {},
		};
	}

	componentDidMount = () => {
		this.getPost();
	}

	getPost = () => {
		let idString = getStringID(this.state.id);
		axios.get("http://localhost:4000/posts/" + idString)
			.then((response) => {
				this.setState({entry: response.data});
				this.getAuthor();
			})
			.catch((error) => {
                console.log(error);
            });
	}

	getAuthor = () => {
		let idString = getStringID(this.state.entry.author);
		axios.get("http://localhost:4000/users/" + idString)
			.then((response) => {
				this.setState({author: response.data});
			})
			.catch((error) => {
                console.log(error);
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
							entry={this.state.entry}
							author={this.state.author}
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

