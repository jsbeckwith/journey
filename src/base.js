import React from 'react';
import logo from './logo.svg';
import './base.scss';
import NavigationBar from './navigationBar.js';
import TextEditor from './newEntryPage/textEditor.js';

class Base extends React.Component {

  constructor (props) {
		super(props);
	}

  render(){
    return (
      <div class="base">
        <header class="header"> Journey </header>
        <NavigationBar/>
        <TextEditor/>
      </div>
    )
  }

}

export default Base;
