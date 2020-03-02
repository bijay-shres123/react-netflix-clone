import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabDoor from './tabs_nav/TabDoor';
import TabPrice from './tabs_nav/TabPrice';
import TabDevices from './tabs_nav/TabDevices';

//Tabs Content
import TabContentOne from './tabs_content/TabContentOne'
import TabContentTwo from './tabs_content/TabContentTwo'
import '../Css/TabsNav.css'

class TabComponent extends Component {
  state = {
    tabIndex: 0
  }
  render() {
    return (
      <div>
        <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect ={tabIndex => this.setState( {tabIndex} )}>
          <TabList className="tabs-nav-container">
            <Tab className ={`${this.state.tabIndex ===0 ? 'active' : null}`}>
              <TabDoor/>
              <p ><strong>No commitments.<br/>
              Cancel online at any time</strong>
              </p>
              </Tab>
            <Tab className ={`${this.state.tabIndex ===1 ? 'active' : null}`}>
              <TabDevices/>
              <p style={{marginTop: '-5.3125rem'}}><strong>Watch Anywhere</strong>
              </p>
            </Tab>
            <Tab className ={`${this.state.tabIndex ===2 ? 'active' : null}`}>
              <TabPrice/>
              <p style={{marginTop: '-0.3125rem'}}><strong>Pick your price</strong></p>
            </Tab>
          </TabList>
          {/* Tabs Content */}
          <TabPanel>
            <TabContentOne/>
          </TabPanel>
          <TabPanel>
            <TabContentTwo/>
          </TabPanel>
        </Tabs>
        
      </div>
    )
  }
}

export default  TabComponent;