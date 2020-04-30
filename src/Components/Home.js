import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/games')
            .then(response => {
                console.log(response.data);
            })
            .catch(response => {
                console.log('hello')
                console.log(response);
            })
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default Home;
