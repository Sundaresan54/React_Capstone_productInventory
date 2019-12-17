import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Header, Modal, Icon, Input } from 'semantic-ui-react';
import { login, logout } from '../actions/users';
import '../index.css'

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,

        }
    }

    componentDidMount() {
        console.log("!!!!!!!!!!!! in headerrrrrr component", this.props, this.props.user);
        // console.log("@@@@@@@@@@ didupdate component", this.props.user.message);   
    }

    show = () => {
        this.setState({ open: true }, () => {
        })

    }
    close = () => {
        console.log("open is false")
        this.setState({ open: false })
    }


    loggedInIcons = () => {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><button className="nav-link loginButton" onClick={() => this.logout()}><i className="fa fa-sign-out"></i> Logout</button></li>
                <li className="nav-item"><a className="nav-link" href="/"><span className="fa fa-user"></span> {this.props.user.user.firstName}</a></li>
            </ul>
        )
    }

    loginIcons = () => {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><button className="nav-link loginButton" onClick={() => this.show('mini')}><i className="fa fa-sign-in"></i> Login</button></li>
                <li className="nav-item"><a className="nav-link" href="/"><span className="fa fa-user"></span> Sign Up</a></li>
            </ul>
        )
    }

    onLogin = () => {
        const userId = document.getElementById("userId").value
        const password = document.getElementById("password").value
        //console.log("!!!!!!!!!!!!", this.props);
        this.props.login(userId, password);

    }

    loginError = () => {
        return (
            <div className="login-row">
                <p className='register'>{this.props.user.message}</p>
            </div>
        )
    }

    logout() {
        console.log("ooooooooooo");
        this.props.logout();
    }

    render() {

        const { open } = this.state
        // console.log("99999",this.props.user.modal);
        console.log(this.state.open, "modal ")

        let modal = (
            <div>

                <Modal className="loginModal" size="small" open={open} onClose={() => this.close()}>
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Content>
                        <div className="login-row">
                            <label className="label-text">User Id</label>
                            <input type="text" id="userId" placeholder="Enter your email Id" autoFocus></input>
                        </div>
                        <div className="login-row">
                            <label className="label-text">Password</label>
                            <input type="password" id="password" placeholder="Enter your password"></input>
                        </div>
                        {/* <div className="login-row">
                            </div> */}

                    </Modal.Content>
                    <Modal.Actions>
                        <button positive type="button" className="btn btn-outline-success login-submit" onClick={this.onLogin}>Submit</button>
                        <button negative type="button" className="btn btn-outline-danger login-cancel" onClick={() => this.close()}>Close</button>

                        {/* <Button negative onClick={() => this.close()}>No</Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Yes'
                        /> */}
                    </Modal.Actions>
                </Modal>
            </div>
        )
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                    <a className="navbar-brand" href="/">Product Inventory</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav justify-content-center ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>

                        {
                            this.props.user.authenticated ? this.loggedInIcons() : this.loginIcons()
                        }
                    </div>
                </nav>
                {modal}
                {/* 
                <div className="modal" id="myModal">
                    <div className="modal-dialog modal-centered">
                        <div className="modal-content">


                            <div className="modal-header">
                                <h4 className="modal-title">Login</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <div className="login-row">
                                    <label className="label-text">User Id</label>
                                    <input type="text" id="userId" placeholder="Enter your email Id" autoFocus></input>
                                </div>
                                <div className="login-row">
                                    <label className="label-text">Password</label>
                                    <input type="password" id="password" placeholder="Enter your password"></input>
                                </div>
                                <div className="login-row">
                                    <button type="button" className="btn btn-outline-success login-submit" data-dismiss={this.props.user.modal} onClick={this.onLogin}>Submit</button>
                                    <button type="button" className="btn btn-outline-danger login-cancel" data-dismiss="modal">Close</button>
                                </div>
                                 {
                                    (this.props.user.error)?this.loginError():null
                                } 
                                <div className="login-row">
                                    <p className='register'>New User? <a href='/'>click here to signup</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {this.props.children}
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    // user : state.users
    console.log("mapStateToProps", state);
    return { user: state.users }

}


export default connect(mapStateToProps, { login, logout })(HeaderComponent)