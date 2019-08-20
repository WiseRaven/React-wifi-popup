import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

import TabFieldPhoneContainer from '../../containers/TabFieldPhoneChange';

const TabFieldsTemplate = (props) => {
    const { classes } = props;
    return (
        <div className={classes.inputs}>
            <input onChange={(e) => props.nameChange(e.currentTarget.value)} type="text" name="name" placeholder={ props.t('input.name') } />
            <input onChange={(e) => props.roomNumberChange(e.currentTarget.value)} type="text" name="flat" placeholder={ props.t('input.number') } className={classes.flat} />
            <TabFieldPhoneContainer /> 
        </div>
    );
};

export default injectSheet(styles)(TabFieldsTemplate);
