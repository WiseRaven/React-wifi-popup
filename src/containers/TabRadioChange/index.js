import React from 'react';
import { connect } from 'react-redux';

import TabRadioChange from '../../components/TabRadioChange';
import { setUserType } from '../../actions/UserInformation';
import { setErrorType } from  '../../actions/ErrorType';

export class TabRadioChangeContainer extends React.Component {
    onSetUserType(type) {
        this.props.setUserType(type);
    }
    render() {
        return <TabRadioChange onSetUserType={this.onSetUserType.bind(this)} {...this.props} />;
    }
}

const mapStateToProps = state => ({
    type: state.UserInformation.type,
    errorType: state.ErrorType.errorType,
});

const mapDispatchToProps = {
    setUserType,
    setErrorType
}

export default connect(mapStateToProps, mapDispatchToProps)(TabRadioChangeContainer);
