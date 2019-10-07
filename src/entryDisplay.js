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
				<header class="date"> {this.props.date} </header>
				<br/>
				<header class="author"> {this.props.author} </header>
				<p class="entry-text"> {this.props.entryText} </p>
			</div>
		);
	}
}

export default EntryDisplay;
