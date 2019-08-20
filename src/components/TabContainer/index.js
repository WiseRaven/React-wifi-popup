import React from 'react';


import TabContainerTemplate from './template';

export default class TabContainer extends React.Component {
    render() {
        return (
            <TabContainerTemplate { ...this.props } />
        );
    }
}
