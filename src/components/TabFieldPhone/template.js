import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';
import ReactPhoneInput from 'react-phone-input-2';

const TabFieldPhoneTemplate = (props) => {
    return (
        <ReactPhoneInput
            defaultCountry={'ru'} 
            inputExtraProps={{
                name: 'phone',
                required: true,
            }}
            onChange={(phone) => props.phoneChange(phone)}
        />
    );
};

export default injectSheet(styles)(TabFieldPhoneTemplate);
