import React from 'react';
import './universalStyle.scss';

class Ribbon extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className="ribbon">
                <a href="./homepage.js">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223 86" className="journey-logo">
						<text id="journey" transform="translate(19 64)" fill="#fff" font-size="60" font-family="Magnolia-Script, Magnolia Script"><tspan x="0" y="0">journey</tspan></text>
					</svg>
				</a>
			</div>
		);
	}
}

export default Ribbon;