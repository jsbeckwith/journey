import React from 'react';
import {Link} from 'react-router-dom';

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

		return (
			<Link to = {{pathname: "/post/" + idString}}>
				<div className="sidescroll-panel">
					<div>
						<div className="panel-date-header"> {formattedEntryDate} </div>
						<p className="panel-text"> <div dangerouslySetInnerHTML={this.renderHTML()}/> </p>
					</div>
				</div>
			</Link>
		);
	}
}

export default SidescrollPanel;