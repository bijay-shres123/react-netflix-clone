import React, { Component } from 'react';
import Header from '../Components/Header'
import TabComponent  from '../Components/TabComponent'
import Footer  from '../Components/Footer'

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <TabComponent/>
                <Footer/>

            </div>
        )
    }
}

export default Main;
