import React from 'react';
import './sidescrollEntries.scss';
import SidescrollPanel from './sidescrollPanel.js';
import CalendarPanel from './calendarPanel';

class SidescrollEntries extends React.Component {
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
					{/* loop through all entries and pass info as props to sidescrollPanel */}
					{entries.map((entry) => {
						return (
							<SidescrollPanel author={entry.author} date={entry.date} text={entry.text}/>
						)
					})}
					<CalendarPanel/>

			</div>
		);
	}
}

export default SidescrollEntries;