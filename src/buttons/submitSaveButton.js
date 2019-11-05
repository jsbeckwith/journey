import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

class SubmitSaveButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            author: 'someuser123',
            dt: Date.now(),
            content: 'hi',
            entries: []
        }
	}

	// make sure our state has the most recently-fetched
	// version of the quill's content
	refreshText = () => {
		this.setState({content: this.props.qText});
		return this.state.content;
	}

	stringify = (s) => {
		return s.toString();
	}

	redirect = (p) => {
		this.context.router.push({
			pathname: '/post/' + this.stringify(p._id),
			state: {id: p._id, author: p.author, date: p.date, content: p.content}
		});
	}

	getPosts = () => {
		axios.get("http://localhost:4000/posts/")
			.then((response) => {
				this.setState({entries: response.data});
			})
			.catch( (error) => {
                console.log(error);
            });
	}
	
	post = () => {
		var c = this.refreshText();

		// create post object to push to database
		const newPost = {
			"author": this.state.author,
			"date": this.state.dt,
			"content": c
		}

		// add item to database
		axios.post("http://localhost:4000/posts/add", newPost)
			.then(res => console.log(res.data));

		/* const mongo = require('mongodb').MongoClient;
		const url = 'mongodb://127.0.0.1:27017/posts';
		mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},
			(err, client) => {
				if (err) throw err;
				const db = client.db('site');
				const col = db.collection('posts');

				let mostRecent = db.col.find().sort({"datetime": -1}).limit(1);
				this.redirect(mostRecent);

				client.close();
			});*/

		// redirect to post
		let posts = this.state.entries;
		let lastPost = posts[posts.length - 1];
		this.redirect(lastPost);

	}

	render() {
		return (
			<Tooltip title="save">
				<button className="submit-save-button header-button journey-button" onClick={() => {this.post(this.refreshText()); alert("saved")}}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path id="save" className="cls-1" d="M1522,360h-20a2,2,0,0,1-2-2V338a2,2,0,0,1,2-2h15v0.006a1.016,1.016,0,0,1,.77.283l5.91,5.911a1.017,1.017,0,0,1,.29.8H1524v15A2,2,0,0,1,1522,360Zm-15-2h10v-7h-10v7Zm8-20h-6v6h6v-6Zm7,5.477-5-5V344a2,2,0,0,1-2,2h-6a2,2,0,0,1-2-2v-6h-5v20h3v-7a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2v7h3V343.477Z" transform="translate(-1500 -336)"/>
					</svg>
				</button>
			</Tooltip>
		);
	}
}
export default withRouter (SubmitSaveButton);