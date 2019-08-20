import React from 'react';


import LanguageTemplate from './template';

export default class Language extends React.Component {
    render() {
        return (
            <LanguageTemplate { ...this.props } />
        );
    }
}
