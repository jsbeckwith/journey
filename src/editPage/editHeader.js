import React from 'react';
import SubmitSaveButton from '../buttons/submitSaveButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import ContextConsumer from '../context.js';
import '../universalStyle.scss';

class EditHeader extends React.Component {
	constructor (props) {
        super(props);
        this.state = {
			id: this.props.id // post id
		};
	}
    
	render () {
		return (
			<div className="page-header" id="edit-header">
				<h2>Edit Entry</h2>
                <br/>
				<ContextConsumer>
					{(value) => (
						<div className="header-button-container">
							<SubmitSaveButton
								mode={false}
								id={value.getStringID(this.state.id)}
								qText={this.props.qText}
								author={value.user}
							/>
							<DeleteButton qText={this.props.qText}/>
						</div>
					)}
				</ContextConsumer>
			</div>
		);
	}
}

export default EditHeader;
