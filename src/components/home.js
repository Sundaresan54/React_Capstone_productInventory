import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Banner from './banner';
import AllProducts from './allProducts';
import {getSingleProduct,addProduct,editProduct,deleteProduct,getUserDetails,updateViews,getAllProducts} from '../actions/productActions';

class Home extends React.Component {

	constructor() {
		super();
		let userId = sessionStorage.getItem('userId');
		this.state = {
			products: [],
			isLoggedIn: userId ? true : false,
			displayPrice: true,
			displayQuantity: false,
			displayDesc: true
		};
	}
	componentDidMount() {
		this.props.getAllProducts();
		this.setState({products: this.props.products});
	}
	componentWillReceiveProps(newProps) {
		this.setState({products: newProps.products});
	}

	triggerDeleteProduct = (id, index) => {
		this.props.deleteProduct(id, index);
	}


	handleFieldChange = (e) => {
		this.setState({[e.target.name]: e.target.checked});
	}

	render() {

		return (
			<div>
				
				<div style={{marginTop: '20px', marginLeft: '5px'}}>
					<div className="row rm">
					  	
					  	
					</div>
				</div>
				<Banner></Banner>
				<div>
				<div className={this.state.isLoggedIn ? "col-md-4" : "col-md-6"} style = {{float: 'right' ,marginLeft: '120px',width: '350px',marginTop: '10px'}}>
					  		<Card body className="customize-field">
							  <Form.Group id="formGridCheckbox">
							    <Form.Check inline type="checkbox" name="displayPrice" onChange={this.handleFieldChange} label="Price" checked={this.state.displayPrice}/>
							    <Form.Check inline type="checkbox" name="displayQuantity" onChange={this.handleFieldChange} label="Quantity" checked={this.state.displayQuantity}/>
							    <Form.Check inline type="checkbox" name="displayDesc" onChange={this.handleFieldChange} label="Description" checked={this.state.displayDesc}/>
							  </Form.Group>
							</Card>
					  	</div>
				</div>	
				<AllProducts {...this.state} triggerDeleteProduct={this.triggerDeleteProduct}></AllProducts>
			</div>
		);
	}
}



export default connect(null, {getSingleProduct,addProduct,editProduct,deleteProduct,getUserDetails,updateViews,getAllProducts})(Home);