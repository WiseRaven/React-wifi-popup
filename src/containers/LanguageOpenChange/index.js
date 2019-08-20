import React from 'react';
import { connect } from 'react-redux';

import LanguageOpen from '../../components/LanguageOpen';
import { setLanguageText, setLanguageImg } from '../../actions/AppState';

export class LanguageOpenContainer extends React.Component {
    onSetLanguageText(langText) {
        this.props.setLanguageText(langText);
    }
    onSetLanguageImg(langImg) {
        this.props.setLanguageImg(langImg);
    }
    render() {
        return <LanguageOpen 
                    onSetLanguageText={this.onSetLanguageText.bind(this)}
                    onSetLanguageImg={this.onSetLanguageImg.bind(this)}
                    {...this.props} 
                />;
    }
}

const mapStateToProps = state => ({
    langText: state.AppState.langText,
    langImg: state.AppState.langImg
});

const mapDispatchToProps = {
    setLanguageText,
    setLanguageImg
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageOpenContainer);
