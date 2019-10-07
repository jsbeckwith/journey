import React from 'react';

import './multipleEntriesPage.scss';
import EntryDisplay from '../entryDisplay.js';

class MultipleEntriesPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		// Another possible way to organize the entries:
		// var toDisplay = [ {date: '',
	  //                      {entries: { author: '',
		//                                 text: ''},
    //
    //                               { author: '',
		//                                 text: ''},
		//
		//															 { author: '',
		//                                  text: ''}
	  //                      }
		//                   }

	  //  ]

    var entries = [ {'author': 'Hava',
		 								 'text': 'uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu uwu ',
		 							 	 'date': '10/2/19'},

										 {'author': 'Mimi',
                     'text': 'bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop bloop ',
                     'date': '9/31/19'},

										 {'author': 'Julia B.',
                     'text': ':) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) ',
                     'date': '9/17/19'},

										 {'author': 'Julia L.',
                     'text': 'wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow ',
                     'date': '9/6/19'},

										 {'author': 'Mimi',
                     'text': 'bloopbloopbloopbloopbloopbloopbloop wow wow wow wow wow wow wow ',
                     'date': '9/31/19'},

										 {'author': 'Mimi',
                     'text': 'bloopbloopwow wow wow wow wow wow wow ',
                     'date': '9/31/19'},

										 {'author': 'Mimi',
                     'text': 'bloopbloopbloopbloopwow wow wow wow wow wow wow ',
                     'date': '9/31/19'},
    ]

		return (
			<div class="entries">

					{entries.map((entry) => {
						return (
							<EntryDisplay author={entry.author} date={entry.date} text={entry.text}/>
							// <div class="entry-display">
							// 	<h1 class="author"> {entry.author} </h1>
							// 	<br/>
							// 	<h1 class="date"> {entry.date} </h1>
							// 	<br/>
							// 	<p class="text"> {entry.text} </p>
							// </div>
						)
					})}

			</div>
		);
	}
}

export default MultipleEntriesPage;
