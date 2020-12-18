import React, {Component} from 'react';
import BodyOfPost from "../BodyOfPost/BodyOfPost";

class TitleOfPost extends Component {
    state = {chosenPost: false};
    flag = false;
    selectUsersPost = () => {
        if (this.flag) {
            this.setState({chosenPost: false})
        } else {
            this.setState({chosenPost: true})
        }
        this.flag = !this.flag;
    }

    render() {
        let {chosenPost} = this.state;
        let {title,body} = this.props;
        console.log(chosenPost)
        return (
            <div>
                Тема: {title} <br/>
                <button onClick={() => this.selectUsersPost()}>Click me</button>
                {
                    chosenPost && <BodyOfPost body = {body}/>
                }
            </div>
        );
    }
}

export default TitleOfPost;