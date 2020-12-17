import React, {Component} from 'react';
import AllPosts from "./Components/AllPosts/AllPosts";
import './App.css'
class App extends Component {
    posts = [];

    render() {
        return (
            <div className= 'main'>
              <AllPosts/>
            </div>
        );
    }
}

export default App;