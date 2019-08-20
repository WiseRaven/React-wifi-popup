import React from 'react';


import TabTextTemplate from './template';

export default class TabText extends React.Component {
    render() {
        const { AppOptions } = this.props;
        const phone = AppOptions ? AppOptions.phone : '';
        return (
            <TabTextTemplate {...this.props} phone={phone}/>
        );
    }
}
