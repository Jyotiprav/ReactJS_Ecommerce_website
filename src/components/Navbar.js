import React, { Component } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
// for adding a locallly stored image
import shopImage from '../shop.png';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            // <div>
            //     <h3>Hello from navbar</h3>
            // </div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
                    <Link to="/">
                        <img src={shopImage} alt="image here" width="80px" height="80px" className="navbar-brand"></img>
                    </Link>
                <ul className="navbar-nav">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus mr-2"></i>
                        My Cart
                    </ButtonContainer>
                </Link>
            </nav>
            
        );
    }
}
const ButtonContainer=styled.button
`font-size:20px;
background:transparent;
border:2px solid var(--mainPink);
color:var(--mainPink);
border-radius:2px;
padding:2px 3px;
cursor:pointer;
margin:2px;
transitionale:all 0.5s ease-in-out;
&:hover{
    background:var(--mainPink);
    color:white;
}
&:focus{
    outline:none;
}`;

export default Navbar;