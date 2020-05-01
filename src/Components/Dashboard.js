import React, { Component } from 'react'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const apitoken = 'Bearer ' + this.props.apitoken
        axios.get('http://localhost:8000/api/user/1/detail', {'headers': {'Authorization': apitoken}})
            .then(response => {
                console.log(response)
            })
            .catch(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
