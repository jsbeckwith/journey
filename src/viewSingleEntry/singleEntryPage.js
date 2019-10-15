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
			date: 123,
			content: ''
		}
	}

	getPromise = () => {
		return axios.get("http://localhost:4000/posts/" + this.props.id).then(response => {
		    return response.data
	  	});
	}

	parsePost = () => {
		this.getPromise().then(data => {
			this.setState({
				author: data.author,
				date: data.date,
				content: data.content
			});
		})
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
