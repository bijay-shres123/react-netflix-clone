import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld'
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown'

class Footer extends Component {
    state = {
        langContent: false
    }
    handleToggle = e =>{
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }
  render() {
    return (
      <FooterContainer>
        <span style ={{ marginLeft: '15%', fontSize:'1.125rem'}}>Questions? <Link>Call 1-877-742-1335</Link></span>
        <div className = "footer-columns">
            <ul>
                <li>
                    <Link>FAQ</Link>
                </li>
                <li>
                    <Link>Investor Relations</Link>
                </li>
                <li>
                    <Link>Ways to Watch</Link>
                </li>
                <li>
                    <Link>Corporte Information</Link>
                </li>
                <li>
                    <Link>Netflix Originals</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link>Help Center</Link>
                </li>
                <li>
                    <Link>Jobs</Link>
                </li>
                <li>
                    <Link>Terms of Life</Link>
                </li>
                <li>
                    <Link>Contact List</Link>
                </li>
                
            </ul>
            <ul>
                <li>
                    <Link>Account</Link>
                </li>
                <li>
                    <Link>Reedem Gift Cards</Link>
                </li>
                <li>
                    <Link>Privacy</Link>
                </li>
                <li>
                    <Link>Speed Time</Link>
                </li>
                
            </ul>
            <ul>
                <li>
                    <Link>Media Center</Link>
                </li>
                <li>
                    <Link>Buying Gift Cards</Link>
                </li>
                <li>
                    <Link>Cookie Preference</Link>
                </li>
                <li>
                    <Link>Logical Notices</Link>
                </li>
                
            </ul>
            {/*Language Button */}
            <div className="lang-btn" onClick ={this.handleToggle}>
                <Icon icon={iosWorld} size={20} />
                &nbsp;English
                <Icon icon={arrowSortedDown} size={20} />
               
            </div>
        </div>
        {/* Toggle Language Content */}
        {this.state.langContent === true ?
        <div class ="lang-toggle">
            <ul>
                <li>English</li>
            </ul>
            <ul>
                <li>Nepali</li>
            </ul>
        </div> : ""
        }
        
        
      </FooterContainer>
    )
  }
}

export default  Footer

const FooterContainer= styled.footer`
    backgorund: var(--main-deep-dark);
    padding-topL 10rem;
    padding-bottom: 3rem;
    color: #999;

    .footer-columns{
        width:70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4,1fr);

    }
    ul li{
        list-style: none;
        line-height: 2.5;
    }
    a{
        color: #999;

    }
    a:hover{
        text-decoration: underline;
        cursor: ponter;
    }
    //Language Button
    .lang-btn{
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width:8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 2rem 0 0 ;
        cursor: pointer;

    }
    //Toggle language content
    .lang-toggle{
        margin-left: 15%;
        position : absolute;
    }
    .lang-toggle ul{
        background: var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #333;
        margin: 0 0 0 -2px;
     
        &:hover {
            background: #0085ff; 
            color: #fff;
        }
        
    }
`;


