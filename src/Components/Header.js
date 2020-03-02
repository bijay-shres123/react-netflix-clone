import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Icon from 'react-icons-kit';
import {Button }from './tabs_content/Button'


 class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
          
          <div className="header-top">
            <Logo src={logo}/>
            <NavLink to="" className="signedIn-btn">
            Sign In
          </NavLink>
          </div>
        {/* Header Content */}
        <div className = "header-content">
            <Title>See whats Next</Title>
            <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
        <Button className="main-offer-btn" primary>
            Try it now
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
        </Button>
        </div>
      </HeaderComponent>

    )
  }
}

export default Header;

//Logo 
const Logo = styled.img`
width: 10rem;
height: 3.5rem;
position:absolute;
top:25%;
left: 50%;
transform: translate(-50%, -50%);
`

//Header Container
const HeaderComponent = styled.div`
.signedIn-btn{
    right:0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover{
        background: var(--main-red-hover)
    }
}
    //Header Top
    .header-top{
     position: relative;
     height: 10rem;
     z-index: 1;

    }
    //HeaderContent

    .header-content{
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index:1;

    }
    //Main Offer Button
    
    . Icon svg{
        vertical-align: bottom;
        margin-left; 1.5rem;
    }
`;

//Main Title

const Title = styled.h1`
    margin: 0 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height; 1.1em;
`;

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25em;
    margin: 0 0 1.875 rem;
    text-transform: uppercase;
`;