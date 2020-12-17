import React, {Component} from 'react';

class UserIdOfPosts extends Component {
    render() {
        let {userId} = this.props
        return (
            <div>
                Користувач №{userId}
            </div>
        );
    }
}

export default UserIdOfPosts;