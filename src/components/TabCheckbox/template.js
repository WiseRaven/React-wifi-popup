import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';


const TabCheckboxTemplate =(props) => {
    const { classes } = props;
    return (
        <div className={classes.security}>
            <label className={classes.checkbox_label} htmlFor="checkbox">
                <input onChange={() => props.checkChange(!props.check)} type="checkbox" id="checkbox" className={classes.checkbox} />
                <span className={classes.new__checkbox}></span>
                <span className={classes.mobile__text}>
                    { props.t('checkbox.main-text') }
                </span>
                <span className={classes.security__text}> 
                    { props.type === 'TYPE_USER_RESIDENT' 
                        ? 
                            props.t('checkbox.text-resident') 
                        : 
                            props.t('checkbox.text-visitor') 
                    }
                </span>
            </label>
            <a href="#/" className={classes.checkbox_link}>{ props.t('checkbox.link') }</a>
        </div>
    );
};

export default injectSheet(styles)(TabCheckboxTemplate);
