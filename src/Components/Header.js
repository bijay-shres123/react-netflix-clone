import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Icon from 'react-icons-kit';
import {Button }from './tabs_content/Button'
//Media Query

import media, { generateMedia } from "styled-media-query";


 class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
          
          <div className="header-top">
            <Logo src={logo}/>
            <NavLink to="/login" className="signedIn-btn">
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

const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'

})

//Logo 
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position:absolute;
    top:25%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${customMedia.lessThan('tablet')`
        left:20%;
    `
}
`;

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
    ${customMedia.lessThan('smTablet')`
    margin-top: 1.25rem;
    right:5%;`}
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
        ${customMedia.lessThan('smTablet')`
         display:grid;
         grid-template-rows: repeat(3,60px);
         margin-top: 8rem;
        `}


    }
    //Main Offer Button
    
    . Icon svg{
        vertical-align: bottom;
        margin-left; 1.5rem;
        ${customMedia.lessThan('smTablet')`
        display: none !!important;
        `}
    }
    .main-offer-btn {
        ${customMedia.lessThan('lgDesktop')`
        margin: 0 33%;
        font-size: 1.5rem;
        `}
        ${customMedia.lessThan('mdDesktop')`
        margin: 0 25%;
        font-size: 1.5rem;
        `}
        ${customMedia.lessThan('tablet')`
        margin: 0 20%;
        font-size: 1.3rem;
        `}
    }
`;

//Main Title

const Title = styled.h1`
    margin: 0 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height; 1.1em;
    ${customMedia.lessThan('smTablet')`
    font-size: 2.6rem;
    `}
`;

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25em;
    margin: 0 0 1.875 rem;
    text-transform: uppercase;
    ${customMedia.lessThan('smTablet')`
    font-size: 1.4rem;
    `}
`;