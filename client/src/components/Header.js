import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../index.css'

class Header extends Component {
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
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">


                            <div class="modal-header">
                                <h4 class="modal-title">Login</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body">
                                <div>
                                    <label className="label-text">User Id</label>
                                    <input type="text" name="userId"></input>
                                </div>
                                <div>
                                    <label className="label-text">Password</label>
                                    <input type="text" name="password"></input>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-outline-success login-btn" data-dismiss="modal">Submit</button>
                                    <button type="button" class="btn btn-outline-danger login-btn" data-dismiss="modal">Close</button>
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

export default Header;