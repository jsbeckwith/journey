import React from 'react';
import {Link} from 'react-router-dom';
import SidescrollCalendarPanelsContent from './sidescrollCalendarPanelsContent.js';

class SidescrollPanel extends React.Component {
	constructor (props) {
		super(props);
	}

	stringify = () => {
		return this.props.id.toString();
	}

	renderHTML = () => {
		return {__html: this.props.content};
	}

	// correctly/nicely format dates as strings (originally: unix epoch format)
	// does not include year
	formatEntryDate(entryDate) {
		let dateProp = new Date(entryDate);

		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
  						"July", "August", "September", "October", "November", "December"];
		// create a string with the full day of the week, month, day of the month, and year
		let formattedDate = days[dateProp.getDay()] + ", " + months[dateProp.getMonth()] + " " + dateProp.getDate();
		return formattedDate;
	}

	render () {
		let idString = this.stringify();
		let formattedEntryDate = this.formatEntryDate(this.props.date);
		let panelID = this.props.sideScrollEntriesType == "homepage"
			? "homepage-sidescroll-panel"
			: "calendar-sidescroll-panel";
		let panelContent = this.props.sideScrollEntriesType == "homepage"
			// for homepage, render singular user's entry for this day
			? <div dangerouslySetInnerHTML={this.renderHTML()}/>
			// for calendar, load all friends' entries for this day
			: <SidescrollCalendarPanelsContent/>;

		return (
			<Link to = {{pathname: "/post/" + idString}}>
				<div className="sidescroll-panel" id={panelID}>
					<div>
						<div className="panel-date-header"> {formattedEntryDate} </div>
						<div className="panel-content">
							{panelContent}
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default SidescrollPanel;