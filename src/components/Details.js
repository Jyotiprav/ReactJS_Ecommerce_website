import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    // console.log(value.detailProduct);
                    const {id,company,img,info,price,title,inCart}=value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* Product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid"></img>
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model L {title}</h1>
                                    <h4 className="text-uppercase text-muted mt-3 mb-2">
                                        made by : {company}

                                    </h4>

                                    <h4 className="text-blue"> 
                                        <strong>
                                            price: <span>$</span>
                                        </strong>
                                    </h4>
                                    <p className="my-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/"> <button className="btn-primary">Back to Products</button></Link>
                                        <ButtonContainer className=" ml-3" 
                                                disabled={inCart?true:false}
                                                onClick={()=>{value.addToCart(id);value.openModel(id);}}>
                                                {inCart?"inCart":"add to cart"}
                                                </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;

const ButtonContainer=styled.div
`
    box-shadow: 0px 10px 14px -7px black;
	background:linear-gradient(to bottom, blue 5%, white 100%);
	background-color:white;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px black;
    &:hover{
    background:linear-gradient(to bottom, white 5%, black 100%);
	background-color:#408c99;
}
`;