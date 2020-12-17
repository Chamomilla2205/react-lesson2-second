import React, {Component} from 'react';
import UserIdOfPosts from "../UserIdOfPosts/UserIdOfPosts";
import TitleOfPost from "../TitleOfPost/TitleOfPost";
import './PostComponent.css'


class PostsComponent extends Component {

    render() {
        let {post:{userId,id,title,body}} = this.props;
        return (
            <div className='post'>
                {userId && <UserIdOfPosts userId = {userId}/>}
                {title && <TitleOfPost title = {title} body = {body} key = {id}/>}
            </div>
        );
    }
}

export default PostsComponent;