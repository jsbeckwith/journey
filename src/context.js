import React from 'react';

// global state for whole app, esp authed user

const context = React.createContext({});

export class ContextProvider extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			user: {},
			date: new Date(),
			dateString: this.createDateString(new Date()),
		};
	}

	setUser = (user) => {
		this.setState({user: user});
	}

	setDate = () => {
		this.setState({date: new Date()});
		this.setDateString();
	}

	setDateString = () => {
		this.setState({dateString: this.createDateString(this.state.date)});
	}

	// correctly/nicely format any date as a string (originally: unix epoch format)
	createDateString = (date) => {
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
						"July", "August", "September", "October", "November", "December"];
		// create a string with the full day of the week, month, day of the month, and year
		let dateString = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate()
						+ ", " + date.getFullYear();
		return dateString;
	}

	render() {
		const { children } = this.props;
	
		return (
			<context.Provider
				value={{
					user: this.state.user,
					date: new Date(),
					dateString: this.createDateString(new Date()),
					setUser: this.setUser,
				}}
			>
				{children}
			</context.Provider>
		);
	}
}



export { context };

const ContextConsumer = context.Consumer;
export default ContextConsumer;