import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
// to check the correct data type of the values
import PropTypes from "prop-types";

class Product extends Component {
    render() {
        const{id,title,img,price,inCart}=this.props.product;

        return (
            <ProductWrapper className="mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                    {(value)=>(
                    
                    <div className="img-container p-5"
                    onClick={()=> value.handleDetail(id)}>
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"></img>
                    </Link>
                    <button className="cart-btn" 
                    disabled={inCart ? true :false} onClick={()=>{value.addToCart(id); value.openModel(id)}}>
                        {inCart?(<p className="mb-0" disabled>In Cart</p>):(<p className="mb-0">Add to Cart</p>)}
                    </button>
                    </div>)}
                    </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer d-flex jutify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                            <h5 className="font-italic mb-0 text-blue">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

export default Product;
//TYpe checking using propTYpes
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper=styled.div
`
.card{
    border-color:transparent;
    
    transition:all 1s ease-in-out;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s ease-in-out;
    
}
&:hover{
    .card{
        border:1px solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:var(--mainPink);
    }
}
.img-container{
    position:relative;
    overflow:hidden;

}
.card-img-top{
    transition:all 1s ease-in-out;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:6px;
    background:black;
    border:none;
    color:white;
    font-size:25px;
    border-radius:10px 0 0 0;
    transform:translate(100%,100%);
    transition:all 1s ease-in-out;
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color: var(--mainPink);
    cursor: pointer;
}
`;