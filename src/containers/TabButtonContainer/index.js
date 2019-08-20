import React from 'react';
import { connect } from 'react-redux';
import fetch from 'cross-fetch';


import TabButton from '../../components/TabButton';

import { setErrorType } from  '../../actions/ErrorType';
import { ERROR_TYPE_FILEDS_FILLING, ERROR_TYPE_CONDITIONS_AGREEMENT, ERROR_TYPE_SERVER } from '../../const';

export class TabButtonContainer extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            checkAuth(this.props.initOptions.checkPoint, this.props.initOptions, this.props.name, this.props.roomNumber);
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    send() {
        if (!this.props.check) {
            this.props.setErrorType(ERROR_TYPE_CONDITIONS_AGREEMENT);
            return;
        }
        checkAuth(this.props.initOptions.loginPoint, this.props.initOptions, this.props.name, this.props.roomNumber, false).catch(error => {
            if(error.type === 'user') {
                this.props.setErrorType(ERROR_TYPE_FILEDS_FILLING);
            } else {
                this.props.setErrorType(ERROR_TYPE_SERVER);
            }
        });
    }
    render() {
        return <TabButton onClick={ this.send.bind(this) } { ...this.props } />;
    }
}

const mapStateToProps = state => ({
    errorType: state.ErrorType.errorType,
    initOptions: state.AppState.initOptions,
    name: state.UserInformation.name,
    roomNumber: state.UserInformation.roomNumber,
    check: state.UserInformation.check,
    phone: state.AppState.initOptions ? state.AppState.initOptions.phone : ''
});

const mapDispatchToProps = {
    setErrorType
}

function checkAuth(url, initOptions, name, roomNumber, silentMode = true) {
    const formData = new FormData();
    formData.append('mac', initOptions.mac);
    formData.append('object', initOptions.object);
    formData.append('subobject', initOptions.subobject);
    formData.append('link-orig', initOptions.dst);
    formData.append('field_login', roomNumber);
    formData.append('field_password', name);

    return new Promise((accept, reject) => {
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(response => response.json()).then((response) => {
            if (response.status === 'success') {
                document.body.querySelector(initOptions.formSelector).submit();
                accept();
            } else {
                if (!silentMode) {
                    reject({
                        type: 'user'
                    });
                }
            }
        }).catch(() =>  { reject({
            type: 'network'
        }) });
    });
}


export default connect(mapStateToProps, mapDispatchToProps)(TabButtonContainer);
