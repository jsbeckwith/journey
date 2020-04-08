import axios from 'axios';
import React from 'react';
import './sidescrollEntries.scss';
import SidescrollPanel from './sidescrollPanel.js';
import CalendarLinkPanel from './calendarLinkPanel';

class SidescrollEntries extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			entriesToRender: []
		}

		this.getPosts();
	}

	// queries db for posts and sets state's entriesToRender
	getPosts = () => {
		// TODO ADAPT FOR MULTIPLE USERS
		axios.get("http://localhost:4000/posts/posts")

		.then((response) => {
			if (this.props.sideScrollEntriesType === "homepage") {
				// for homepage, only get user's own posts
				let allSelfEntries = response.data;
				// show only ten most recent, unless there aren't enough
				let numEntriesShown = response.data.length < 10
					? response.data.length
					: 10;
				let start = allSelfEntries.length - numEntriesShown;
				let mostRecentSelfEntries = allSelfEntries.slice(start).reverse();
				this.setState({entriesToRender: mostRecentSelfEntries});
			} else {
				// for calendar, get self and all friends' posts for all time
				// TODO
				let mostRecentEntries =  response.data.reverse();
				this.setState({entriesToRender: mostRecentEntries});
			}
		})
		.catch((error) => {
			console.log(error);
		});
	}

	render () {
		let entries = this.state.entriesToRender;
		let isHomepage = this.props.sideScrollEntriesType === "homepage";
		let noEntries = entries.length === 0;
		
		if (noEntries) {
			return (
				<div className="sidescroll-entries">
					<div className="no-entries-wrapper">
						<div className="no-entries-text">
							You don't have any entries to display yet.
							<br/>
							Try <a href="/newEntryPage">writing your first entry!</a>
						</div>
					</div>
				</div>
			);
		} else if (isHomepage) {
			return (			
				<div className="sidescroll-entries" id={"homepage-sidescroll-entries"}>
						{/* loop through all entries and pass info as props to sidescrollPanel*/}
						{entries.map((entry) => {
							return (
								<SidescrollPanel
									sideScrollEntriesType={this.props.sideScrollEntriesType}
									entries={entry}  // in homepage case, props.entries will be a singular entry
									key={entry._id}
								/>
							);
						})}
						<CalendarLinkPanel/>
				</div>
			);
		} else {  // calendar page case
			return (
				<div className="sidescroll-entries" id={"calendar-sidescroll-entries"}>
					{/* TODO group entries by date */}
					{entries.map((dateGroup) => {
						return (
							<SidescrollPanel
								sideScrollEntriesType={this.props.sideScrollEntriesType}
								entries={dateGroup}  // in calendar case, props.entries will be an array of entries made on one date
								// set panel id as dateGroup's date
							/>
						);
					})}
				</div>
			)
		}
	}
}

export default SidescrollEntries;