import React from 'react';
import logo from './logo.svg';
import './sidebar.scss';

class Sidebar extends React.Component {

  constructor (props) {
		super(props);
	}

  render(){
    return (
      <span class="sidebar">
        <ul>
         <a href="#" class="calendarView">calendar</a>
         <a href="#" class="boop">boop</a>
        </ul>
      </span>
    )
  }

}

export default Sidebar;
