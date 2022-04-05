import React from 'react';
import'./Product.css';

const Product = (props) => {
    const{name,review,product,rating}=props.product;
   
    return (
        <div className='product'>
          
         <div className='product-review'>
         <h3>Reviewer-Name: {name}</h3>
          <h4>Product-Name:{product}</h4>
          <p>Review:{review}</p>
          <p>Ratings:{rating}</p>
         </div>
        </div>
    );
};

export default Product;