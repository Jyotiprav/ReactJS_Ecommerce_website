import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';
class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {value =>{
                        const {cart}=value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <div className="row">
                                        <div className="col-10 mx-auto my-2 text-center text-title">
                                            <h1>
                                                Your Cart
                                            </h1>
                                        </div>
                                    </div>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}/>
                                </React.Fragment>
                            );
                        }
                        else{
                            return(
                            <EmptyCart/>);
                        }
                    }}
                </ProductConsumer>
            
            
            </React.Fragment>
        );
    }
}

export default Cart;