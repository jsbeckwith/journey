import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class SearchButton extends React.Component {

	constructor(props) {
        super(props)
        
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.searchText !== nextProps.searchText;
    }

    // return key will also conduct search
    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.onSearch();
        }
    }
    
    onSearch = () => {
        // search db for usernames that == or contain this.props.searchText
        // try to prioritize closest match?
    }

    render () {
        return (
            <Tooltip title="search">
                <button className="search-button journey-button" onClick={this.onSearch} onKeyPress={this.handleKeyPress}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.03 24">
                        <path id="search" d="M1221,240a9,9,0,1,1-9,9A9,9,0,0,1,1221,240Zm0,2a7,7,0,1,1-7,7A7,7,0,0,1,1221,242Zm6.71,12.282,8.01,7.984a1.011,1.011,0,0,1-1.43,1.428l-8.01-7.984A1.011,1.011,0,0,1,1227.71,254.282Z" transform="translate(-1212 -240)" fillRule="evenodd"/>
                    </svg>
                </button>
            </Tooltip>
        );
    }

}

export default SearchButton;