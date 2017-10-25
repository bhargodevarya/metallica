import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs'
import { Link } from 'react-router-dom'

const UserTabs = (props) => {
    let myTabs = props.tabs.map((tab,index) => {
        if(tab === 'TRADES'){
            return <Tab key={index} label={tab} style={{color: 'Black'}}>
            {props.content}
            </Tab>
        } else {
            return <Tab key={index} label={tab} style={{color: 'Black'}}/>
        }
    });

    return(
        <div>
            <Tabs tabItemContainerStyle={{width: '400px',backgroundColor: 'White'}}>
                {myTabs}
            </Tabs>
        </div>
    );
}

module.exports = UserTabs