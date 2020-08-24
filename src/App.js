import React from 'react';
import { Navbar, Nav, NavDropdown, Modal, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/userActions';
import { Link } from 'react-router-dom';

import Signup from './components/signup';
import Signin from './components/signin';
import Router from './components/router'

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			showModal: false,
			showSignin: true,
			products: [],
			searchbtn: false
		}
	}
	componentWillMount() {
		this.props.getAllProducts();
	}
	componentWillReceiveProps(newProps) {
		this.setState({ products: newProps.products });
	}
	componentDidMount() {
		let userId = sessionStorage.getItem('userId');
		if (userId) {
			this.props.getUserDetails(userId);
			this.setState({ isLoggedIn: true });

		}

	}

	goToAbout = () => {
		this.props.history.push('/about');
	}

	goToProducts = () => {
		this.props.history.push('/');
	}

	showModal = () => {
		this.setState({ showModal: true });
	}

	handleClose = () => {
		this.setState({ showModal: false });
	}

	showSignup = () => {
		this.setState({ showSignin: false });
	}

	showSignin = () => {
		this.setState({ showSignin: true });
	}

	goToProfile = () => {
		this.props.history.push('/profile');
	}

	goToAddProduct = () => {
		this.props.history.push('/add-product');
	}

	logout = () => {
		sessionStorage.removeItem('userId');
		this.props.history.push('/');
		window.location.reload();
	}

	onSearch = (e) => {
		let filteredProducts = this.props.products.filter(product => {

			return product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0;
		});
		this.setState({ products: filteredProducts, searchbtn: true });
	}

	render() {

		return (
			<div>
				<Navbar fixed="top" expand="lg" bg="primary" variant="dark">
					<Navbar.Brand className="pointer" onClick={this.goToProducts}>Products Inventory</Navbar.Brand>
					
					
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />

					{/* {
					  		this.state.isLoggedIn ?
					  		<div >
						  		<Link to="/add-product" >
						  			<Button className = "btn-hover" variant="light" style={{border: '1px solid #ced4da',marginLeft:'180px',float:'right'}}>Add Product</Button>
						  		</Link>
						  	</div>: ''
						 } */}
					<Navbar.Collapse id="responsive-navbar-nav">
					<div className={this.state.isLoggedIn ? "col-md-4" : "col-md-6"} style={{display: 'flex'}}>
						<Form.Control className="search-field" type="text" placeholder="Search Product" onChange={this.onSearch} />
						{
							this.state.searchbtn?
							<Button className="btn-hover" variant="light" style={{ border: '1px solid #ced4da', marginLeft: '5%', float: 'right' }}>Search</Button>
							: ''
						}
						</div>
						<Nav className="ml-auto">
							{
								this.state.isLoggedIn ?
									<Nav.Link className="c-wh" onClick={this.goToAddProduct}>Add Product</Nav.Link>
									: ''
							}
							<Nav.Link className="c-wh" onClick={this.goToAbout}>About</Nav.Link>
							{!this.state.isLoggedIn ? <Nav.Link className="c-wh" onClick={this.showModal}>Login</Nav.Link> : ''}

							{
								this.state.isLoggedIn ?
									<NavDropdown title={this.props.users && this.props.users.length > 0 ? this.props.users[0].firstName : ''} id="collasible-nav-dropdown">
										<NavDropdown.Item onClick={this.goToProfile}>Profile</NavDropdown.Item>
										<NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
									</NavDropdown> : ''
							}
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<Modal show={this.state.showModal} onHide={this.handleClose} size="lg" centered>
					<Modal.Header closeButton>
						<Modal.Title>
							{this.state.showSignin ? 'Signin' : 'Signup'}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.state.showSignin ? <Signin {...this.props}></Signin> : ''}
						{!this.state.showSignin ? <Signup></Signup> : ''}
						<br />
						{this.state.showSignin ? <p>Not Registered? <a href="#!" onClick={this.showSignup}>Signup Here</a></p> : ''}
						{!this.state.showSignin ? <p>Already Registered? <a href="#!" onClick={this.showSignin}>Login Here</a></p> : ''}
					</Modal.Body>
				</Modal>
				<Router  {...this.state} />
			</div>
		);
	}
}



const mapStateToProps = (state) => {
	return {
		users: state.users,
		products: state.products
	}
}

export default connect(mapStateToProps, actions)(withRouter(Header));