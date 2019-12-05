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
                             <li className="nav-item"><a className="nav-link" href="/"><span className="fa fa-sign-in"></span> Login</a></li>
                             <li className="nav-item"><a className="nav-link" href="/"><span className="fa fa-user"></span> Sign Up</a></li>
                               
                        </ul>
                    </div>
                </nav>


                {/* <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="/">Product Inventory</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="/">Home</a></li>
                                <li><a href="/">Page 1</a></li>
                                <li><a href="/">Page 2</a></li>
                                <li><a href="/">Page 3</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="/"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="/"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

                {this.props.children}
            </div >
        )
    }
}

export default Header;