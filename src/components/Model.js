import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Model extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                     const {modelOpen,closeModel} =value;
                     const {img,title,price} =value.modelProduct;
                     if(!modelOpen){
                         return null;
                     }
                     else{
                         return(
                         <ModelContainer>
                             <div className="container">
                                 <div className="row">
                                     <div id="model" className="mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize">
                                         <h5>item added to the cart</h5>
                                         <img src={img} className="img-fluid" alt="product"></img>
                                         <h5>{title}</h5>
                                         <h5 className="text-muted">price: ${price}</h5>
                                         {/* buttons */}
                                         <Link to="/"> <ButtonContainer className="btn-primary" onClick={()=>closeModel()}>Store</ButtonContainer></Link>
                                         <Link to="/cart"> <ButtonContainer className="btn-primary" onClick={()=>closeModel()}>Go to Cart</ButtonContainer></Link>
                                     </div>
                                 </div>
                             </div>

                         </ModelContainer>
                         );

                     }
                }}
            </ProductConsumer>
        );
    }
}

export default Model;

const ModelContainer=styled.div`

position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#model{
    background:white;
}
`
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
;