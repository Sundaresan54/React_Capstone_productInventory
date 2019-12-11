import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions/users';
import '../index.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log("!!!!!!!!!!!! in headerrrrrr", this.props);
        
    }

    onLogin = () => {
        const userId = document.getElementById("userId").value
        const password = document.getElementById("password").value
        console.log("!!!!!!!!!!!!", userId);
        this.props.login(userId,password);

    }


    render() {
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><button data-toggle="modal" data-target="#myModal" className="nav-link loginButton"><i className="fa fa-sign-in"></i> Login</button></li>
                            <li className="nav-item"><a className="nav-link" href="/"><span className="fa fa-user"></span> Sign Up</a></li>

                        </ul>
                    </div>
                </nav>

                <div class="modal" id="myModal">
                    <div class="modal-dialog modal-centered">
                        <div class="modal-content">


                            <div className="modal-header">
                                <h4 className="modal-title">Login</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <div className="login-row">
                                    <label className="label-text">User Id</label>
                                    <input type="text" id="userId" placeholder="Enter your email Id"></input>
                                </div>
                                <div className="login-row">
                                    <label className="label-text">Password</label>
                                    <input type="password" id="password" placeholder="Enter your password"></input>
                                </div>
                                <div className="login-row">
                                    <button type="button" class="btn btn-outline-success login-submit" data-dismiss="modal" onClick={this.onLogin}>Submit</button>
                                    <button type="button" class="btn btn-outline-danger login-cancel" data-dismiss="modal">Close</button>
                                </div>
                                <div className="login-row">
                                    <p className='register'>New User? <a href='/'>click here to signup</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {this.props.children}
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    
    console.log("mapStateToProps",state);
    return {}
    // allProducts : state.productData
  }
  
  export default connect(mapStateToProps,{login})(Header)