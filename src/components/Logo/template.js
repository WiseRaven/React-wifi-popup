import React from 'react';
import { styles } from './styles.js';
import injectSheet from 'react-jss';

const LogoTemplate = ({ classes }) => {
    return (
        <a href="#/" className={classes.logo}>
            <img src="img/logo.png" alt="azimut" />
        </a>
    );
};

export default injectSheet(styles)(LogoTemplate);
