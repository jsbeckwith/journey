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

	render () {
		let idString = this.stringify();
		return (
      		<div className="sidescroll-panel">
				<br/>
				<Link to = {{pathname: "/post/" + idString}}> 
					<div className="panel-date-header"> {this.props.date} </div>
				</Link>
				<br/>
				<p className="panel-text"> <div dangerouslySetInnerHTML={this.renderHTML()}/> </p>
			</div>
		);
	}
}

export default SidescrollPanel;