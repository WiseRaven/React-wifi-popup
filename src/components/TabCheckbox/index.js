import React from 'react';


import TabCheckboxTemplate from './template';

export default class TabCheckbox extends React.Component {
    checkChange(check) {
        this.props.onSetCheck(check);
        this.props.setErrorType(null);
    }
    render() {
        return (
            <TabCheckboxTemplate
                checkChange={this.checkChange.bind(this)}
                {...this.props}
            />
        );
    }
}
