import React from 'react';
import './calendarPage.scss';
import CalendarHeader from './calendarHeader.js';
import SidescrollEntries from '../sidescrollEntries/sidescrollEntries.js';

class CalendarPage extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedDate: new Date()
		};
	}

	handleDateSelect = (date) => {
		this.setState({
			selectedDate: date
		});
	}

	// when date is selected in the popup calendar,
	// scroll to panel with chosen date
	scrollToPanel = (ref) => {
		ref.scrollIntoView({
			behavior: 'smooth'
		});
		ref.focus();
	}

	render () {
		return (
			<div>
				<CalendarHeader handleDateSelect={this.handleDateSelect} scrollToPanel={this.scrollToPanel}/>
				<SidescrollEntries sideScrollEntriesType="calendar"/>
			</div>
		);
	}
}

export default CalendarPage;
