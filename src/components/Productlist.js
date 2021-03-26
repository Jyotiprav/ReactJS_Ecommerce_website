import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';

class Productlist extends Component {
    // state={
    //     products:allProducts
    // };
    
    render() {
        return (
            // <div>
            //     <h3>Hello from productlist</h3>
            //     <Product></Product>
            // </div>
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mx-auto my-2 text-center text-title">
                                <h1>
                                    All Products
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {/* for testing */}
                                {/* {(value)=>{
                                    return <h1>{value}</h1>
                                }} */}
                                {value=>{console.log(value);
                                return value.product.map(product =>{return <Product key={product.id} product={product} />
                                })
                            }}
                            </ProductConsumer>
                        
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Productlist;