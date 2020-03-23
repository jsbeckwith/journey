import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../universalStyle.scss';
import '../addFriendPage/addFriendPage.scss';

class ToggleFriendButton extends React.Component {

	constructor(props) {
		super(props)

		// button will change based on status of corresponding user
		this.state = {
			mode: this.determineMode()
		}

		this.determineMode = this.determineMode.bind(this);
		this.addFriend = this.addFriend.bind(this);
		this.removeFriend = this.removeFriend.bind(this);
	}

	// determineMode calculates whether the button should be in add friend or remove friend mode
	// based on whether the user is already a friend ot not
	determineMode = () => {
		let alreadyFriends = false;  // TODO

		if (alreadyFriends) {
			return 'remove';
		} else {
			return 'add';
		}
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
		if (this.state.mode === 'remove') {  // if the user is already a friend, the button displays a - that allows you to remove them
			return (
				<div className="toggle-friend-button">
					<Tooltip title={'remove friend'} placement={'right'}>
						<button className="add-remove-friend-button journey-button remove-friend-button" onClick={this.removeFriend}>
							-
						</button>
					</Tooltip>
				</div>
			);
		} else {  // if the user is not a friend, the button displays a + that allows you to add them
			return (
				<div className="toggle-friend-button">
					<Tooltip title={'add friend'} placement={'right'}>
						<button className="add-remove-friend-button journey-button add-friend-button" onClick={this.addFriend}>
							+
						</button>
					</Tooltip>
				</div>
			);
		}
  }

}

export default ToggleFriendButton;