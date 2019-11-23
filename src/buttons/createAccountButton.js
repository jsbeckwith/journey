import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

class CreateAccountButton extends React.Component {

    constructor(props) {
        super(props)
    }

    // addUser = () => {
    //     const newUser = {
    //         "displayname": this.props.name,
    //         "email": this.props.email,
    //         "password": this.props.password
    //     }

    //     axios.post("/register", newUser)
    //         .then(res => {
    //             console.log(res.data);
    //             window.location = "/homepage";
    //         })
    //         .catch( (error) => {
    //             console.log(error);
    //         });
    // };

    render() {
        return (
            <Tooltip title="create account">
                {/* window.location = "http://localhost:3000/homepage" */}
                <button className="createAccountButton" type="submit">
                    create account
                </button>
            </Tooltip>
        );
    }

}

export default CreateAccountButton;