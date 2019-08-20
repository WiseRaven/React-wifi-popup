import React from 'react';


import TabButtonTemplate from './template';

export default class TabButton extends React.Component {
    render() {
        return (
            <TabButtonTemplate { ...this.props } />
        );
    }
}
