import React, {Component} from 'react';
import AllPosts from "./Components/AllPosts/AllPosts";
import './App.css'
class App extends Component {


    render() {
        return (
            <div className= 'main'>
              <AllPosts/>
            </div>
        );
    }
}

export default App;