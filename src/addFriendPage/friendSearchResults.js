import React from 'react';
import './addFriendPage.scss';
import SearchResultItem from './searchResultItem.js';

class FriendSearchResults extends React.Component {
	constructor (props) {
        super(props);
    }

	render () {
        // hardcoding now, figure out how to calculate values later
        let username = 'hypotheticalusername';
        let gotResults = true;

        //add in logic to load after search button pressed

        if (gotResults) {
            return (
                <div className="friend-search-results">
                    {/* TODO loop through results here */}
                    <SearchResultItem username={username}/>
                    <SearchResultItem username={username}/>
                    <SearchResultItem username={username}/>
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