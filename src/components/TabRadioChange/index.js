import React from 'react';


import TabRadioChangeTemplate from './template';

export default class TabRadioChange extends React.Component {
    radioChange(type) {
        this.props.onSetUserType(type);
        this.props.setErrorType(null);
    }
    render() {
        return (
            <TabRadioChangeTemplate radioChange={this.radioChange.bind(this)} {...this.props} />
        );
    }
}
