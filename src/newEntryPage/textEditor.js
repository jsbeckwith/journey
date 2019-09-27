import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import logo from '../logo.svg';

/** using the Quill rich text editor
 * https://quilljs.com/
 * https://github.com/zenoamaro/react-quill
*/
class TextEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <ReactQuill value={this.state.text}
                        onChange={this.handleChange}/>
        )
    }
}

export default TextEditor;