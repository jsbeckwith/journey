import React from 'react';
import '../universalStyle.scss';
import ModernDatepicker from 'react-modern-datepicker';

class CalendarHeader extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedDate: new Date()
		};

		this.handleDateSelect = this.handleDateSelect.bind(this);
	}

	handleDateSelect(date) {
		this.setState({
			startDate: date
		});
	}

	render () {
		// color vars
		let journeyLightGrey = '#F7F7F7';
		let journeyMidGrey = '#AEACB1';
		let journeyDarkGrey = '#8B888D';
		let journeyPurple = '#A498D3';

		let todayDate = new Date();

		return (
			<div className="page-header" id="calendar-header">
				<h2>Your Friends' Entries</h2>
				<div className="jump-to-date-calendar">
					{/*
						for the below calendar component,
						we should set minDate as the date of the oldest post
						out of all the users friends or the users self
					*/}
					<ModernDatepicker
						id={"input-button"}
						date={this.state.startDate}
						format={'MM-DD-YYYY'}
						onChange={(date) => this.handleDateSelect(date)}
						placeholder={'Jump to a date...'}
						maxDate={todayDate}
						primaryColor={journeyPurple}
						secondaryColor={journeyLightGrey}
						primaryTextColor={journeyDarkGrey}
						secondaryTextColor={'#ffffff'}
					/>
				</div>
			</div>
		);
	}
}

export default CalendarHeader;
