import React from 'react';
import ContextConsumer from '../context.js';
import '../universalStyle.scss';

class HomepageHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<ContextConsumer>
				{(value) => (
					<div className="page-header" id="homepage-header">
						<h2>Hello, {value.user.displayname}!</h2>
						<br/>
						<h3>Today is {value.dateString}.</h3>
					</div>
				)}
			</ContextConsumer>
		);
	}
}

export default HomepageHeader;
