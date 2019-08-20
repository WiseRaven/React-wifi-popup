import React from 'react';
import { connect } from 'react-redux';

import TabFieldPhone from '../../components/TabFieldPhone';
import { setUserPhone } from '../../actions/UserInformation';

export class TabFieldPhoneContainer extends React.Component {
    onSetUserPhone(phoneText) {
        this.props.setUserPhone(phoneText);
    }
    render() {
        return <TabFieldPhone 
            onSetUserPhone={this.onSetUserPhone.bind(this)}
            {...this.props} 
        />;
    }
}

const mapStateToProps = state => ({
    phone: state.UserInformation.phoneText,
});

const mapDispatchToProps = {
    setUserPhone
}

export default connect(mapStateToProps, mapDispatchToProps)(TabFieldPhoneContainer);
