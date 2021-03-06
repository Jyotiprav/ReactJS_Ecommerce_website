import React, { Component } from 'react';
import CartItem from './CartItem';
class CartList extends Component {
    
    render() {
        const{cart}=this.props.value;
        console.log(cart);
        return (
            <div className="container-fluid">
                {/* hello from cart list */}
                {cart.map(item=>{
                    return <CartItem key={item.id} item={item} value={this.props.value} />
                })}
                
            </div>
        );
    }
}

export default CartList;