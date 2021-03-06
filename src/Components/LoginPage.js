import React, { Component, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';


export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        event.preventDefault();

        const target = event.target;
        let value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    logIn(email, password) {
        this.props.logIn(email, password)
    }

    render() {
        return (
            <div>
                <Form inline >
                    <FormGroup>
                        <Label for="exampleEmail" hidden>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleInputChange} />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden>Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleInputChange} />
                    </FormGroup>
                    {' '}
                    <Button onClick={() => this.logIn(this.state.email, this.state.password)}>Submit</Button>
                </Form>
            </div>
        )
    }
}
