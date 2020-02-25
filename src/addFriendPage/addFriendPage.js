import React from 'react';
import './addFriendPage.scss';
import FriendSearchResults from './friendSearchResults.js';
import SearchButton from '../buttons/searchButton.js';

class AddFriendPage extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			searchText: ''
		}
	}

	handleInputChange = (e) => {
		this.setState({ searchText: e.target.value });
	}

	render () {
		return (
			<div className="add-friend-page">
                <div className="search">
                    <form>
                        <input
							type="text"
							className="searchbar"
							placeholder="search for a new friend by username..."
							onChange={this.handleInputChange}
						/>
                        <SearchButton searchText={this.state.searchText}/>
                    </form>
					<FriendSearchResults/>
                </div>
            </div>
		);
	}
}

export default AddFriendPage;