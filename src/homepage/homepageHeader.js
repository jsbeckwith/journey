import React from 'react';
import ContextConsumer from '../context.js';
import '../universalStyle.scss';

class HomepageHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		console.log("header", this.context.dateString)
		return (
			<ContextConsumer>
				{(value) => (
					<div className="page-header" id="homepage-header">
						{/* TODO */}
						{/* <h2>Hello, {user.displayName}!</h2> */}
						<br/>
						<h3>Today is {value.dateString}.</h3>
					</div>
				)}
			</ContextConsumer>
		);
	}
}

export default HomepageHeader;
