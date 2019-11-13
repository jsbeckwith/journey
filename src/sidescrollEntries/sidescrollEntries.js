import axios from 'axios';
import React from 'react';
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

	getPosts = () => {
		axios.get("http://localhost:4000/posts/")
			.then((response) => {
				console.log("before");
				this.setState({entries: response.data});
				console.log("after");
			})
			.catch( (error) => {
                console.log(error);
            });
	}

	componentDidMount = () => {
		console.log("HI!!!!!!");
	    this.getPosts();
	}

	render () {

	    var entries = this.state.entries;

		return (
			<div className="homepage-sidescroll-entries">
					{/* loop through all entries and pass info as props to sidescrollPanel */}
					{entries.slice(0).reverse().map((entry) => {
						return (
							<SidescrollPanel id={entry._id} author={entry.author} date={entry.date} content={entry.content}/>
						)
					})}
					<CalendarPanel/>
			</div>
		);
	}
}

export default SidescrollEntries;