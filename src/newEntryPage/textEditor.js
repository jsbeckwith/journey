import React from 'react';
import ReactQuill from 'react-quill';
import './textEditor.scss';

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

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            ['clean']
        ],
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'indent',
        'color', 'background',
        'link', 'image'
    ]

    render() {
        return (
            <ReactQuill placeholder="What are you grateful for today?"
                        value={this.state.text}
                        onChange={this.handleChange}
                        theme="snow"
                        modules={this.modules}
                        />
        )
    }
}

export default TextEditor;
