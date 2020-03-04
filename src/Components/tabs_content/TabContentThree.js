import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/ionicons/close'
import {checkmark} from 'react-icons-kit/ionicons/checkmark'




function TabContentThree() {
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
                       <table>
                           <thead>
                               <tr>
                                   <th></th>
                                   <th>Basic</th>
                                   <th>Standard</th>
                                   <th>Premium</th>
                               </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monthyly price</td>
                                    <td>$9.99</td>
                                    <td>$13.99</td>
                                    <td>$16.99</td>
                                </tr>
                                <tr>
                                    <td>HD available</td>
                                    <td><Icon icon= {close} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                </tr>
                                <tr>
                                    <td>Ultra available</td>
                                    <td><Icon icon= {close} size={10}/></td>
                                    <td><Icon icon= {close} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                </tr>
                                <tr>
                                    <td>Screens you can watch on at the same time</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Watch on your laptop , TV, phone and tablet</td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                </tr>
                                <tr>
                                    <td>Unlimited movies and TV shows</td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                </tr>
                                <tr>
                                    <td>Cancel Anytime</td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                    <td><Icon icon= {checkmark} size={10}/></td>
                                </tr>
                            </tbody>
                        </table>   
                    </div>
                    
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentThree

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

    //Tab Bottom content
    .tab-bottom-content{
        margin: 2rem auto;

    }

    //Table 
    table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse
    }
    table thead th{
        text-tansform: uppercase;
        paddingL 0.8rem;
    }
    table tbody {
        display:table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    table tbody tr td{
        color: #999;
        padding: 0.8rem 1.2rem;
    }
    table tbody tr td:first-child{
        text-align: left;
    }
    table tbody tr:nth-child(even){
        background: #222;
    }


    
`;