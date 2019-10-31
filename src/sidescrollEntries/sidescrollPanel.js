import React from 'react';
import {Link} from 'react-router-dom';

class SidescrollPanel extends React.Component {
	constructor (props) {
		super(props);
	}

	stringify = () => {
		return this.props.id.toString();
	}

	render () {
		let idString = this.stringify();
		return (
      <div class="entry">
				<header class="author"> {this.props.author} </header>
				<br/>
				<Link to = {{pathname: "/post/" + idString}}> 
					<header class="date"> {this.props.date} </header> 
				</Link>
				<br/>
				<p class="text-sidescroll"> {this.props.content} </p>
			</div>
		);
	}
}

export default SidescrollPanel;