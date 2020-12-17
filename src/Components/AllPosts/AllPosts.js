import React, {Component} from 'react';
import PostsComponent from "../posts/PostsComponent";
import './AllPosts.css'
class AllPosts extends Component {

    state = {posts: []}
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(postsFromAPI => {
            this.setState({posts: postsFromAPI})
        })
}


    render() {
        let {posts} = this.state;
        return (
            <div>
                <h1>ALL POSTS PAGE</h1>
                {
                    posts.map(value => (
                        <PostsComponent
                            post = {value}
                            key = {value.id}
                        />))
                }
            </div>
        );
    }
}

export default AllPosts;