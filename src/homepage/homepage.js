import React from 'react';
import './homepage.scss';
import TextEditor from '../newEntryPage/textEditor.js';
import HomepageHeader from './homepageHeader.js';
import SidescrollEntries from '../sidescrollEntries/sidescrollEntries.js';

class HomePage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<HomepageHeader entry={this.props.entry} todayDate={this.props.todayDate}/>
				<TextEditor/>
                <SidescrollEntries/>
			</div>
		);
	}
}

export default HomePage;
