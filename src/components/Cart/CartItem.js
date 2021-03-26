import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const {id,title,img,price,total,count}=this.props.item;
        const {increment,decrement,removeItem}=this.props.value;
        return (
            <div className="row my-2 text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width:'50px',height:"50px"}} className="img-fluid"></img>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product:</span>{title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>{price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                            <span className="btn btn-black mx-1" >{count}</span>
                            <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                            
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={()=>removeItem(id)}>
                        <i className="fas fa-trash" ></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total:$ {total}</strong>
                </div>
            </div>
        );
    }
}

export default CartItem;