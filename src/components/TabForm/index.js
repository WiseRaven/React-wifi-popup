import React from 'react';


import TabFormTemplate from './template';

export default class TabForm extends React.Component {
    render() {
        return (
            <TabFormTemplate { ...this.props } />
        );
    }
}
