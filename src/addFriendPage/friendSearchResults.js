import React from 'react';
import './addFriendPage.scss';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

class FriendSearchResults extends React.Component {
	constructor (props) {
		super(props);
    }

	render () {
        // for styling purposes, delete later
        let username = 'hypotheticalusername';
        let gotResults = true;

        if (gotResults) {
            return (
                <div className="friend-search-results">
                    {/* TODO loop through results here */}
                    <div className="search-result-item">
                        <div className="search-result-username">
                            {username}
                        </div>
                        <ToggleFriendButton username={username}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="no-results-wrapper">
                    <div className="no-results-text">
                        no users found
                    </div>
				</div>
            );
        }
	}
}

export default FriendSearchResults;