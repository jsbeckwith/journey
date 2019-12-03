import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {getPosts} from '../actions/postActions.js';
import PropTypes from "prop-types";
import './sidescrollEntries.scss';
import SidescrollPanel from './sidescrollPanel.js';
import CalendarPanel from './calendarPanel';

class SidescrollEntries extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			entries: [],
			s: "hey"
		}
	}

	// getPosts = () => {
	// 	axios.get("http://localhost:4000/posts/")
	// 		.then((response) => {
	// 			console.log("before");
	// 			this.setState({entries: response.data});
	// 			console.log("after");
	// 		})
	// 		.catch( (error) => {
    //             console.log(error);
    //         });
	// }

	componentDidMount = () => {
		//this.getPosts();
		this.props.getPosts();
	}

	render () {
		// var entries = this.state.entries;
		// let noEntries = this.state.entries.length === 0;
		var entries = this.props.posts;
		let noEntries = this.props.posts.length === 0;
		
		if (noEntries) {  // no entries to display in panels
			return (
				<div className="homepage-sidescroll-entries">
					<div className="no-entries-wrapper">
						<div className="no-entries-text">
							You don't have any entries to display yet.
							<br/>
							Try <a href="/newEntryPage">writing your first entry!</a>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="homepage-sidescroll-entries">
						{/* loop through all entries and pass info as props to sidescrollPanel */}
						{entries.slice(entries.length-10).reverse().map((entry) => {
							//this.state.id = entry._id;
							return (
								<SidescrollPanel id={entry._id} author={entry.author} date={entry.date} content={entry.content}/>
							)
						})}
						<CalendarPanel/>
				</div>
			);
		}
	}
}

SidescrollEntries.propTypes = {
	getPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth,
	posts: state.posts.posts,
    errors: state.errors
});

export default connect (mapStateToProps, {getPosts})(SidescrollEntries);