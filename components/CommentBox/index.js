import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class CommentBox extends Component {
    static propTypes = {
        initialText: PropTypes.string.isRequired,
        initialPhotoAdded: PropTypes.bool.isRequired,
        wordCount: PropTypes.number.isRequired,
        photoCount: PropTypes.number.isRequired,
        styles: PropTypes.object
    };
    static defaultProps = {
        initialText: '',
        initialPhotoAdded: false,
        wordCount: 350,
        photoCount: 23
    };
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialText,
            photoAdded: props.initialPhotoAdded
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleTogglePhoto = this.handleTogglePhoto.bind(this);
    }
    handleChange(e) {
        // const text = this.state.text;
        // console.log(this.state.text);
        this.setState({ text: e.target.value });
    }
    handleTogglePhoto() {
        const photoAdded = this.state.photoAdded;
        this.setState({photoAdded: !photoAdded });
    }
    updateCharacters() {
        const photoAdded = this.state.photoAdded;
        const textLength = this.state.text.length;
        const wordCount  = this.props.wordCount;
        const photoCount = this.props.photoCount;
        if(photoAdded){
            return wordCount - photoCount - textLength;
        }else{
            return wordCount - textLength;
        }
    }
    render() {
        const {styles, wordCount} = this.props;
        const text = this.state.text;
        const photoAdded = this.state.photoAdded;
        const updateChars = this.updateCharacters();
        const lowCount = text.length > wordCount ? styles['low-count'] : 'test';

        return (
            <div>
                <textarea styleName="textarea" onChange={this.handleChange}></textarea>
                <br/>
                <span className={lowCount}>{ this.updateCharacters() }</span>
                <button styleName="button" disabled={updateChars === wordCount || updateChars < 0}>Comment</button>
                <button styleName="button" onClick={this.handleTogglePhoto}>
                    {photoAdded ? '✓ Photo Added' : 'Add Photo' }
                </button>
            </div>
        );
    }
}

export default CSSModules(CommentBox, styles);