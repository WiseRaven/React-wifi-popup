import React from 'react';
import { connect } from 'react-redux';

import TabCheckbox from '../../components/TabCheckbox';
import { setCheck } from '../../actions/UserInformation';
import { setErrorType } from  '../../actions/ErrorType';

export class TabCheckboxContainer extends React.Component {
    onSetCheck(check) {
        this.props.setCheck(check);
    }
    render() {
        return <TabCheckbox onSetCheck={this.onSetCheck.bind(this)} {...this.props} />;
    }
}

const mapStateToProps = state => ({
    check: state.UserInformation.check,
    errorType: state.ErrorType.errorType
});

const mapDispatchToProps = {
    setCheck,
    setErrorType
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCheckboxContainer);
