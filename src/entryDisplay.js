import React from 'react';
import logo from './logo.svg';
import './entryDisplay.css';

class EntryDisplay extends React.Component {
	constructor (props) {
		super(props);

	render () {
		return (
      <div>
        <p class="date"> date </p>
				<p class="postText"> text </p>
			</div>
		);
	}
}

export default EntryDisplay;
