import React from 'react';


import TabFieldPhoneTemplate from './template';

export default class TabFieldPhone extends React.Component {
    phoneChange(phoneText) {
        this.props.onSetUserPhone(phoneText);
    }
    render() {
        return (
            <TabFieldPhoneTemplate
                phoneChange={this.phoneChange.bind(this)} 
                {...this.props}
            />
        );
    }
}
