import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PayPalButton from './PayPalButton';
// history prop is the history API which is used to navigate user to other view programatically
class CartTotals extends Component {
    
    render() {
        const {cartSubtotal, cartTax, cartTotal, clearCart}=this.props.value;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>Clear Cart</button>

                            </Link>
                            <h5>Subtotal :<strong>$ {cartSubtotal}</strong></h5>
                            <h5>Tax :<strong>$ {cartTax}</strong></h5>
                            <h5>Total :<strong>$ {cartTotal}</strong></h5>
                            {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={this.props.history}></PayPalButton> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CartTotals;