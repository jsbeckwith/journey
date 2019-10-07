import React from 'react';
import logo from './logo.svg';
import './navigationBar.scss';

class NavigationBar extends React.Component {

  constructor (props) {
		super(props);
	}

  render(){
    return (
      <span class="navbar">
        <ul>
         <a href="#" class="calendarView">calendar</a>
         <a href="#" class="boop">boop</a>
        </ul>
      </span>
    )
  }

}

export default NavigationBar;
