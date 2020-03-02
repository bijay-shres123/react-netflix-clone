import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'
import ImgTV from './../../images/tab-tv.png'

function TabContentTwo() {
    return (
        <TabContainer>
            <div className="container">
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style ={{fontSize: '1.5rem'}}>
                        Watch TV shows and movies anytime,
                         anywhere- personalized for you.
                     </span>
                    <Button className="btn ">Try it now</Button>
                    </div>
                    {/* Tab Bottom Content */}
                    <div class="tab-bottom-content">
                        {/* TV IMAGE CONTAINER */}
                        <div>
                            <img src={ImgTV } alt=""/>
                            <h3>Watch on your TV</h3>
                            <p>Smart TVs, PlayStation,Xbox, Chromecasr, Apple TV, Blue-ray players and more.</p>
                        </div>
                         {/* Laptop IMAGE CONTAINER */}
                         <div>
                            <img src={ImgTV } alt=""/>
                            <h3>Watch on your TV</h3>
                            <p>Smart TVs, PlayStation,Xbox, Chromecasr, Apple TV, Blue-ray players and more.</p>
                        </div>
                         {/* Tablet IMAGE CONTAINER */}
                         <div>
                            <img src={ImgTV } alt=""/>
                            <h3>Watch on your TV</h3>
                            <p>Smart TVs, PlayStation,Xbox, Chromecasr, Apple TV, Blue-ray players and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentTwo

//Main Tab Content Container

const TabContainer = styled.div`
    background: var(--main-deep-dark);
    .tab-content{
        margin:0;

    }
    //Tab Top Content
    .tab-top-content{
        display:grid;
        grid-template-columns: repeat(12,1fr);
        justify-content:center;
        align-items: center;
        padding: 2.5rem 0;
    }
    span{
        grid-column: 1/8;
    }
    .btn{
        margin: 0 1.25re 1.125rem;
        grid-colum : 10 / 12;
    }
    .container {
        margin: 0 10%;
    }
`;