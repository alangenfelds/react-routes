import React, { Component } from 'react';

class Course extends Component {

    // componentDidMount() {
    //     console.log(this.props);
    // }

    render () {
        return (
            <div>
                <h1>{(this.props.location.state.title).toUpperCase()}</h1>
                <p>You selected the Course with ID: <b>{this.props.match.params.id}</b></p>
            </div>
        );
    }
}

export default Course;