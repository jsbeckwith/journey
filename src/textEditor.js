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

    loadEditText = () => {
        if (this.props.editMode) {
            this.setState({text: this.props.editText});
        }
    }

    handleChange(value) {
        this.setState({ text: value });
        this.props.giveText(this.state.text);
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

    // get post when page loads
	componentDidMount = () => {
        this.loadEditText();
	}

    render() {
        return (
            <ReactQuill placeholder="What are you grateful for today?"
                        value={this.state.text}
                        onChange={this.handleChange}
                        theme="snow"
                        modules={this.modules}
                        className={this.props.textEditorType}
                        />
        )
    }
}

export default TextEditor;
