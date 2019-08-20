import React from 'react';


import LanguageOpenTemplate from './template';

export default class LanguageOpen extends React.Component {
    languageSelect(langArr) {
        this.props.onSetLanguageText(langArr[0]);
        this.props.onSetLanguageImg(langArr[1]);
    }
    render() {
        return (
            <LanguageOpenTemplate 
                languageSelect={this.languageSelect.bind(this)} 
                { ...this.props } 
            />
        );
    }
}
