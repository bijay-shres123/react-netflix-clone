import React from 'react'
import Img from './../../images/tab-1-pic.png'
import styled from 'styled-components';
import { Button } from './Button';

function TabContentOne() {
    return (
        <TabContentContaier>
            <div className="container">
                <div className="tab-content">
                    <div>
                        <span style={{ marginBottom: '2rem' }}>
                            If you decide Nextflix isn't for you - no problem.
                             No Commitment. Cancel online anytime.</span>

                        <br/>
                        <Button style={{ marginTop: '2rem' }}>try it now</Button>
                    </div>
                    <img src={Img} />
                </div>

            </div>
        </TabContentContaier>
    );
}

export default TabContentOne;

//Main Content Container

const TabContentContaier = styled.div`
    background: var(--main-deep-dark);
    .container{
        margin: 0 10%;
    }

    img{
        width: 31.875rem
    }
    .tab-content{
        display: grid;
        grid-template-colums: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size:2rem;
        padding:2.5rem;
    }
`;