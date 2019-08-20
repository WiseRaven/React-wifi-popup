import React from 'react';


import MainTitleTemplate from './template';

export default class MainTitle extends React.Component {
    render() {
        return (
            <MainTitleTemplate {...this.props} />
        );
    }
}
