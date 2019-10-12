import React from 'react';
import logo from './logo.svg';
import './entryDisplay.scss';

class EntryDisplay extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
      <div class="entry">
				<header class="author"> {this.props.author} </header>
				<br/>
				<header class="date"> {this.props.date} </header>
				<br/>
				<p class="text"> {this.props.text} </p>
			</div>
		);
	}
}

export default EntryDisplay;