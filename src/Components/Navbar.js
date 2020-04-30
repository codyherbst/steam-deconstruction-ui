import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="d-flex flex-row">
                <a className="pl-3 mr-auto" href="#" onClick={() => this.props.updatePage('home')}>
                    Steam
                </a>
                {
                    this.props.state.isLoggedIn === false ?

                        <React.Fragment>
                            <a className="px-3" href="#" onClick={() => this.props.updatePage('login')}>
                                Login
                            </a>
                            <a className="px-3" href="#" onClick={() => this.props.updatePage('register')}>
                                Register
                            </a>
                        </React.Fragment> :
                        <React.Fragment>
                            <a className="px-3" href="#" onClick={() => this.props.updatePage('cart')}>
                                Cart
                            </a>
                            <a className="px-3" href="#" onClick={() => this.props.updatePage('dashboard')}>
                                Dashboard
                            </a>
                            <a href='#' onClick={this.props.logOut}>
                                Log Out
                            </a>
                        </React.Fragment>
                }
            </div>
        )
    }
}

export default Navbar;