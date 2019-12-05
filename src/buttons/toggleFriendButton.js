import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class ToggleFriendButton extends React.Component {

	constructor(props) {
		super(props)

		// button will change based on status of corresponding user
		this.state = {
			mode: this.determineMode()
		}
	}

	determineMode = () => {
		let alreadyFriends = false;  // TODO

		alreadyFriends
		? 'remove'
		: 'add';
	}

	addFriend = () => {
		// TODO edit in db
		this.setState({mode: 'remove'});
	}

	removeFriend = () => {
		// TODO edit in db
		alert(`${this.props.username} is no longer your friend. You can add them back at any time.`);
		this.setState({mode: 'add'});
	}

    render () {
		if (this.state.mode == 'remove') {  // if the user is already a friend, the button displays a - that allows you to remove them
			return (
				<div className="toggle-friend-button">
					<Tooltip title={'remove friend'}>
						<button className="add-remove-friend-button journey-button remove-friend-button" id={this.props.location} onClick={this.removeFriend()}>
							-
						</button>
					</Tooltip>
				</div>
			);
		} else {  // if the user is not a friend, the button displays a + that allows you to add them
			return (
				<div className="toggle-friend-button">
					<Tooltip title={'add friend'}>
						<button className="add-remove-friend-button journey-button add-friend-button" id={this.props.location} onClick={this.addFriend()}>
							+
						</button>
					</Tooltip>
				</div>
			);
		}
  }

}

export default ToggleFriendButton;