import React from 'react';
import { connect } from 'react-redux';

import FormValidStatus from '../../components/FormValidStatus';

export class FormValidStatusContainer extends React.Component {
    render() {
        return <FormValidStatus 
            {...this.props}
        />;
    }
}

const mapStateToProps = state => ({
    errorType: state.ErrorType.errorType,
    phone: state.AppState.initOptions ? state.AppState.initOptions.phone : '+7 (926) 123-45-67'
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FormValidStatusContainer);
