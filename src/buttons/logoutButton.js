import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import ContextConsumer from '../context.js';
import '../auth/auth.scss';

class LogoutButton extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ContextConsumer>
				{(value) => (
					<Tooltip title="logout">
						<div className="logout-button">
							<a onClick={() => {alert('logout'); value.setUser({}); window.location = "http://localhost:3000/"}}>
								logout
							</a>
						</div>
					</Tooltip>
				)}
			</ContextConsumer>
		);
	}

}

export default LogoutButton;