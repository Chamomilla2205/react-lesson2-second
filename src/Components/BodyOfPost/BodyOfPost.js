import React, {Component} from 'react';

class BodyOfPost extends Component {
    render() {
        let {body,key} = this.props
        return (
            <div>
                {body}
            </div>
        );
    }
}

export default BodyOfPost;