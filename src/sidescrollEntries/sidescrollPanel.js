import React from 'react';
import {Link} from 'react-router-dom';

class SidescrollPanel extends React.Component {
	constructor (props) {
		super(props);
	}

	stringify = () => {
		return this.props.id.toString();
	}

	renderHTML = () => {
		return {__html: this.props.content};
	}

	createShortDate(entryDate) {
		let inputDate = new Date(entryDate);
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let shortDate = months[inputDate.getMonth()] + " " + inputDate.getDate();
		return shortDate;
	}

	render () {
		let idString = this.stringify();
		return (
      <div class="entry">
				<header class="author"> {this.props.author} </header>
				<br/>
				<Link to = {{pathname: "/post/" + idString}}> 
					<header class="date"> {this.createShortDate(this.props.date)} </header>
				</Link>
				<br/>
				<p class="text-sidescroll"> <div dangerouslySetInnerHTML={this.renderHTML()}/> </p>
			</div>
		);
	}
}

export default SidescrollPanel;