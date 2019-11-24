import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class CreateAccountButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Tooltip title="create account">
                <button className="createAccountButton" type="submit">
                    create account
                </button>
            </Tooltip>
        );
    }

}

export default CreateAccountButton;