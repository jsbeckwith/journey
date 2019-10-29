import axios from 'axios';
import React from 'react';
import './sidescrollEntries.scss';
import SidescrollPanel from './sidescrollPanel.js';

class SidescrollEntries extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			entries: [],
			s: "hey"
		}
	}

	getPosts = () => {
		axios.get("http://localhost:4000/posts/")
			.then((response) => {
				console.log("before");
				this.setState({entries: response.data});
				console.log("after");
			})
			/*.catch( (error) => {
                console.log(error);
            })*/;
	}

	componentDidMount = () => {
		console.log("HI!!!!!!");
	    this.getPosts();
	}

	render () {

	    /*var entries = [ {'author': 'Hava',
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
	    ]*/
	    var entries = this.state.entries;

		return (
			<div class="entries">
					{/* loop through all entries and pass info as props to sidescrollPanel */}
					{entries.map((entry) => {
						return (
							<SidescrollPanel id={entry._id} author={entry.author} date={entry.date} content={entry.content}/>
						)
					})}
			</div>
		);
	}
}

export default SidescrollEntries;