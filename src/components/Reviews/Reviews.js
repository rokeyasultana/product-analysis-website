import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Reviews = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    
    return (
        <div className='review-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            
            
        </div>
    );
};

export default Reviews;