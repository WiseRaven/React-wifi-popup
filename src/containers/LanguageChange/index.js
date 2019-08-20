import React from 'react';
import { connect } from 'react-redux';

import Language from '../../components/Language';

export class LanguageContainer extends React.Component {
    render() {
        return <Language {...this.props} />;
    }
}

const mapStateToProps = state => ({
    langText: state.AppState.langText,
    langImg: state.AppState.langImg
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageContainer);