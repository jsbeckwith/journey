import React from 'react';
import '../universalStyle.scss';
import ModernDatepicker from 'react-modern-datepicker';

class CalendarHeader extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			selectedDate: new Date()
		}
	}

	// // determines the earliest date that can be selected in the popup calendar.
	// // based on the earliest post created between the user and all the user's friends,
	// // that is, the first post that the calendar page can show.
	// calculateMinDate = () => {
		
	// }

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
					<ModernDatepicker
						id={"input-button"}
						date={this.state.selectedDate}
						format={'MM-DD-YYYY'}
						onChange={(date) => this.props.handleDateSelect(date)}
						placeholder={'Jump to a date...'}
						maxDate={todayDate}
						// minDate={this.calculateMinDate()}
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
