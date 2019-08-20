import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

import { ERROR_TYPE_FILEDS_FILLING, ERROR_TYPE_CONDITIONS_AGREEMENT, ERROR_TYPE_SERVER } from '../../const';

const FormValidStatusTemplate = (props) => {
    const { classes } = props;
    return (
        <p className={ classes.status__text }>

            { props.errorType === ERROR_TYPE_CONDITIONS_AGREEMENT
                ? 
                    <span>{ props.t('errors.checkbox') }</span>
                : 
                    '' 
            }

            { props.errorType === ERROR_TYPE_FILEDS_FILLING
                ? 
                    <span>{ props.t('errors.fields') }</span>
                : 
                    '' 
            }

            { props.errorType === ERROR_TYPE_SERVER
                ? 
                    <span>{ props.t('errors.server') }</span>
                : 
                    '' 
            }           

        </p>
    );
};

export default injectSheet(styles)(FormValidStatusTemplate);
