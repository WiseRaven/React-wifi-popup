import React from 'react';
import { connect } from 'react-redux';

import TabFields from '../../components/TabFields';
import { setUserName, setUserRoomNumber } from '../../actions/UserInformation';

export class TabFieldsContainer extends React.Component {
    onSetUserName(nameText) {
        this.props.setUserName(nameText);
    }
    onSetUserRoomNumber(roomNumberText) {
        this.props.setUserRoomNumber(roomNumberText);
    }
    render() {
        return <TabFields 
            onSetUserName={this.onSetUserName.bind(this)} 
            onSetUserRoomNumber={this.onSetUserRoomNumber.bind(this)}
            {...this.props} 
        />;
    }
}

const mapStateToProps = state => ({
    name: state.UserInformation.nameText,
    roomNumber: state.UserInformation.roomNumberText,
});

const mapDispatchToProps = {
    setUserName,
    setUserRoomNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabFieldsContainer);
