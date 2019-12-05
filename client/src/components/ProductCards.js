import React, { Component } from 'react';
import product_img from '../assets/product.jpg'
import './productCards.css';

export default class ProductCards extends Component {
    render() {
        console.log("333333333 in cards",this.props)
        return (
            <div className="card product">
            <img className='card-img-top' src={product_img} alt="products"></img>
                <div className="card-body">
                    <h4 className='card-title'>{this.props.product.productName}</h4>
                    <div className='card-text'>{this.props.product.Description}</div>
                    <b className='card-text'>Rs.{this.props.product.price}</b>
                    <p>
                    <a href="/" className="btn btn-primary">See Profile</a>
                    </p>
                    
                </div>
            </div>
        )
    }
}
