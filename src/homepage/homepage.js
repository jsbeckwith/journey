import React from 'react';
import './homepage.scss';
import '../universalStyle.scss';
import TextEditor from '../textEditor.js';
import HomepageHeader from './homepageHeader.js';
import SidescrollEntries from '../sidescrollEntries/sidescrollEntries.js';

class HomePage extends React.Component {
	constructor (props) {
		super(props);

		this.transitionToNewEntry = this.transitionToNewEntry.bind(this);
	}

	transitionToNewEntry = () => {
		console.log("triggered");
		window.location = "/newEntryPage";  // redirect
	}

	render () {
		return (
			<div>
				<HomepageHeader entry={this.props.entry} todayDate={this.props.todayDate}/>
				<div onClick={this.transitionToNewEntry}>
					<TextEditor textEditorType="homepage-text-editor"/>
				</div>
				<h3 className="your-past-entries-title">Your past entries</h3>
                <SidescrollEntries sideScrollEntriesType="homepage"/>
			</div>
		);
	}
}

export default HomePage;
