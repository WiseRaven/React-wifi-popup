import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

import { TYPE_USER_RESIDENT, TYPE_USER_VISITOR } from '../../const';

const TabRadioChangeTemplate = (props) => {
    const { classes } = props;
    return (
        <div className={classes.radio}>
            <p> 
                { props.t('wifi-text.title') } 
            </p>
            <label htmlFor="contactChoice1">
                <input onChange={() => props.radioChange(TYPE_USER_RESIDENT)} type="radio" name="contact" value="visitor" id="contactChoice1" defaultChecked={props.type === TYPE_USER_RESIDENT } />
                <span className={classes.newradio}></span>
                { props.t('wifi-text.wifi-resident') }
            </label>
            <label htmlFor="contactChoice2">
                <input onChange={() => props.radioChange(TYPE_USER_VISITOR)} type="radio" name="contact" value="not_visitor" id="contactChoice2" defaultChecked={props.type === TYPE_USER_VISITOR} />
                <span className={classes.newradio}></span>
                { props.t('wifi-text.wifi-visitor') }
            </label>
        </div>
    );
};

export default injectSheet(styles)(TabRadioChangeTemplate);
