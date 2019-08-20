import React from 'react';


import MainContentTemplate from './template';

export default class MainContent extends React.Component {
    render() {
        return (
            <MainContentTemplate {...this.props}  />
        );
    }
}
