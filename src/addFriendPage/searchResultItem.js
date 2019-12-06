import React from 'react';
import './addFriendPage.scss';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

class SearchResultItem extends React.Component {
	constructor (props) {
        super(props);
    }

	render () {

        return (
            <div className="search-result-item">
                <div className="search-result-content">
                    <ToggleFriendButton username={this.props.username}/>
                    <div className="search-result-username">{this.props.username}</div>
                </div>
            </div>
        );
	}
}

export default SearchResultItem;