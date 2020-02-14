import React from 'react';
import SidescrollCalendarPanelsContent from './sidescrollCalendarPanelsContent.js';
import SidescrollHomepagePanelsContent from './sidescrollHomepagePanelsContent.js';

class SidescrollPanel extends React.Component {
	constructor (props) {
		super(props);
	}

	stringify = (entry) => {
		return entry.id.toString();
	}

	renderHTML = (entry) => {
		return {__html: entry.content};
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
		let isHomepage = this.props.sideScrollEntriesType == "homepage";
		// TODO refs based on panelDate?
		let panelDate = isHomepage
			? this.props.entries.date
			: this.props.entries[0].date;  // since this is an array of entries with the same date, we just grab the first entry's date
		let formattedEntryDate = this.formatEntryDate(panelDate);
		let panelCSSID = isHomepage
			? "homepage-sidescroll-panel"
			: "calendar-sidescroll-panel";
		let panelContent = isHomepage
			// for homepage, render singular user's entry for this day
			? <SidescrollHomepagePanelsContent
				stringfy={this.stringify}
				renderHTML={this.renderHTML}
				entry={this.props.entries}
			/>
			// for calendar, load all friends' entries for this day
			: <SidescrollCalendarPanelsContent
				stringfy={this.stringify}
				renderHTML={this.renderHTML}
				entries={this.props.entries}
			/>;

		return (
			<div className="sidescroll-panel" id={panelCSSID}>
				<div>
					<div className="panel-date-header"> {formattedEntryDate} </div>
					<div className="panel-content">
						{panelContent}
					</div>
				</div>
			</div>
		);
	}
}

export default SidescrollPanel;