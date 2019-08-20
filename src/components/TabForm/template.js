import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

import TabRadioChangeContainer from '../../containers/TabRadioChange';
import TabText from '../TabText';
import FormValidStatusContainer from '../../containers/FormValidStatus';
import TabFieldsContainer from '../../containers/TabFieldsChange';
import TabButtonContainer from '../../containers/TabButtonContainer';
import TabCheckboxContainer from '../../containers/TabCheckChange';

const TabFormTemplate = (props) => {
    return (
        <form>
            <TabRadioChangeContainer { ...props } />
            <TabText { ...props } />
            { props.errorType === 'ERROR_TYPE_FILEDS_FILLING' || props.errorType === 'ERROR_TYPE_CONDITIONS_AGREEMENT' || props.errorType === 'ERROR_TYPE_SERVER' ? <FormValidStatusContainer { ...props } /> : '' }
            { props.type === 'TYPE_USER_RESIDENT' ? <TabFieldsContainer { ...props } /> : '' }
            <TabButtonContainer { ...props } />
            <TabCheckboxContainer { ...props } /> 
        </form> 
    );
};


export default injectSheet(styles)(TabFormTemplate);
