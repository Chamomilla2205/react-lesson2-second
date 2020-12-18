import React, {Component} from 'react';
import './BodyOfPost.css'
class BodyOfPost extends Component {
    render() {
        let {body} = this.props;
        return (
            <div>
                {body}
            </div>
        );
    }
}

export default BodyOfPost;