import React from 'react';
import logo from './logo.svg';
import './entryDisplay.scss';

class EntryDisplay extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
      <div>
				<p class="entryText"> here is some text :^) </p>
			</div>
		);
	}
}

export default EntryDisplay;
