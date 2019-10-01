import React from 'react';

import './personalEntriesPage.css';
import EntryDisplay from '../entryDisplay.js';

class personalEntriesPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

    var entries = [ {'author': 'Mimi'
                     'text': 'bloop'
                     'date': '9/31/19'},

                     {'author': 'Hava'
                      'text': 'uwu'
                      'date': '9/31/19'}
    ]

		return (
			<div>
        <EntryDisplay/>
			</div>
		);
	}
}

export default PersonalEntriesPage;
