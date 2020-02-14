import React from 'react';
import {Link} from 'react-router-dom';

class SidescrollCalendarPanelEachEntry extends React.Component {
    // for panels on the calendar page,
    // SidescrollCalendarPanelsContent will load one of this component
    // for each entry that should be shown
	constructor (props) {
		super(props);
    }

	render () {
        let entry = this.props.entry;
        let idString = this.props.stringify(entry);

        return (
            <div className="sidescroll-calendar-panel-entry">
                <Link to = {{pathname: "/post/" + idString}}>
                    <div className="display-name">{entry.author}</div>
                    <div className="entry-text">
                        <div dangerouslySetInnerHTML={this.props.renderHTML()}/>
                    </div>
                </Link>
            </div>
        );
	}
}

export default SidescrollCalendarPanelEachEntry;