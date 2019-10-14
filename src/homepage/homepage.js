import React from 'react';
import './homepage.scss';
import TextEditor from '../newEntryPage/textEditor.js';
import HomepageHeader from './homepageHeader.js';
import SidescrollEntries from '../viewMultipleEntries/sidescrollEntries.js';

class HomePage extends React.Component {
	constructor (props) {
		super(props);
		// at some point this will have a prop that determines if the page is
		// editing an existing entry or making an entirely new one
		// which changes discard/delete and the title
	}

	render () {
		return (
			<div>
				<HomepageHeader entry={this.props.entry}/>
				<TextEditor/>
                <SidescrollEntries/>
			</div>
		);
	}
}

export default HomePage;
