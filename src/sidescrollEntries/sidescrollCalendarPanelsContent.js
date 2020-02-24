import React from 'react';
import SidescrollCalendarPanelEachEntry from './sidescrollCalendarPanelEachEntry.js';

class SidescrollCalendarPanelsContent extends React.Component {
    // this component is loaded within each panel on the calendar page
    // it contains all of a user's friends' entries
    // and the user's own entries
    // for the date of that panel
	constructor (props) {
		super(props);
	}

	render () {
        return (
            <div className="sidescroll-calendar-panel-content">
                {/* loop through all entries from friends for this date
                and load component for each entry */}
                {this.props.entries.map((entry) => {
                    return (
                        <SidescrollCalendarPanelEachEntry
                            entry={entry}
                            stringfy={this.props.stringify}
				            renderHTML={this.props.renderHTML(this.props.entry)}
                        />
                    );
                })}
            </div>
        );
	}
}

export default SidescrollCalendarPanelsContent;