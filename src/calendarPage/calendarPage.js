import React from 'react';
import './calendarPage.scss';
import CalendarHeader from './calendarHeader.js';
import SidescrollEntries from '../sidescrollEntries/sidescrollEntries.js';

class CalendarPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<CalendarHeader/>
				<SidescrollEntries sideScrollEntriesType="calendar"/>
			</div>
		);
	}
}

export default CalendarPage;
