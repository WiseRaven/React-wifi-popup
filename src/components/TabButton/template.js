import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';


const TabButtonTemplate = (props) => {
    const { classes, phone } = props;
    const purePhone = phone.replace(/[^+0-9]/g, '');
    return (
        <div className={classes.btn_block}>
            { props.type === 'TYPE_USER_RESIDENT'
                ?
                    <button onClick={props.onClick} className={classes.btn} type="button">{ props.t('button.text-resident') }</button>
                :
                    <a 
                        href={`tel:${purePhone}`} 
                        className={!props.check ? [classes.btn, classes.btn__disable].join(' ') : classes.btn}
                    >
                            {props.t('button.text-visitor')} {phone}
                    </a>
            }
        </div>
    );
};

export default injectSheet(styles)(TabButtonTemplate);
