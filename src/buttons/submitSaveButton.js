import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

class SubmitSaveButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            author: 'someuser123',
            dt: Date.now(),
            content: 'hi'
        }
	}

	refreshText = () => {
		this.setState({content: this.props.txt});
		return this.state.content;
	}
	
	post = () => {
		var c = this.refreshText();
		const newPost = {
			"author": this.state.author,
			"date": this.state.dt,
			"content": c
		}

		axios.post("http://localhost:4000/posts/add", newPost)
			.then(res => console.log(res.data));
	}

	render() {
		return (
			<Tooltip title="save">
				<button className="submit-save-button header-button journey-button" onClick={() => alert('click')}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path id="save" className="cls-1" d="M1522,360h-20a2,2,0,0,1-2-2V338a2,2,0,0,1,2-2h15v0.006a1.016,1.016,0,0,1,.77.283l5.91,5.911a1.017,1.017,0,0,1,.29.8H1524v15A2,2,0,0,1,1522,360Zm-15-2h10v-7h-10v7Zm8-20h-6v6h6v-6Zm7,5.477-5-5V344a2,2,0,0,1-2,2h-6a2,2,0,0,1-2-2v-6h-5v20h3v-7a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2v7h3V343.477Z" transform="translate(-1500 -336)"/>
					</svg>
				</button>
			</Tooltip>
		);
	}
}
export default SubmitSaveButton;