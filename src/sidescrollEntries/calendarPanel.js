import React from 'react';

class CalendarPanel extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
      		<div className="sidescroll-panel" id="calendar-panel">
				<div className="panel-text, calendar-panel-text">
					To see more of your entries, check out your calendar page
				</div>
			</div>
		);
	}
}

export default CalendarPanel;