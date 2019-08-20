import React from 'react';


import TabFieldsTemplate from './template';

export default class TabFields extends React.Component {
    nameChange(nameText) {
        this.props.onSetUserName(nameText);
    }
    roomNumberChange(roomNumberText) {
        this.props.onSetUserRoomNumber(roomNumberText);
    }
    render() {
        return (
            <TabFieldsTemplate 
                nameChange={this.nameChange.bind(this)}
                roomNumberChange={this.roomNumberChange.bind(this)} 
                { ...this.props } 
            />
        );
    }
}

