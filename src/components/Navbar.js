import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavWrapper className = "navbar navbar-expand-sm  navbar-dark px-sm-5">
                    <Link to = '/' className = "nav-link">
                        <img src = {logo} alt="store" className= "navbar-brand"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to='/' className = "nav-Link">
                                Products
                            </Link>
                        </li>
                    </ul> 
                    <Link to ='/cart' className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className = "fa fa-cart-plus"/>MYCART
                            </span>                            
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
         );
    }
}

 
export default Navbar;

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-Link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`