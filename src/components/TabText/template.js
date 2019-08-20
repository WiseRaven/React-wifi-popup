import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

const TabTextTemplate = (props) => {
    const { classes } = props;
    return (
        <p className={classes.form__text}>
            { props.type === 'TYPE_USER_RESIDENT'
                ?
                    <> { props.t('tab-text.title-resident') } </>
                :
                <> {props.t('tab-text.title-visitor-1')} <br /> {props.t('tab-text.title-visitor-2')} <b> {props.t('tab-text.title-visitor-3')} </b> {props.t('tab-text.title-visitor-4')} <b> { props.phone } </b> </>
                }
        </p>
    );
};

export default injectSheet(styles)(TabTextTemplate);
