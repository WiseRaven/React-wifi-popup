import React from 'react';


import FormValidStatusTemplate from './template';

export default class FormValidStatus extends React.Component {
    render() {
        return (
            <FormValidStatusTemplate 
                {...this.props} 
            />
        );
    }
}