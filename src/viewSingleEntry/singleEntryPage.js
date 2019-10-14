import React from 'react';

import axios from 'axios';
import './singleEntryPage.scss';
import '../universalStyle.scss';
import EditButton from './editButton.js';
import SingleEntryHeader from "./singleEntryHeader.js";

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			author: '',
			date: 0,
			content: ''
		}
	}

	

	parsePost = () => {
		axios.get("http://localhost:4000/posts/{this.props.id}")
			.then(post => 
				  {
				  	this.setState({
						author: post.author,
						date: post.date,
						content: post.content
					});
				  });
	}

	componentDidMount() {
		this.parsePost();
	}

	render () {
		return (
			<div>
				<SingleEntryHeader date={this.state.date} author={this.state.author}/>
				<br/>
				<p class="text"> {this.state.content} </p>
			</div>
		);
	}
}

export default SingleEntryPage;
