import React from 'react';
import '../universalStyle.scss';

class CalendarHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="page-header" id="calendar-header">
				<h2>Your Friends' Entries</h2>
				{/* popup monthly calendar will go here */}
			</div>
		);
	}
}

export default CalendarHeader;
