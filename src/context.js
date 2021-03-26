import React, { Component } from 'react';
// import data from data.js
import {allProducts,detailProduct} from "./data"; 
const ProductContext=React.createContext();
//provider
//consumer
class ProductProvider extends Component {
    // set the state properties
    state={
        // product:allProducts,(wrong line, passing the reference of original data)
        product:[],
        detailProduct:detailProduct,
        cart:[],
        modelOpen:false,
        modelProduct:detailProduct,
        cartSubtotal:0,//for the cart
        cartTax:0,
        cartTotal:0
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        var tempproduct=[];
        allProducts.forEach(item=>{
            const singleItem={...item};
            tempproduct=[...tempproduct,singleItem];
            
        })
        this.setState(()=>{
            return {product:tempproduct}
        })
    }
    getItem=id=>{
        const p=this.state.product.find(item=>item.id ===id);
        return p;
    }
    handleDetail=(id)=>{
        //console.log('hello from detail');
        const p=this.getItem(id);
        this.setState(()=>{
            return {detailProduct:p};
        });
    }
    addToCart=(id)=>{
        // console.log(id);
        var temp=[...this.state.product];
        // change the items into the product array
        const index=temp.indexOf(this.getItem(id));
        const p=temp[index];
        p.inCart=true;
        p.count=1;
        p.total=p.price;
        this.setState(()=>{
            return{product:temp,cart:[...this.state.cart,p]};
        },
        ()=>{
            // console.log(this.state);
            this.addTotals();
        }
        )

    }

    openModel = id=>{
        const p=this.getItem(id);
        this.setState(()=>{
            return {modelProduct:p,modelOpen:true}
        })
    }
    closeModel =()=>{
        this.setState(()=>{
            return{modelOpen:false};
        })
    }
    increment=(id)=>{
        // console.log('This is increment');
        var tempCart=[...this.state.cart];
        const selected=tempCart.find(item=>item.id==id)
        const index=tempCart.indexOf(selected);
        const productVar=tempCart[index];
        productVar.count=productVar.count+1;
        productVar.total=productVar.count*productVar.price;
        this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals();})

    }
    decrement=(id)=>{
        //console.log('This is decrement');
        var tempCart=[...this.state.cart];
        const selected=tempCart.find(item=>item.id==id)
        const index=tempCart.indexOf(selected);
        const productVar=tempCart[index];
        productVar.count=productVar.count-1;
        if(productVar.count===0){
            this.removeItem(id)
        }
        else{
            productVar.total=productVar.count*productVar.price;
            this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals();})
        }
        
    }
    removeItem=(id)=>{
        // console.log('This is remove');
        var tempProducts=[...this.state.product];
        let tempCart=[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id !==id);
        const index=tempProducts.indexOf(this.getItem(id));
        let removedProduct=tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{
            this.addTotals();
        })
    }
    clearCart=()=>{
        // console.log('cart was cleared');
        this.setState(
            ()=>{
            return{
                cart:[]
            };
            },
            ()=>{
                this.setProducts();
                this.addTotals();
            })
    }
    addTotals=()=>{
        let subTotal=0;
        this.state.cart.map(item =>(subTotal+=item.total));
        const tempTax=subTotal*0.1;
        const tax=parseFloat(tempTax.toFixed(2));
        const total=subTotal+tax;
        this.setState(()=>{
            return{
                cartSubtotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }



    // code for testing product behavior
    // we need a copy of data not the reference to original data
    tester=()=>{
        console.log("State Products:",this.state.product[0].inCart);
        console.log("Data Products:",allProducts[0].inCart);

        const temp=[...this.state.product];
        temp[0].inCart=true;
        this.setState(
            ()=>{
            return {product:temp};
            },

            ()=>{
                console.log("State Products:",this.state.product[0].inCart);
                console.log("Data Products:",allProducts[0].inCart); 
            }
        );
    }
    render() {
        return (
            //! =============for testing====================
            // <ProductContext.Provider value="hello from context">
            //     {this.props.children}
            // </ProductContext.Provider>
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModel:this.openModel,
                closeModel:this.closeModel,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {/* <button onClick={this.tester}>Test me</button> */}
                {this.props.children}
            </ProductContext.Provider>

        );
    }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer};