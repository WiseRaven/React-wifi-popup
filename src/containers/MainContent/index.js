import React from 'react';
import { connect } from 'react-redux';

import MainContent from '../../components/MainContent';
import { setAppInitOptions } from  '../../actions/AppState';

export class MainContentContainer extends React.Component {
    componentDidMount() {
        this.props.setAppInitOptions(this.props.AppOptions);
    }
    render() {
        return <MainContent {...this.props} />;
    }
}

const mapStateToProps = state => ({
    type: state.UserInformation.type,
    errorType: state.ErrorType.errorType,
});

const mapDispatchToProps = {
    setAppInitOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentContainer);
