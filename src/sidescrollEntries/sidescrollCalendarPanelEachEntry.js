import axios from 'axios';
import React from 'react';

class SidescrollCalendarPanelEachEntry extends React.Component {
    // for panels on the calendar page,
    // SidescrollCalendarPanelsContent will load one of this component
    // for each entry that should be shown
	constructor (props) {
		super(props);
	}

	render () {
        return (
            <div className="sidescroll-calendar-panel-entry">
                {}
            </div>
        );
	}
}

export default SidescrollCalendarPanelEachEntry;