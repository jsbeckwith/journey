import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div class="single-entry-header">
				<header class="header-author"><i class="fa fa-user" id="user"></i>
										      {this.props.author} </header>
				<br/>
        		<header class="header-date"> date:  {this.props.date} </header>
        		<div className="header-button-container">hi
					<EditButton id={this.props.id}/>
					<DeleteButton id={this.props.id}/>
				</div>
			</div>
		);
	}
}

export default SingleEntryHeader;

