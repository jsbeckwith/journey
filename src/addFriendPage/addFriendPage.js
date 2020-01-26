import React from 'react';
import './addFriendPage.scss';
import FriendSearchResults from './friendSearchResults.js';
import SearchButton from '../buttons/searchButton.js';

class AddFriendPage extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			searchText: '',
			hasSearched: false
		}
	}

	handleInputChange = (e) => {
		this.setState({ searchText: e.target.value });
	}

	// called when search button is pressed
	handleSearch = () => {
		this.setState({hasSearched: true});
	}

	render () {
		let shouldRenderSearchResults = this.state.hasSearched
			? <FriendSearchResults/>
			: null;

		return (
			<div className="add-friend-page">
				<h2>Add a Friend</h2>
				<br/>
				{/* TODO: for agile reasons, we are going to start out with simple one-way follow system (like ig), so the below is true for now.
				But, in the future we are hoping to implement a two-way friend request system (like fb).
				We will update copy accordingly*/}
				<h3>Adding a friend on journey means that you can view their entries, but they can't view yours.</h3>
                <div className="search">
                    <form>
                        <input
							type="text"
							className="searchbar"
							placeholder="search for a new friend by username..."
							onChange={this.handleInputChange}
						/>
                        <SearchButton searchText={this.state.searchText} handleSearch={this.handleSearch}/>
                    </form>
					{shouldRenderSearchResults}
                </div>
            </div>
		);
	}
}

export default AddFriendPage;