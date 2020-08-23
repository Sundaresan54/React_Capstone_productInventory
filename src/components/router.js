import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import Footer from './footer';


const Home = lazy(() => import('./home'));
const ProductDetail = lazy(() => import('./productDetail'));
const AddProduct = lazy(() => import('./addProduct'));
const About = lazy(() => import('./about'));
const Profile = lazy(() => import('./profile'));

const Router = (props) => {
    console.log(props,"--")
    let products = [...props.products]

  return (
    <div>
      
      <div className="mt-56">
   
        <Suspense fallback={<h3>Loading...</h3>}>
        <Route exact
            path='/'
            render={(props) => (
               
                <Home {...props} products ={products} />
            )} />
        
          <Route path="/productDetail/:id" component={ProductDetail} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/edit-product/:id" component={AddProduct} />
          <Route path="/profile" component={Profile} />
        	<Route path="/about" component={About} />
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Router;