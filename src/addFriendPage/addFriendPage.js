import React from 'react';
import './addFriendPage.scss';

class AddFriendPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="add-friend-page">
                <div className="search">
                    <form>
                        <input type="text" className="searchbar" placeholder="search for a new friend by username..."/>
                        <button className="search-button journey-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.03 24">
                                <path id="search" d="M1221,240a9,9,0,1,1-9,9A9,9,0,0,1,1221,240Zm0,2a7,7,0,1,1-7,7A7,7,0,0,1,1221,242Zm6.71,12.282,8.01,7.984a1.011,1.011,0,0,1-1.43,1.428l-8.01-7.984A1.011,1.011,0,0,1,1227.71,254.282Z" transform="translate(-1212 -240)" fill-rule="evenodd"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
		);
	}
}

export default AddFriendPage;