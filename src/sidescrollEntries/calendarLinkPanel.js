import React from 'react';

class CalendarLinkPanel extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
      		<div className="sidescroll-panel" id="calendar-link-panel">
				<div className="panel-content, calendar-link-panel-text">
					To see more of your entries, check out your <a href="/calendarPage">calendar page</a>
				</div>
			</div>
		);
	}
}

export default CalendarLinkPanel;