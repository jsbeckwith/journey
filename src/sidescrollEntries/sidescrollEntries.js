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
	    this.getPosts();
	}

	render () {
		var entries = this.state.entries;
		let noEntries = this.state.entries.length === 0;
		
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
			// only show 10 entries
			let start = entries.length - 10;

			return (
				<div className="homepage-sidescroll-entries">
						{/* loop through all entries and pass info as props to sidescrollPanel */}
						{entries.slice(start).reverse().map((entry) => {
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

export default SidescrollEntries;