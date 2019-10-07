import React from 'react';

import './multipleEntriesPage.scss';

class MultipleEntriesPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

    var entries = [ {'author': 'Hava',
		 								 'text': 'uwu',
		 							 	 'date': '10/2/19'},

										 {'author': 'Mimi',
                     'text': 'bloop',
                     'date': '9/31/19'},

										 {'author': 'Julia B.',
                     'text': ':)',
                     'date': '9/17/19'},

										 {'author': 'Julia L.',
                     'text': 'wow',
                     'date': '9/6/19'},

										 {'author': 'Mimi',
                     'text': 'bloop',
                     'date': '9/31/19'},

										 {'author': 'Mimi',
                     'text': 'bloop',
                     'date': '9/31/19'},

										 {'author': 'Mimi',
                     'text': 'bloop',
                     'date': '9/31/19'},
    ]

		return (
			<div>
        <ul>
					{entries.map((entry) => {
						return (
							<div class="entry-display">
								<h1 class="author"> {entry.author} </h1>
								<br/>
								<h1 class="date"> {entry.date} </h1>
								<br/>
								<p class="text"> {entry.text} </p>
							</div>
						)
					})}
				</ul>
			</div>
		);
	}
}

export default MultipleEntriesPage;
