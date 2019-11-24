import axios from 'axios';
import React from 'react';
import './sidescrollEntries.scss';
import SidescrollPanel from './sidescrollPanel.js';
import CalendarLinkPanel from './calendarLinkPanel';

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
				this.setState({entries: response.data});
			})
			.catch( (error) => {
                console.log(error);
            });
	}

	componentDidMount = () => {
	    this.getPosts();
	}

	render () {
		let entries = this.state.entries;
		let noEntries = this.state.entries.length === 0;
		let wrapperID = this.props.sideScrollEntriesType == "homepage"
			? "homepage-sidescroll-entries"
			: "calendar-sidescroll-entries";
		let shouldRenderCalendarLink = this.props.sideScrollEntriesType == "homepage"
			// only render calendar link panel if currently on homepage
			? <CalendarLinkPanel/>
			: null;
		
		if (noEntries) {  // no entries to display in panels
			return (
				<div className="sidescroll-entries" id={wrapperID}>
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
			let start = entries.length - 10;
			return (			
				<div className="sidescroll-entries" id={wrapperID}>
						{/* loop through all entries and pass info as props to sidescrollPanel */}
						{entries.slice(start).reverse().map((entry) => {
							return (
								<SidescrollPanel
									sideScrollEntriesType={this.props.sideScrollEntriesType}
									id={entry._id}
									author={entry.author}
									date={entry.date}
									content={entry.content}
								/>
							)
						})}
						{shouldRenderCalendarLink}
				</div>
			);
		}
	}
}

export default SidescrollEntries;