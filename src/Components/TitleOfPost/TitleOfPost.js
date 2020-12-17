import React, {Component} from 'react';
import BodyOfPost from "../BodyOfPost/BodyOfPost";

class TitleOfPost extends Component {
    state = {};
    selectThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost})
    }
    flag = false;

    render() {
        let {title,body,key,chosenPost} = this.props;
        return (
            <div>
                Тема: {title} <br/>
                <button onClick = {() => {this.selectThisPost(chosenPost)}}>Click</button>
                <BodyOfPost body = {body} key = {key}/>
                {
                    chosenPost && <BodyOfPost body={chosenPost}/>
                }
            </div>
        );
    }
}

export default TitleOfPost;