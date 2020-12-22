import React, {Component} from 'react';
import BodyOfPost from "../BodyOfPost/BodyOfPost";

class TitleOfPost extends Component {

    state = {chosenPost: false, flag : false};

    selectUsersPost = () => {
        const {flag} = this.state;
        flag
            ? this.setState({chosenPost: false, flag : false})
            : this.setState({chosenPost: true, flag: true})
    }

    render() {
        let {chosenPost} = this.state;
        let {title,body} = this.props;
        console.log(chosenPost)
        return (
            <div>
                Тема: {title} <br/>
                <button onClick={this.selectUsersPost}>Click me</button>
                {
                    chosenPost && <BodyOfPost body = {body}/>
                }
            </div>
        );
    }
}

export default TitleOfPost;
