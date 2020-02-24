import React from 'react';
import {Link} from 'react-router-dom';

class SidescrollHomepagePanelsContent extends React.Component {
    // this component is loaded within each panel on the homepage
	constructor (props) {
		super(props);
    }

	render () {
        let entry = this.props.entry;
        let idString = this.props.stringify(entry);

        return (
            <div className="sidescroll-homepage-panel-content">
                <Link to = {{pathname: "/post/" + idString}}>
                    <div dangerouslySetInnerHTML={this.props.renderHTML(this.props.entry)}/>
                </Link>
            </div>
        );
	}
}

export default SidescrollHomepagePanelsContent;